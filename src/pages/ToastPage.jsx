import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import { Toaster } from "../components/ui/toaster";

export const ToastPage = () => {
  const { toast } = useToast();
  
  const toastContent = {  
    name: "toast",
    title: "Toast Component",
    description: `The Toast component provides a way to display temporary notifications to users.

Key Features:
- Multiple toast types
- Customizable duration
- Rich content support
- Keyboard navigation
- Accessible by default
- Queue management

Best Practices:
1. Keep messages concise
2. Use appropriate toast types
3. Consider duration
4. Provide clear actions
5. Handle multiple toasts`,
    codeExample: `import { useToast } from "../components/ui/use-toast";
import { Toaster } from "../components/ui/toaster";

function ExampleToast() {
  const { toast } = useToast();
  
  return (
    <>
      <button onClick={() => toast({
        title: "Success",
        description: "Operation completed successfully",
      })}>
        Show Toast
      </button>
      <Toaster />
    </>
  );
}`,
    usage: `The Toast component is perfect for:
- Success notifications
- Error messages
- Warning alerts
- Information updates
- Action confirmations
- System notifications`,
    props: [
      {
        name: "title",
        type: "string",
        default: "undefined",
        description: "The title of the toast notification.",
      },
      {
        name: "description",
        type: "string",
        default: "undefined",
        description: "The description text of the toast notification.",
      },
      {
        name: "duration",
        type: "number",
        default: "5000",
        description: "Duration in milliseconds before the toast is dismissed.",
      },
    ],
    examples: [
      {
        title: "Basic Toast",
        description: "A simple toast notification",
        content: (
          <Button
            onClick={() =>
              toast({
                title: "Basic Toast",
                description: "This is a basic toast notification",
              })
            }
          >
            Show Basic Toast
          </Button>
        ),
      },
      {
        title: "Toast with Action",
        description: "A toast with an action button",
        content: (
          <Button
            onClick={() =>
              toast({
                title: "New Message",
                description: "You have received a new message",
                action: (
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                ),
              })
            }
          >
            Show Toast with Action
          </Button>
        ),
      },
      {
        title: "Different Toast Types",
        description: "Various types of toast notifications",
        content: (
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() =>
                toast({
                  title: "Success",
                  description: "Operation completed successfully",
                  variant: "success",
                })
              }
            >
              Success Toast
            </Button>
            <Button
              onClick={() =>
                toast({
                  title: "Error",
                  description: "Something went wrong",
                  variant: "destructive",
                })
              }
            >
              Error Toast
            </Button>
          </div>
        ),
      },
    ],
  };

  return (
    <>
      <ComponentDetail {...toastContent} />
      <Toaster />
    </>
  );
}; 