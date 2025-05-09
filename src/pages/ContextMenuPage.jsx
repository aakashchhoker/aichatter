import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const ContextMenuPage = () => {
  const contextMenuContent = {
    name: "context-menu",
    title: "Context Menu Component",
    description: `The Context Menu component provides a contextual menu that appears when users right-click or use a specific gesture. It's commonly used for additional actions and options related to the clicked element.

Key Features:
- Right-click activation
- Keyboard navigation
- Nested submenus
- Checkbox and radio items
- Shortcuts support
- Accessible by default

Best Practices:
1. Use clear, descriptive labels
2. Group related actions
3. Include keyboard shortcuts
4. Consider mobile gestures
5. Keep menus concise`,
    codeExample: `import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@your-ui-library/context-menu';

function ExampleContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
    usage: `The Context Menu component is perfect for:
- File operations
- Text editing
- Image actions
- List item options
- Table row actions
- Custom interactions`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controls whether the context menu is open",
      },
      {
        name: "onOpenChange",
        type: "function",
        description: "Callback fired when the open state changes",
      },
      {
        name: "modal",
        type: "boolean",
        description: "Whether the context menu should be rendered in a portal",
      },
    ],
    examples: [
      {
        title: "Basic Context Menu",
        description: "A simple context menu with various item types",
        content: (
          <div className="flex flex-col items-center space-y-4">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem inset>
                  Back
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset disabled>
                  Forward
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      Save Page As...
                      <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                  Show Bookmarks Bar
                  <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value="pedro">
                  <ContextMenuLabel inset>People</ContextMenuLabel>
                  <ContextMenuSeparator />
                  <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...contextMenuContent} />;
}; 