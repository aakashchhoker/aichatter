import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";

export const PopoverPage = () => {
  const popoverContent = {
    name: "popover",
    title: "Popover Component",
    description: `The Popover component is a floating element that appears when triggered, typically used to display additional information or actions.

Key Features:
- Customizable positioning
- Controlled and uncontrolled modes
- Keyboard navigation support
- Accessible by default
- Custom trigger elements
- Rich content support

Best Practices:
1. Use for supplementary information
2. Keep content concise
3. Ensure proper positioning
4. Consider mobile interactions
5. Maintain consistent styling`,
    codeExample: `import { Popover, PopoverTrigger, PopoverContent } from '@your-ui-library/popover';

function ExamplePopover() {
  return (
    <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>Popover content here</PopoverContent>
    </Popover>
  );
}`,
    usage: `The Popover component is ideal for:
- Additional information
- Quick actions
- Context menus
- Tooltips with rich content
- Form field help text
- Feature explanations`,
    props: [
      {
        name: "open",
        type: "boolean",
        default: "undefined",
        description: "Controls the open state of the popover when used in controlled mode.",
      },
      {
        name: "onOpenChange",
        type: "function",
        default: "undefined",
        description: "Callback fired when the open state changes.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "The default open state when used in uncontrolled mode.",
      },
    ],
    examples: [
      {
        title: "Basic Popover",
        description: "A simple popover with text content",
        content: (
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="p-4">
                  <h4 className="font-medium mb-2">Popover Title</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a basic popover with some content.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        title: "Interactive Popover",
        description: "Popover with interactive content",
        content: (
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Settings</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="p-4">
                  <h4 className="font-medium mb-2">Settings</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Notifications</span>
                      <Button variant="ghost" size="sm">Toggle</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dark Mode</span>
                      <Button variant="ghost" size="sm">Toggle</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...popoverContent} />;
}; 