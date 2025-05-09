import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { toast } from "sonner";
import { Button } from "../components/ui/button";
import { Toaster } from "../components/ui/sonner";

export const SonnerPage = () => {
  const sonnerContent = {
    title: "Sonner Toast Component",
    description: `The Sonner toast component provides a simple and elegant way to display notifications in your application. It's lightweight, customizable, and provides a great user experience.

Key Features:
- Multiple toast types (success, error, warning, info)
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
    codeExample: `import { toast } from 'sonner';

function ExampleToast() {
  return (
    <button onClick={() => toast('Hello World')}>
      Show Toast
    </button>
  );
}`,
    usage: `The Sonner toast component is perfect for:
- Success notifications
- Error messages
- Warning alerts
- Information updates
- Action confirmations
- System notifications`,
    props: [
      {
        name: "type",
        type: "string",
        default: "default",
        description: 'The type of toast. Can be "default", "success", "error", "warning", or "info".',
      },
      {
        name: "duration",
        type: "number",
        default: "4000",
        description: "Duration in milliseconds before the toast is dismissed.",
      },
      {
        name: "position",
        type: "string",
        default: "top-right",
        description: 'The position of the toast. Can be "top-right", "top-left", "bottom-right", or "bottom-left".',
      },
    ],
    examples: [
      {
        title: "Basic Toast",
        description: "A simple toast notification",
        content: (
          <Button onClick={() => toast('Hello World')}>
            Show Basic Toast
          </Button>
        ),
      },
      {
        title: "Toast Types",
        description: "Different types of toast notifications",
        content: (
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => toast.success('Success message')}>
              Success Toast
            </Button>
            <Button onClick={() => toast.error('Error message')}>
              Error Toast
            </Button>
            <Button onClick={() => toast.warning('Warning message')}>
              Warning Toast
            </Button>
            <Button onClick={() => toast.info('Info message')}>
              Info Toast
            </Button>
          </div>
        ),
      },
      {
        title: "Rich Content Toast",
        description: "A toast with rich content and actions",
        content: (
          <Button
            onClick={() =>
              toast('New message', {
                description: 'You have received a new message from John Doe',
                action: {
                  label: 'View',
                  onClick: () => console.log('View clicked'),
                },
              })
            }
          >
            Show Rich Toast
          </Button>
        ),
      },
    ],
  };

  return (
    <>
      <ComponentDetail {...sonnerContent} />
      <Toaster />
    </>
  );
}; 