import React, { useState, useEffect, useRef } from "react";
import { Copy, Maximize, Minimize, RefreshCw, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { TypographyH2 } from "@/components/ui/typography";
import CodeEditor from "../CodeEditor";
import { LiveProvider, LiveError, LivePreview } from "react-live";

// Import essential UI components for the practice component
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export function ComponentPractice({ 
  name,
  initialLiveCode,
  scope,
  getActiveFilePath,
  transformImports 
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liveCode, setLiveCode] = useState(initialLiveCode);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();
  
  // Update liveCode when initialLiveCode changes (e.g., when switching components)
  useEffect(() => {
    setLiveCode(initialLiveCode);
  }, [initialLiveCode]);

  // Create a more robust proxy handler to catch any undefined references
  const proxyHandler = {
    get: (target, prop) => {
      // If the property exists, return it
      if (prop in target) {
        return target[prop];
      }
      
      // For undefined components, return a placeholder component
      if (typeof prop === 'string' && /^[A-Z]/.test(prop)) {
        console.warn(`Component '${prop}' was referenced but not defined. Using placeholder.`);
        // Create a component that accepts any props and renders children
        const PlaceholderComponent = (props) => {
          try {
            return (
              <div style={{ padding: '8px', border: '1px dashed #999', margin: '4px', borderRadius: '4px' }}>
                <div style={{ fontSize: '12px', color: '#666' }}>Placeholder for {prop}</div>
                {props?.children}
              </div>
            );
          } catch (err) {
            console.error(`Error rendering placeholder for ${prop}:`, err);
            return <div>Error rendering {prop}</div>;
          }
        };
        
        // Make the component handle nested properties too
        return new Proxy(PlaceholderComponent, proxyHandler);
      }
      
      // For other undefined properties, return a function that returns undefined
      // This prevents "is not a function" errors
      return () => undefined;
    }
  };

  // Create a simplified scope with essential React features and UI components
  const baseScope = {
    // React core
    ...React,
    // User-provided scope
    ...scope,
    // React hooks
    useState,
    useEffect,
    useRef,
    useCallback: React.useCallback,
    useMemo: React.useMemo,
    useContext: React.useContext,
    
    // Basic UI components from our imports
    Button,
    Card, CardContent, CardDescription, CardHeader, CardTitle,
    ResizableHandle, ResizablePanel, ResizablePanelGroup,
    
    // Basic HTML elements
    Div: (props) => <div {...props}>{props.children}</div>,
    Span: (props) => <span {...props}>{props.children}</span>,
    
    // This is needed for react-live to work properly
    render: (element) => element,
    
    // Add any additional components or utilities that might be needed
    cn: (...args) => args.filter(Boolean).join(' '), // Common utility for class names
  };
  
  // Create a proxy to handle undefined components
  const fullScope = new Proxy(baseScope, proxyHandler);

  // Process the code to make it compatible with react-live
  const processCode = (code) => {
    // Remove import statements as they're not needed in the preview
    let processedCode = code.replace(/import\s+.*?from\s+['"].*?['"];?/g, '');
    
    // For inline mode (noInline=false), we need to make sure the code returns JSX
    if (!processedCode.includes('return ') && !processedCode.includes('=>')) {
      // If it's just a component definition without a return statement, wrap it
      processedCode = `() => ${processedCode}`;
    }
    
    return processedCode.trim();
  };

  // Handle refreshing the preview
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 300);
  };

  // Component to display errors in a nice format
  const ErrorDisplay = ({ error }) => (
    <div className="border border-red-500 rounded-md p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 w-full max-w-md">
      <div className="font-semibold mb-1">Error rendering component:</div>
      <pre className="text-sm overflow-auto max-h-[200px] whitespace-pre-wrap">
        {error}
      </pre>
    </div>
  );

  // Custom error boundary for the live preview
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }
    
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
    
    componentDidCatch(error, errorInfo) {
      console.error('Component error:', error, errorInfo);
    }
    
    render() {
      if (this.state.hasError) {
        return <ErrorDisplay error={this.state.error?.toString() || 'Unknown error'} />;
      }
      
      return this.props.children;
    }
  }

  const PreviewContent = () => (
    <div className="w-full h-full">
      {isRefreshing ? (
        <div className="flex items-center justify-center h-full w-full">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      ) : (
        <ErrorBoundary>
          <LiveProvider 
            code={processCode(liveCode)} 
            scope={fullScope} 
            noInline={false}
          >
            <LiveError 
              className="border border-red-500 rounded-md p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 w-full max-w-md overflow-auto"
            />
            <div className="flex items-center justify-center p-4">
              <LivePreview className="w-full" />
            </div>
          </LiveProvider>
        </ErrorBoundary>
      )}
    </div>
  );

  const PracticeContent = () => (
    <Card className={isFullscreen ? 'w-full h-full max-w-none max-h-none rounded-none shadow-none' : ''}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Practice Component</CardTitle>
          <CardDescription>
            Edit and practice with the component code in real-time. Drag the handle to resize panels.
          </CardDescription>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsFullscreen(!isFullscreen)} 
          className="ml-2"
        >
          {isFullscreen ? (
            <Minimize className="h-5 w-5" />
          ) : (
            <Maximize className="h-5 w-5" />
          )}
        </Button>
      </CardHeader>
      <CardContent className={isFullscreen ? 'h-[calc(100vh-120px)]' : ''}>
        <ResizablePanelGroup direction="horizontal" className={`${isFullscreen ? 'h-full' : 'min-h-[400px] max-h-[500px]'} gap-4`}>
          <ResizablePanel defaultSize={40} minSize={30}>
            <div className="h-full space-y-2">
              <div className="flex items-center justify-between">
                <TypographyH2 className="text-lg font-semibold">Code Editor</TypographyH2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    navigator.clipboard.writeText(liveCode);
                    toast({
                      title: "Code copied!",
                      description: "The code has been copied to your clipboard.",
                      duration: 2000,
                    });
                  }}
                  className="h-8 w-8"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <CodeEditor
                initialCode={liveCode}
                onChange={(code) => {
                  setLiveCode(code);
                }}
                language="jsx"
                filePath={getActiveFilePath ? getActiveFilePath(name) : undefined}
                className="h-full min-h-[300px] border rounded-md"
              />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60} minSize={30}>
            <div className="h-full space-y-2">
              <div className="flex items-center justify-between">
                <TypographyH2 className="text-lg font-semibold">Browser Preview</TypographyH2>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleRefresh}
                  className="h-8 w-8"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
              <div className="border rounded-lg bg-white dark:bg-zinc-900 h-full overflow-hidden flex flex-col">
                {/* Browser Toolbar */}
                <div className="border-b p-2 flex items-center gap-2 bg-gray-100 dark:bg-zinc-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white dark:bg-zinc-700 rounded-md px-3 py-1 text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2">
                      <span>localhost:3000</span>
                    </div>
                  </div>
                </div>
                {/* Browser Content */}
                <div className="flex-1 overflow-auto relative p-4">
                  <PreviewContent />
                </div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </CardContent>
    </Card>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <PracticeContent />
        </div>
      </div>
    );
  }

  return <PracticeContent />;
} 