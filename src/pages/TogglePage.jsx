import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Toggle } from "../components/ui/toggle";
import { Moon, Sun, Bold, Italic, Underline } from "lucide-react";

export const TogglePage = () => {
  const toggleContent = {
    name: "toggle",
    title: "Toggle Component",
    description: `The Toggle component provides a button that can be toggled on and off.

Key Features:
- Pressed state
- Disabled state
- Customizable styling
- Icon support
- Accessible by default
- Keyboard navigation

Best Practices:
1. Use clear visual feedback
2. Consider toggle size
3. Include helpful labels
4. Use appropriate icons
5. Handle state changes properly`,
    codeExample: `import { Toggle } from "@/components/ui/toggle";

function ExampleToggle() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}`,
    usage: `The Toggle component is perfect for:
- Feature toggles
- Theme switching
- Text formatting
- Sound muting
- View switching
- Mode selection`,
    props: [
      {
        name: "pressed",
        type: "boolean",
        default: "false",
        description: "The pressed state of the toggle.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the toggle is disabled.",
      },
      {
        name: "onPressedChange",
        type: "function",
        default: "undefined",
        description: "Event handler called when the pressed state changes.",
      },
    ],
    examples: [
      {
        title: "Basic Toggle",
        description: "A simple toggle with an icon",
        content: (
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
        ),
      },
      {
        title: "Theme Toggle",
        description: "A toggle for switching between light and dark themes",
        content: (
          <Toggle aria-label="Toggle theme">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Toggle>
        ),
      },
      {
        title: "Text Formatting Toggles",
        description: "Multiple toggles for text formatting options",
        content: (
          <div className="flex items-center space-x-2">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...toggleContent} />;
}; 