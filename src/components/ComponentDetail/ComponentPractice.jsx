import React, { useState, useEffect, useRef } from "react";
import { Copy, Maximize, Minimize, RefreshCw, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { TypographyH2 } from "@/components/ui/typography";
import CodeEditor from "../CodeEditor";
import { LiveProvider, LiveError, LivePreview } from "react-live";

// Import essential UI components for the practice component
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

// --- Proxy Handler for Undefined Components ---
const proxyHandler = {
  get: (target, prop) => {
    if (prop in target) return target[prop];
    if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
      // Placeholder for undefined components
      const PlaceholderComponent = (props) => {
        try {
          return (
            <div
              style={{
                padding: "8px",
                border: "1px dashed #999",
                margin: "4px",
                borderRadius: "4px",
              }}
            >
              <div style={{ fontSize: "12px", color: "#666" }}>
                Placeholder for {prop}
              </div>
              {props?.children}
            </div>
          );
        } catch (err) {
          return <div>Error rendering {prop}</div>;
        }
      };
      return new Proxy(PlaceholderComponent, proxyHandler);
    }
    return () => undefined;
  },
};

// --- Base Scope for Live Code ---
function createBaseScope(scope) {
  return {
    ...React,
    ...scope,
    useState,
    useEffect,
    useRef,
    useCallback: React.useCallback,
    useMemo: React.useMemo,
    useContext: React.useContext,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
    Div: (props) => <div {...props}>{props.children}</div>,
    Span: (props) => <span {...props}>{props.children}</span>,
    render: (element) => element,
    cn: (...args) => args.filter(Boolean).join(" "),
  };
}

// --- Code Processor for react-live ---
function processCode(code) {
  let processedCode = code.replace(/import\s+.*?from\s+['"].*?['"];?/g, "");
  if (!processedCode.includes("return ") && !processedCode.includes("=>")) {
    processedCode = `() => ${processedCode}`;
  }
  return processedCode.trim();
}

// --- Error Display Component ---
const ErrorDisplay = React.memo(({ error }) => (
  <div className="border border-red-500 rounded-md p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 w-full max-w-md">
    <div className="font-semibold mb-1">Error rendering component:</div>
    <pre className="text-sm overflow-auto max-h-[200px] whitespace-pre-wrap">
      {error}
    </pre>
  </div>
));

// --- Error Boundary ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // Optionally log error
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorDisplay error={this.state.error?.toString() || "Unknown error"} />
      );
    }
    return this.props.children;
  }
}

export function ComponentPractice({
  name,
  initialLiveCode,
  scope,
  getActiveFilePath,
  transformImports,
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liveCode, setLiveCode] = useState(initialLiveCode);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  // --- Effects ---
  useEffect(() => {
    setLiveCode(initialLiveCode);
  }, [initialLiveCode]);

  // --- Stable Scope Proxy ---
  const fullScope = React.useMemo(
    () => new Proxy(createBaseScope(scope), proxyHandler),
    [scope]
  );

  // --- Handlers ---
  const handleRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 300);
  }, []);

  // --- Preview Content ---
  const PreviewContent = React.useCallback(
    () => (
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
              <LiveError className="border border-red-500 rounded-md p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 w-full max-w-md overflow-auto" />
              <div className="flex items-center justify-center p-4">
                <LivePreview className="w-full" />
              </div>
            </LiveProvider>
          </ErrorBoundary>
        )}
      </div>
    ),
    [isRefreshing, liveCode, fullScope]
  );

  // --- Practice Content ---
  const PracticeContent = React.useCallback(
    () => (
      <Card
        className={
          isFullscreen
            ? "w-full h-full max-w-none max-h-none rounded-none shadow-none"
            : ""
        }
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Practice Component</CardTitle>
            <CardDescription>
              Edit and practice with the component code in real-time. Drag the
              handle to resize panels.
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
        <CardContent className={isFullscreen ? "h-[calc(100vh-120px)]" : ""}>
          <ResizablePanelGroup
            direction="horizontal"
            className={`${
              isFullscreen ? "h-full" : "min-h-[400px] max-h-[500px]"
            } gap-4`}
          >
            <ResizablePanel defaultSize={40} minSize={30}>
              <div className="h-full space-y-2">
                <div className="flex items-center justify-between">
                  <TypographyH2 className="text-lg font-semibold">
                    Code Editor
                  </TypographyH2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      navigator.clipboard.writeText(liveCode);
                      toast({
                        title: "Code copied!",
                        description:
                          "The code has been copied to your clipboard.",
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
                  onChange={setLiveCode}
                  language="jsx"
                  filePath={
                    getActiveFilePath ? getActiveFilePath(name) : undefined
                  }
                  className="h-full min-h-[300px] border rounded-md"
                />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60} minSize={30}>
              <div className="h-full space-y-2">
                <div className="flex items-center justify-between">
                  <TypographyH2 className="text-lg font-semibold">
                    Browser Preview
                  </TypographyH2>
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
    ),
    [
      isFullscreen,
      liveCode,
      getActiveFilePath,
      handleRefresh,
      toast,
      PreviewContent,
    ]
  );

  // --- Render ---
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
