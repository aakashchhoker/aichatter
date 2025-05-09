import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";

export const SwitchPage = () => {
  const switchContent = {
    title: "Switch Component",
    description: `The Switch component is a toggle control that allows users to turn an option on or off. It's commonly used for boolean settings and preferences.

Key Features:
- Toggle functionality
- Keyboard navigation
- Accessible by default
- Customizable styling
- Label support
- Disabled state

Best Practices:
1. Use clear labels
2. Provide visual feedback
3. Consider touch targets
4. Support keyboard input
5. Use appropriate sizing`,
    codeExample: `import { Switch } from '@your-ui-library/switch';

function ExampleSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`,
    usage: `The Switch component is perfect for:
- Feature toggles
- Settings controls
- Preference switches
- Mode selection
- State management
- Form controls`,
    props: [
      {
        name: "checked",
        type: "boolean",
        default: "false",
        description: "Whether the switch is checked.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the switch is disabled.",
      },
      {
        name: "onCheckedChange",
        type: "function",
        default: "undefined",
        description: "Callback when the checked state changes.",
      },
    ],
    examples: [
      {
        title: "Basic Switch",
        description: "A simple switch with label",
        content: (
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        ),
      },
      {
        title: "Disabled Switch",
        description: "A switch in disabled state",
        content: (
          <div className="flex items-center space-x-2">
            <Switch id="disabled-mode" disabled />
            <Label htmlFor="disabled-mode">Disabled Mode</Label>
          </div>
        ),
      },
      {
        title: "Multiple Switches",
        description: "A group of switches for different settings",
        content: (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="dark-mode" />
              <Label htmlFor="dark-mode">Dark Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="auto-save" />
              <Label htmlFor="auto-save">Auto Save</Label>
            </div>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...switchContent} />;
}; 