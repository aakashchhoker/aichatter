import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Badge } from "../components/ui/badge";

export const BadgePage = () => {
  const badgeContent = { 
    name: "badge",
    title: "Badge Component",
    description: `The Badge component is used to display small pieces of information, such as counts, labels, or status indicators. It's a versatile component that can be styled differently based on the context.

Key Features:
- Multiple variants (default, secondary, destructive, outline)
- Customizable styling
- Accessible by default
- Responsive design
- Easy to implement
- Flexible positioning

Best Practices:
1. Use appropriate variants for different contexts
2. Keep text concise
3. Consider color contrast for accessibility
4. Use consistent styling across your application
5. Position badges appropriately relative to their content`,
    codeExample: `import { Badge } from '../components/ui/badge';

function ExampleBadge() {
  return (
    <Badge variant="secondary">New</Badge>
  );
}`,
    usage: `The Badge component is perfect for:
- Status indicators
- Notification counts
- Labels and tags
- Version numbers
- Feature flags
- Category markers`,
    props: [
      {
        name: "variant",
        type: "string",
        description: "The visual style of the badge (default, secondary, destructive, outline)",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the badge",
      },
    ],
    examples: [
      {
        title: "Basic Badge",
        description: "A simple badge with default styling",
        content: (
          <Badge>Default</Badge>
        ),
      },
      {
        title: "Badge Variants",
        description: "Different badge variants for various contexts",
        content: (
          <div className="flex items-center gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        ),
      },
      {
        title: "Badge with Count",
        description: "A badge showing a notification count",
        content: (
          <div className="flex items-center gap-4">
            <Badge>5</Badge>
            <Badge variant="secondary">12</Badge>
            <Badge variant="destructive">3</Badge>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...badgeContent} />;
}; 