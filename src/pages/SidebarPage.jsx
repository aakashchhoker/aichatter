import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { cn } from "../lib/utils";

export const SidebarPage = () => {
  const sidebarContent = {
    name: "sidebar",
    title: "Sidebar Component",
    description: `The Sidebar component is a vertical navigation panel that typically appears on the side of the main content. It's used for navigation, displaying categories, or showing supplementary information.

Key Features:
- Collapsible/Expandable
- Responsive design
- Customizable width
- Nested navigation support
- Active state indicators
- Icon support

Best Practices:
1. Keep navigation items organized
2. Use clear labels and icons
3. Consider mobile responsiveness
4. Maintain consistent spacing
5. Provide visual feedback`,
    codeExample: `import { Sidebar } from '@/components/ui/sidebar';

function ExampleSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>App Name</SidebarHeader>
      <SidebarContent>
        <SidebarItem>Dashboard</SidebarItem>
        <SidebarItem>Settings</SidebarItem>
      </SidebarContent>
    </Sidebar>
  );
}`,
    usage: `The Sidebar component is perfect for:
- Main navigation
- Category browsing
- Settings panels
- User profiles
- Content organization
- Application menus`,
    props: [
      {
        name: "collapsed",
        type: "boolean",
        default: "false",
        description: "Whether the sidebar is collapsed.",
      },
      {
        name: "width",
        type: "string",
        default: "240px",
        description: "The width of the sidebar when expanded.",
      },
      {
        name: "onCollapse",
        type: "function",
        default: "undefined",
        description: "Callback when the sidebar is collapsed/expanded.",
      },
    ],
    examples: [
      {
        title: "Basic Sidebar",
        description: "A simple sidebar with navigation items",
        content: (
          <div className="flex h-[300px] border rounded-lg">
            <div className="w-64 border-r p-4">
              <div className="font-semibold mb-4">Navigation</div>
              <nav className="space-y-2">
                <div className="px-3 py-2 rounded-md bg-muted">Dashboard</div>
                <div className="px-3 py-2 rounded-md hover:bg-muted">Settings</div>
                <div className="px-3 py-2 rounded-md hover:bg-muted">Profile</div>
              </nav>
            </div>
            <div className="flex-1 p-4">
              Main content area
            </div>
          </div>
        ),
      },
      {
        title: "Collapsible Sidebar",
        description: "A sidebar that can be collapsed to save space",
        content: (
          <div className="flex h-[300px] border rounded-lg">
            <div className={cn(
              "border-r p-4 transition-all duration-300",
              "hover:w-64 w-16"
            )}>
              <div className="font-semibold mb-4 truncate">Nav</div>
              <nav className="space-y-2">
                <div className="px-3 py-2 rounded-md bg-muted truncate">Home</div>
                <div className="px-3 py-2 rounded-md hover:bg-muted truncate">Settings</div>
                <div className="px-3 py-2 rounded-md hover:bg-muted truncate">Profile</div>
              </nav>
            </div>
            <div className="flex-1 p-4">
              Main content area
            </div>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...sidebarContent} />;
}; 