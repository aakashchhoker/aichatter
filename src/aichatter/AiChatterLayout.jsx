import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "../components/ui/separator";

export default function AiChatterLayout({ sidebar, children, sidebarHeader, sidebarOpen, setSidebarOpen }) {

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
     
      <div className="flex flex-1 flex-row min-h-0">
        {/* Sidebar */}
        <aside
          className={`transition-all duration-300 bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 h-full flex flex-col ${
            sidebarOpen ? "w-64 h-full" : "hidden"
          }`}
          style={{ height: "auto" }}
        >
          <div
            className={`flex-none flex items-center ${
              sidebarOpen ? "px-4 py-3 h-12" : "justify-center py-3 h-12"
            }`}
          >
            {sidebarHeader &&
              (sidebarOpen ? (
                <div className="flex flex-col items-start w-full justify-start mt-4">
                  <span className="font-bold text-gray-900 dark:text-white">
                    {sidebarHeader}
                  </span>
                  <Separator className="my-2 bg-gray-200 dark:bg-gray-700" />
                </div>
              ) : (
                <>
                  <span
                    className="font-bold text-gray-900 dark:text-white"
                    title={sidebarHeader}
                  >
                    {typeof sidebarHeader === "string" ? sidebarHeader[0] : ""}
                  </span>
                  <Separator className="my-2 bg-gray-200 dark:bg-gray-700" />
                </>
              ))}
          </div>
          <div
            className={`flex-1 min-h-0 overflow-y-auto ${
              sidebarOpen ? "px-2" : "px-1"
            }`}
          >
            {sidebar}
          </div>
        </aside>
        {/* Main Content */}
        <main
          className={`flex-1 min-h-0 transition-all duration-300 ${
            sidebarOpen ? "" : ""
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
