import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export const CollapsiblePage = () => {
  const collapsibleContent = {
    name: "collapsible",
    title: "Collapsible Component",
    description: `The Collapsible component is used to create expandable/collapsible sections of content. It's similar to an accordion but allows multiple sections to be open simultaneously.

Key Features:
- Expandable/collapsible sections
- Multiple sections can be open
- Smooth animations
- Keyboard navigation
- Accessible by default
- Customizable styling

Best Practices:
1. Use clear, descriptive triggers
2. Keep content organized
3. Consider mobile responsiveness
4. Maintain consistent spacing
5. Use appropriate icons for expand/collapse states`,
    codeExample: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

function ExampleCollapsible() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
      <CollapsibleContent>
        <p>This is the collapsible content.</p>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
    usage: `The Collapsible component is perfect for:
- Expandable sections
- FAQ sections
- Content organization
- Mobile navigation
- Progressive disclosure
- Information panels`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controls whether the collapsible is open",
      },
      {
        name: "onOpenChange",
        type: "function",
        description: "Callback fired when the open state changes",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "If true, the collapsible will be disabled",
      },
    ],
    examples: [
      {
        title: "Basic Collapsible",
        description: "A simple collapsible section with a trigger button",
        content: (
          <Collapsible className="w-full space-y-2">
            <div className="flex items-center justify-between space-x-4">
              <h4 className="text-sm font-semibold">Toggle Content</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <span className="sr-only">Toggle</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border p-4">
                <p className="text-sm">
                  This is the collapsible content. It can contain any type of content,
                  including text, images, or other components.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ),
      },
    ],
  };

  return <ComponentDetail {...collapsibleContent} />;
}; 