import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Button } from "../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Info, Settings, HelpCircle } from "lucide-react";

export const TooltipPage = () => {
  const tooltipContent = {  
    name: "tooltip",
    title: "Tooltip Component",
    description: `The Tooltip component provides additional information about an element when hovering over it.

Key Features:
- Customizable positioning
- Rich content support
- Keyboard navigation
- Accessible by default
- Delay control
- Animation support

Best Practices:
1. Keep tooltips concise
2. Use clear language
3. Consider positioning
4. Include helpful content
5. Handle mobile devices`,
    codeExample: `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

function ExampleTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
    usage: `The Tooltip component is perfect for:
- Additional information
- Feature explanations
- Short descriptions
- Keyboard shortcuts
- Context help
- UI hints`,
    props: [
      {
        name: "delayDuration",
        type: "number",
        default: "700",
        description: "Duration from when the mouse enters the trigger until the tooltip opens.",
      },
      {
        name: "side",
        type: "string",
        default: "top",
        description: 'The preferred side to place the tooltip. Can be "top", "right", "bottom", or "left".',
      },
      {
        name: "align",
        type: "string",
        default: "center",
        description: 'The preferred alignment against the trigger. Can be "start", "center", or "end".',
      },
    ],
    examples: [
      {
        title: "Basic Tooltip",
        description: "A simple tooltip with text content",
        content: (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a basic tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
      },
      {
        title: "Icon Tooltip",
        description: "A tooltip triggered by an icon",
        content: (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click for more information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
      },
      {
        title: "Multiple Tooltips",
        description: "Different tooltips with various positions",
        content: (
          <TooltipProvider>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Help & Support</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        ),
      },
    ],
  };

  return <ComponentDetail {...tooltipContent} />;
}; 