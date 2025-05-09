import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";

export const DialogPage = () => {
  const dialogContent = {
    name: "dialog",
    title: "Dialog Component",
    description: `The Dialog component provides a modal interface for displaying content that requires user attention or interaction.

Key Features:
- Modal overlay
- Focus management
- Keyboard navigation
- Accessible by default
- Customizable content
- Animation support

Best Practices:
1. Use for important interactions
2. Keep content concise
3. Provide clear actions
4. Handle keyboard navigation
5. Consider mobile experience`,
    codeExample: `import { Dialog } from '@your-ui-library/dialog';

function ExampleDialog() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog description goes here.
          </DialogDescription>
        </DialogHeader>
        <div>Dialog content</div>
      </DialogContent>
    </Dialog>
  );
}`,
    usage: `The Dialog component is perfect for:
- Confirmation dialogs
- Form submissions
- Important notifications
- Complex interactions
- Content previews`,
    props: [
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Controls the open state of the dialog.",
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
        description: "Whether the dialog is modal.",
      },
    ],
    examples: [
      {
        title: "Basic Dialog",
        description: "A simple dialog with header and content",
        content: (
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">
                      Name
                    </label>
                    <input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="username" className="text-right">
                      Username
                    </label>
                    <input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ),
      },
      {
        title: "Alert Dialog",
        description: "A dialog for important confirmations",
        content: (
          <div className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete Account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...dialogContent} />;
}; 