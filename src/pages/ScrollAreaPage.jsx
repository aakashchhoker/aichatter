import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { ScrollArea } from "../components/ui/scroll-area";

export const ScrollAreaPage = () => {
  const scrollAreaContent = { 
    name: "scroll-area",
    title: "Scroll Area Component",
    description: `The Scroll Area component provides a custom scrollable container with a consistent cross-browser experience.

Key Features:
- Custom scrollbar styling
- Cross-browser compatibility
- Touch support
- Keyboard navigation
- Customizable appearance
- Responsive design

Best Practices:
1. Use for overflow content
2. Maintain consistent styling
3. Consider mobile interactions
4. Provide visual feedback
5. Ensure accessibility`,
    codeExample: `import { ScrollArea } from '@your-ui-library/scroll-area';

function ExampleScrollArea() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div>Scrollable content here</div>
    </ScrollArea>
  );
}`,
    usage: `The Scroll Area component is perfect for:
- Long content sections
- Sidebars
- Modal content
- Chat interfaces
- Code editors
- Data tables`,
    props: [
      {
        name: "className",
        type: "string",
        default: "undefined",
        description: "Additional CSS classes to apply to the scroll area.",
      },
      {
        name: "type",
        type: "string",
        default: "hover",
        description: 'The type of scrollbar to show. Can be "hover", "always", or "scroll".',
      },
      {
        name: "scrollHideDelay",
        type: "number",
        default: "600",
        description: "The delay in milliseconds before hiding the scrollbar.",
      },
    ],
    examples: [
      {
        title: "Basic Scroll Area",
        description: "A simple scrollable container",
        content: (
          <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="rounded-md border p-4">
                  <h4 className="mb-2 font-medium">Item {i + 1}</h4>
                  <p className="text-sm text-muted-foreground">
                    This is some content for item {i + 1}. Scroll to see more items.
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        ),
      },
      {
        title: "Scroll Area with Custom Styling",
        description: "Scroll area with custom background and padding",
        content: (
          <ScrollArea className="h-[300px] w-[400px] rounded-md border bg-muted p-6">
            <div className="space-y-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="rounded-md bg-background p-4 shadow-sm">
                  <h4 className="mb-2 font-medium">Section {i + 1}</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a custom styled section with a different background and shadow.
                    Scroll to see more sections.
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        ),
      },
    ],
  };

  return <ComponentDetail {...scrollAreaContent} />;
}; 