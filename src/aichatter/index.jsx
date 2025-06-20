import React, { useState } from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import AiChatterLayout from "./AiChatterLayout";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
// Placeholder: replace with your actual chat list component if different
// import { ChatList } from "@/components/ComponentDetail/ComponentTabs";

const GPTS = [
  { key: "chatgpt", name: "ChatGPT", color: "bg-green-500", fallback: "CG" },
  { key: "grok", name: "Grok", color: "bg-blue-500", fallback: "GR" },
  { key: "gemini", name: "Gemini", color: "bg-yellow-500", fallback: "GE" },
  { key: "claude", name: "Claude", color: "bg-purple-500", fallback: "CL" },
];

import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Toolbar({ selected, onSelect, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Toolbar Header with Sidebar Toggle Button */}

      <ScrollArea className="flex flex-col items-center py-2 space-y-4 dark:bg-gray-900 h-full min-w-[64px] max-h-full">
        <div className="flex flex-col items-center space-y-4 ml-4">
          {GPTS.map((gpt) => (
            <TooltipProvider key={gpt.key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={`rounded-full w-12 h-12 flex items-center justify-center border-2 ${
                      selected === gpt.key
                        ? "border-gray-900 dark:border-white"
                        : "border-transparent"
                    } ${gpt.color}`}
                    onClick={() => onSelect(gpt.key)}
                  >
                    <Avatar>
                      <AvatarFallback>{gpt.fallback}</AvatarFallback>
                    </Avatar>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">{gpt.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </ScrollArea>
      <div className="flex flex-col items-center mb-4">
        <Button
          variant="ghost"
          size="icon"
          className="mr-0"
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          onClick={() => setSidebarOpen((v) => !v)}
        >
          {sidebarOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}

function GPTWindow({ title }) {
  return (
    <div className="border rounded-lg p-4 bg-background flex flex-col h-full min-h-[150px]">
      <TypographyH2 className="text-lg mb-2">{title}</TypographyH2>
      <div className="flex-1">Chat UI Placeholder</div>
    </div>
  );
}

export default function AiChatter() {
  const [selectedGPT, setSelectedGPT] = useState("chatgpt");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // For demo, always show sidebar when a GPT is selected
  const showSidebar = !!selectedGPT;

  // For demo, show all windows. You can make this dynamic if you want to let user choose which GPT in which window.
  const windowOrder = [
    { key: "chatgpt", title: "ChatGPT" },
    { key: "grok", title: "Grok" },
    { key: "gemini", title: "Google Gemini" },
    { key: "claude", title: "Claude Sonnet" },
  ];

  return (
    <AiChatterLayout
      sidebarHeader="Chats"
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      sidebar={
        <div className="flex flex-col h-full">
          <div className="text-gray-600 dark:text-gray-400 h-full px-2">
            {/* Example chat list with separators between each chat */}
            {["Chat 1", "Chat 2", "Chat 3"].map((chat, idx, arr) => (
              <React.Fragment key={chat}>
                <div className="py-2 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
                  {chat}
                </div>
                {idx < arr.length - 1 && (
                  <Separator className="my-1 bg-gray-200 dark:bg-gray-700" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      }
    >
      <div className="flex flex-row h-full min-h-0 flex-1">
        {/* Toolbar */}
        <div className="w-16 h-full flex-shrink-0">
          <Toolbar
            selected={selectedGPT}
            onSelect={setSelectedGPT}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
        {/* Main Section */}
        <div className="flex-1 flex flex-col min-h-0 h-full p-4">
          <ResizablePanelGroup
            direction="horizontal"
            className="flex-1 min-h-0 h-full w-full"
          >
            {/* Left Column */}
            <ResizablePanel defaultSize={50} minSize={20} className="min-w-0">
              <ResizablePanelGroup
                direction="vertical"
                className="h-full min-h-0"
              >
                <ResizablePanel
                  defaultSize={50}
                  minSize={20}
                  className="min-h-[150px]"
                >
                  <GPTWindow title={windowOrder[0].title} />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel
                  defaultSize={50}
                  minSize={20}
                  className="min-h-[150px]"
                >
                  <GPTWindow title={windowOrder[2].title} />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle withHandle />
            {/* Right Column */}
            <ResizablePanel defaultSize={50} minSize={20} className="min-w-0">
              <ResizablePanelGroup
                direction="vertical"
                className="h-full min-h-0"
              >
                <ResizablePanel
                  defaultSize={50}
                  minSize={20}
                  className="min-h-[150px]"
                >
                  <GPTWindow title={windowOrder[1].title} />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel
                  defaultSize={50}
                  minSize={20}
                  className="min-h-[150px]"
                >
                  <GPTWindow title={windowOrder[3].title} />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </AiChatterLayout>
  );
}
