import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export const AlertPage = () => {
  const alertContent = {
    name: "alert",
    title: "Alert Component",
    description: `The Alert component is used to display important messages or notifications to users. It's a versatile component that can be styled differently based on the type of message (info, warning, error, success).

Key Features:
- Multiple variants (default, destructive, success, warning)
- Customizable icons
- Accessible by default
- Responsive design
- Support for title and description

Best Practices:
1. Use appropriate alert types for different messages
2. Keep messages clear and concise
3. Use icons to enhance visual communication
4. Consider color contrast for accessibility
5. Position alerts where they're most visible`,
    codeExample: `import { Alert, AlertTitle, AlertDescription } from '@your-ui-library/alert';

function ExampleAlert() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}`,
    usage: `The Alert component is perfect for:
- System notifications
- Form validation messages
- Success/error states
- Important announcements
- Warning messages
- Information updates`,
    props: [
      {
        name: "variant",
        type: "string",
        description: "The visual style of the alert (default, destructive, success, warning)",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the alert",
      },
    ],
    examples: [
      {
        title: "Basic Alert",
        description: "A simple alert with title and description",
        content: (
          <Alert>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is a basic alert component that can be used to display important information.
            </AlertDescription>
          </Alert>
        ),
      },
      {
        title: "Destructive Alert",
        description: "An alert indicating an error or destructive action",
        content: (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was a problem processing your request. Please try again.
            </AlertDescription>
          </Alert>
        ),
      },
    ],
  };

  return <ComponentDetail {...alertContent} />;
}; 