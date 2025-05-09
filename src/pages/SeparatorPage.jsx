import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Separator } from "../components/ui/separator";

export const SeparatorPage = () => {
  const separatorContent = {
    name: "separator",
    title: "Separator Component",
    description: `The Separator component is a visual divider used to separate content into distinct sections.

Key Features:
- Horizontal and vertical orientations
- Customizable styling
- Accessible by default
- Responsive design
- Semantic HTML
- Flexible usage

Best Practices:
1. Use for visual organization
2. Maintain consistent spacing
3. Consider content hierarchy
4. Use appropriate orientation
5. Keep styling subtle`,
    codeExample: `import { Separator } from '@your-ui-library/separator';

function ExampleSeparator() {
  return (
    <div>
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  );
}`,
    usage: `The Separator component is perfect for:
- Section dividers
- List separators
- Menu dividers
- Form sections
- Card content
- Navigation items`,
    props: [
      {
        name: "orientation",
        type: "string",
        default: "horizontal",
        description: 'The orientation of the separator. Can be "horizontal" or "vertical".',
      },
      {
        name: "className",
        type: "string",
        default: "undefined",
        description: "Additional CSS classes to apply to the separator.",
      },
      {
        name: "decorative",
        type: "boolean",
        default: "true",
        description: "Whether the separator is purely decorative.",
      },
    ],
    examples: [
      {
        title: "Basic Separator",
        description: "A simple horizontal separator",
        content: (
          <div className="space-y-4">
            <div>Content above the separator</div>
            <Separator />
            <div>Content below the separator</div>
          </div>
        ),
      },
      {
        title: "Vertical Separator",
        description: "A vertical separator between content",
        content: (
          <div className="flex items-center space-x-4">
            <div>Left content</div>
            <Separator orientation="vertical" className="h-6" />
            <div>Right content</div>
          </div>
        ),
      },
      {
        title: "Multiple Separators",
        description: "Multiple separators in a list",
        content: (
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Section 1</h4>
              <p className="text-sm text-muted-foreground">
                Content for section 1
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Section 2</h4>
              <p className="text-sm text-muted-foreground">
                Content for section 2
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Section 3</h4>
              <p className="text-sm text-muted-foreground">
                Content for section 3
              </p>
            </div>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...separatorContent} />;
}; 