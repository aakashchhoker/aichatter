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
import { Layout } from "@/components/Layout";
import { TypographyH2 } from "@/components/ui/typography";
// Placeholder: replace with your actual chat list component if different
// import { ChatList } from "@/components/ComponentDetail/ComponentTabs";

const GPTS = [
  { key: "chatgpt", name: "ChatGPT", color: "bg-green-500", fallback: "CG" },
  { key: "grok", name: "Grok", color: "bg-blue-500", fallback: "GR" },
  { key: "gemini", name: "Gemini", color: "bg-yellow-500", fallback: "GE" },
  { key: "claude", name: "Claude", color: "bg-purple-500", fallback: "CL" },
];

import { ScrollArea } from "@/components/ui/scroll-area";

function Toolbar({ selected, onSelect }) {
  return (
    <ScrollArea className="flex flex-col items-center py-4 space-y-4 dark:bg-gray-900 h-full min-w-[64px] max-h-full">
      <div className="flex flex-col items-center space-y-4">
        {GPTS.map((gpt) => (
          <TooltipProvider key={gpt.key}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={`rounded-full w-12 h-12 flex items-center justify-center border-2 ${
                    selected === gpt.key ? "border-gray-900 dark:border-white" : "border-transparent"
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
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex flex-1 flex-row">
        {/* Toolbar */}
        <div className="w-16 h-full">
          <Toolbar selected={selectedGPT} onSelect={setSelectedGPT} />
        </div>
        {/* Sidebar */}
        {showSidebar && (
          <Sidebar className="w-64 flex-shrink-0 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700">
            <SidebarHeader className="mb-2 text-gray-900 font-bold dark:text-white">Chats</SidebarHeader>
            <SidebarContent>
              {/* Replace with your real chat list component */}
              {/* <ChatList gpt={selectedGPT} /> */}
              <div className="text-gray-600 dark:text-gray-400">
                Chat list for {GPTS.find((g) => g.key === selectedGPT)?.name}
              </div>
            </SidebarContent>
          </Sidebar>
        )}
        {/* Main Section */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Header */}
          {/* <div className="h-14 bg-white dark:bg-gray-800 flex items-center px-6 text-xl font-bold border-b border-gray-200 dark:border-gray-700">
            AiChatter
          </div> */}
          {/* 2x2 grid */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 p-0 bg-gray-100 dark:bg-gray-900 min-h-0">
            {windowOrder.map((w) => (
              <GPTWindow key={w.key} title={w.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
