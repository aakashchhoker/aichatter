import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Button } from "../components/ui/button";

export const ButtonPage = () => {
  const buttonContent = {
    name: "button",
    title: "Button Component",
    description: `The Button component is a fundamental UI element that allows users to trigger actions or events. It supports various styles and sizes to accommodate different use cases and design requirements.

Key Features:
- Multiple variants (default, destructive, outline, secondary, ghost, link)
- Different sizes (default, sm, lg, icon)
- Disabled state support
- Loading state
- Icon support
- Accessible by default

Best Practices:
1. Use appropriate variants for different actions
2. Maintain consistent sizing
3. Provide clear feedback on interaction
4. Consider mobile touch targets
5. Use icons to enhance visual communication`,
    codeExample: `import { Button } from '@/components/ui/button';

function ExampleButton() {
  return (
    <Button variant="default">Click me</Button>
  );
}`,
    usage: `The Button component is perfect for:
- Form submissions
- Action triggers
- Navigation
- Dialog controls
- Feature toggles
- Command execution`,
    props: [
      {
        name: "variant",
        type: "string",
        default: "default",
        description: 'The visual style of the button. Can be "default", "destructive", "outline", "secondary", "ghost", or "link".',
      },
      {
        name: "size",
        type: "string",
        default: "default",
        description: 'The size of the button. Can be "default", "sm", "lg", or "icon".',
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the button is disabled.",
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        description: "Whether to render the button as a child component.",
      },
    ],
    examples: [
      {
        title: "Button Variants",
        description: "Different button styles for various use cases",
        content: (
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
        ),
      },
      {
        title: "Button Sizes",
        description: "Different button sizes for various contexts",
        content: (
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small Button</Button>
            <Button size="default">Default Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        ),
      },
      {
        title: "Disabled Buttons",
        description: "Buttons in disabled state",
        content: (
          <div className="flex flex-wrap gap-4">
            <Button disabled variant="default">Default Button</Button>
            <Button disabled variant="destructive">Destructive Button</Button>
            <Button disabled variant="outline">Outline Button</Button>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...buttonContent} />;
};
