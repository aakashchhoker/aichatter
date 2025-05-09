import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export const TabsPage = () => {
  const tabsContent = {
    title: "Tabs Component",
    description: `The Tabs component provides a way to organize content into separate views where only one view is visible at a time.

Key Features:
- Keyboard navigation
- Accessible by default
- Customizable styling
- Animated transitions
- Vertical and horizontal layouts
- Disabled state support

Best Practices:
1. Keep tab labels concise
2. Use logical grouping
3. Consider mobile experience
4. Maintain consistent styling
5. Provide clear visual feedback`,
    codeExample: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

function ExampleTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
    </Tabs>
  );
}`,
    usage: `The Tabs component is perfect for:
- Settings pages
- Content organization
- Multi-step forms
- Documentation sections
- Feature showcases
- Data visualization`,
    props: [
      {
        name: "defaultValue",
        type: "string",
        default: "undefined",
        description: "The value of the tab that should be active when initially rendered.",
      },
      {
        name: "value",
        type: "string",
        default: "undefined",
        description: "The controlled value of the tab to activate.",
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
        title: "Basic Tabs",
        description: "A simple tabs component with multiple sections",
        content: (
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="p-4">
                <h3 className="text-lg font-medium">Account Settings</h3>
                <p className="text-sm text-gray-500">Manage your account preferences</p>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="p-4">
                <h3 className="text-lg font-medium">Password Settings</h3>
                <p className="text-sm text-gray-500">Change your password</p>
              </div>
            </TabsContent>
            <TabsContent value="settings">
              <div className="p-4">
                <h3 className="text-lg font-medium">General Settings</h3>
                <p className="text-sm text-gray-500">Configure your preferences</p>
              </div>
            </TabsContent>
          </Tabs>
        ),
      },
      {
        title: "Disabled Tabs",
        description: "Tabs with disabled state",
        content: (
          <Tabs defaultValue="active" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <div className="p-4">Active content</div>
            </TabsContent>
            <TabsContent value="pending">
              <div className="p-4">Pending content</div>
            </TabsContent>
          </Tabs>
        ),
      },
    ],
  };

  return <ComponentDetail {...tabsContent} />;
}; 