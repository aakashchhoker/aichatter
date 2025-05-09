import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export const ToggleGroupPage = () => {
  const toggleGroupContent = {
    name: "toggle-group",
    title: "Toggle Group Component",
    description: `The Toggle Group component provides a set of toggle buttons that can be used together.

Key Features:
- Single and multiple selection
- Disabled state
- Customizable styling
- Icon support
- Accessible by default
- Keyboard navigation

Best Practices:
1. Group related toggles
2. Use clear visual feedback
3. Consider toggle size
4. Include helpful labels
5. Handle state changes properly`,
    codeExample: `import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";

function ExampleToggleGroup() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`,
    usage: `The Toggle Group component is perfect for:
- Text formatting
- View switching
- Filter selection
- Mode selection
- Toolbar actions
- Option groups`,
    props: [
      {
        name: "type",
        type: "string",
        default: "single",
        description: 'The type of toggle group. Can be "single" or "multiple".',
      },
      {
        name: "value",
        type: "string | string[]",
        default: "undefined",
        description: "The value of the toggle group.",
      },
      {
        name: "onValueChange",
        type: "function",
        default: "undefined",
        description: "Event handler called when the value changes.",
      },
    ],
    examples: [
      {
        title: "Single Selection",
        description: "A toggle group with single selection",
        content: (
          <ToggleGroup type="single" aria-label="Text alignment">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        title: "Multiple Selection",
        description: "A toggle group with multiple selection",
        content: (
          <ToggleGroup type="multiple" aria-label="Text formatting">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        title: "Disabled Items",
        description: "A toggle group with disabled items",
        content: (
          <ToggleGroup type="single" aria-label="View options">
            <ToggleGroupItem value="grid" aria-label="Grid view">
              Grid
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view">
              List
            </ToggleGroupItem>
            <ToggleGroupItem value="disabled" aria-label="Disabled view" disabled>
              Disabled
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
    ],
  };

  return <ComponentDetail {...toggleGroupContent} />;
}; 