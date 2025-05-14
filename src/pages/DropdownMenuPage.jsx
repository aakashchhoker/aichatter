import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";

export const DropdownMenuPage = () => {
  const dropdownMenuContent = { 
    name: "dropdown-menu",
    title: "Dropdown Menu Component",
    description: `The Dropdown Menu component provides a menu that appears when clicking a trigger element, typically used for displaying a list of actions or options.

Key Features:
- Customizable trigger
- Keyboard navigation
- Focus management
- Accessible by default
- Multiple menu items
- Separators and labels
- Checkbox and radio items

Best Practices:
1. Use for related actions
2. Keep menu items concise
3. Provide clear labels
4. Handle keyboard navigation
5. Consider mobile experience`,
    codeExample: `import { DropdownMenu } from '@/components/ui/dropdown-menu';

function ExampleDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
    usage: `The Dropdown Menu component is perfect for:
- Action menus
- Navigation options
- Filter controls
- Settings toggles
- Context menus`,
    props: [
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Controls the open state of the dropdown menu.",
      },
      {
        name: "onOpenChange",
        type: "function",
        default: "undefined",
        description: "Callback when the open state changes.",
      },
      {
        name: "modal",
        type: "boolean",
        default: "true",
        description: "Whether the dropdown menu is modal.",
      },
    ],
    examples: [
      {
        title: "Basic Dropdown Menu",
        description: "A simple dropdown menu with basic items",
        content: (
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
      },
      {
        title: "Dropdown Menu with Checkboxes",
        description: "A dropdown menu with checkbox items",
        content: (
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">View Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>View Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Show Toolbar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Show Statusbar</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Show Sidebar</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
      },
      {
        title: "Dropdown Menu with Radio Items",
        description: "A dropdown menu with radio items",
        content: (
          <div className="flex flex-wrap gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Theme</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="light">
                  <DropdownMenuRadioItem value="light">
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    Dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="system">
                    System
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...dropdownMenuContent} />;
}; 