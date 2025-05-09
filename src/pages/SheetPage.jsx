import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Button } from "../components/ui/button";

export const SheetPage = () => {
  const sheetContent = {
    title: "Sheet Component",
    description: `The Sheet component is a slide-out panel that appears from the edge of the screen. It's commonly used for displaying additional content or actions without leaving the current page.

Key Features:
- Multiple positions (right, left, top, bottom)
- Customizable width/height
- Header with title and description
- Trigger element support
- Accessible by default
- Keyboard navigation support

Best Practices:
1. Use for supplementary content
2. Keep content focused and concise
3. Provide clear navigation
4. Consider mobile interactions
5. Use appropriate positioning`,
    codeExample: `import { Sheet, SheetContent, SheetTrigger } from '@your-ui-library/sheet';

function ExampleSheet() {
  return (
    <Sheet>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        {/* Sheet content */}
      </SheetContent>
    </Sheet>
  );
}`,
    usage: `The Sheet component is perfect for:
- Additional settings
- Detailed information
- Form inputs
- Navigation menus
- Contextual actions
- Mobile-friendly interfaces`,
    props: [
      {
        name: "side",
        type: "string",
        default: "right",
        description: 'The side from which the sheet appears. Can be "right", "left", "top", or "bottom".',
      },
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Whether the sheet is open.",
      },
      {
        name: "onOpenChange",
        type: "function",
        default: "undefined",
        description: "Callback when the open state changes.",
      },
    ],
    examples: [
      {
        title: "Basic Sheet",
        description: "A simple sheet with header and content",
        content: (
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>This is a basic sheet example.</SheetDescription>
              </SheetHeader>
              <div className="py-4">
                Sheet content goes here
              </div>
            </SheetContent>
          </Sheet>
        ),
      },
      {
        title: "Sheet Positions",
        description: "Sheets can appear from different sides",
        content: (
          <div className="flex flex-wrap gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button>Right Sheet</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Right Sheet</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Left Sheet</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...sheetContent} />;
}; 