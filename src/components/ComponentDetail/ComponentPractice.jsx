import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Maximize, Minimize, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { TypographyH2 } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import CodeEditor from "../CodeEditor";
import Frame from 'react-frame-component';
import { Loader2 } from "lucide-react";

export function ComponentPractice({ 
  name,
  initialLiveCode,
  scope,
  getActiveFilePath,
  transformImports 
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liveCode, setLiveCode] = useState(initialLiveCode);
  const [error, setError] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const iframeRef = useRef(null);
  const { toast } = useToast();
  
  // Update liveCode when initialLiveCode changes (e.g., when switching components)
  useEffect(() => {
    setLiveCode(initialLiveCode);
  }, [initialLiveCode]);


  const PreviewContent = () => {
    return (
      <Frame
        ref={iframeRef}
        style={{ width: '100%', height: '100%', border: 'none' }}
        onLoad={() => {
          setIframeLoaded(true);
        }}
        initialContent={`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
              <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
              <script src="https://unpkg.com/react-dom@18/umd/react-dom-client.js" crossorigin></script>
              <style>
                body { margin: 0; padding: 0; font-family: system-ui, sans-serif; }
                #root { min-height: 100vh; display: flex; }
                .error-message { color: #ef4444; padding: 1rem; border: 1px solid #ef4444; border-radius: 0.5rem; margin: 1rem; background: rgba(239, 68, 68, 0.1); font-family: monospace; white-space: pre-wrap; }
              </style>
            </head>
            <body>
              <div id="root"></div>
            </body>
          </html>
        `}
      >
        <div className="h-full">
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="h-full" id="root"></div>
          )}
        </div>
      </Frame>
    );
  };

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
                language="jsx"
                filePath={getActiveFilePath ? getActiveFilePath(name) : undefined}
                className="h-full min-h-[300px] border rounded-md"
              />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60} minSize={30}>
            <div className="h-full space-y-2">
              <TypographyH2 className="text-lg font-semibold">Browser Preview</TypographyH2>
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
                <div className="flex-1 overflow-auto">
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