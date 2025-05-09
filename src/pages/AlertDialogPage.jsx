import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export const AlertDialogPage = () => {
  const alertDialogContent = {
    name: "alert-dialog",
    title: "Alert Dialog Component",
    description: `The Alert Dialog component is a modal dialog that interrupts the user's workflow to get their attention. It's commonly used for confirming destructive actions or displaying critical information that requires user acknowledgment.

Key Features:
- Modal dialog with focus trap
- Keyboard navigation support
- Accessible by default
- Customizable actions
- Responsive design
- Built-in animations

Best Practices:
1. Use for critical actions that need confirmation
2. Keep messages clear and actionable
3. Provide clear action buttons
4. Consider mobile responsiveness
5. Use sparingly to avoid disrupting user flow`,
    codeExample: `import { AlertDialog, AlertDialogAction, AlertDialogCancel } from '@your-ui-library/alert-dialog';

function ExampleAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
    usage: `The Alert Dialog component is perfect for:
- Confirming destructive actions
- Critical system messages
- Important user notifications
- Action confirmations
- Error handling
- Permission requests`,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controls the open state of the dialog",
      },
      {
        name: "onOpenChange",
        type: "function",
        description: "Callback fired when the open state changes",
      },
    ],
    examples: [
      {
        title: "Basic Alert Dialog",
        description: "A simple alert dialog with confirmation actions",
        content: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
      },
    ],
  };

  return <ComponentDetail {...alertDialogContent} />;
}; 