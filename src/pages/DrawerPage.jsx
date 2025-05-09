import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { Button } from "../components/ui/button";

export const DrawerPage = () => {
  const drawerContent = {
    name: "drawer",
    title: "Drawer Component",
    description: `The Drawer component provides a sliding panel that appears from the edge of the screen, typically used for navigation or displaying additional content.

Key Features:
- Slide-in animation
- Multiple positions (left, right, top, bottom)
- Focus management
- Keyboard navigation
- Accessible by default
- Customizable content

Best Practices:
1. Use for secondary content
2. Keep content focused
3. Provide clear actions
4. Handle keyboard navigation
5. Consider mobile experience`,
    codeExample: `import { Drawer } from '@your-ui-library/drawer';

function ExampleDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            Drawer description goes here.
          </DrawerDescription>
        </DrawerHeader>
        <div>Drawer content</div>
      </DrawerContent>
    </Drawer>
  );
}`,
    usage: `The Drawer component is perfect for:
- Navigation menus
- Filter panels
- Settings panels
- Additional content
- Mobile-friendly interfaces`,
    props: [
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Controls the open state of the drawer.",
      },
      {
        name: "onOpenChange",
        type: "function",
        default: "undefined",
        description: "Callback when the open state changes.",
      },
      {
        name: "direction",
        type: "string",
        default: "right",
        description: 'The direction the drawer opens from. Can be "left", "right", "top", or "bottom".',
      },
    ],
    examples: [
      {
        title: "Basic Drawer",
        description: "A simple drawer with header and content",
        content: (
          <div className="flex flex-wrap gap-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Navigation</DrawerTitle>
                  <DrawerDescription>
                    Browse through the available options.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <a href="#" className="col-span-3">Home</a>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <a href="#" className="col-span-3">Profile</a>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <a href="#" className="col-span-3">Settings</a>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        ),
      },
      {
        title: "Settings Drawer",
        description: "A drawer for displaying settings",
        content: (
          <div className="flex flex-wrap gap-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Settings</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Settings</DrawerTitle>
                  <DrawerDescription>
                    Configure your application settings.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="theme" className="text-right">
                      Theme
                    </label>
                    <select id="theme" className="col-span-3">
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="notifications" className="text-right">
                      Notifications
                    </label>
                    <input
                      type="checkbox"
                      id="notifications"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                  <Button>Save changes</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...drawerContent} />;
}; 