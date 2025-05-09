import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const MenubarPage = () => {
  const menubarContent = {
    name: "menubar",
    title: "Menubar Component",
    description: `The Menubar component provides a horizontal menu bar with dropdown menus, similar to traditional desktop application menus. It's perfect for organizing navigation and actions in a familiar way.

Key Features:
- Horizontal menu layout
- Nested dropdown menus
- Keyboard navigation
- Shortcuts support
- Accessible by default
- Customizable styling

Best Practices:
1. Organize items logically
2. Use clear, concise labels
3. Include keyboard shortcuts
4. Consider mobile alternatives
5. Maintain consistent styling`,
    codeExample: `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@your-ui-library/menubar';

function ExampleMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`,
    usage: `The Menubar component is perfect for:
- Application navigation
- File operations
- Edit functions
- View controls
- Settings access
- Help menus`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the menubar",
      },
    ],
    examples: [
      {
        title: "Basic Menubar",
        description: "A simple menubar with common menu items",
        content: (
          <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
            <MenubarMenu>
              <MenubarTrigger className="font-bold">File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Share
                  <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="font-bold">Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Cut <MenubarShortcut>⌘X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="font-bold">View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Toggle Fullscreen</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ),
      },
    ],
  };

  return <ComponentDetail {...menubarContent} />;
}; 