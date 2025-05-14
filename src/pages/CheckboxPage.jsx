import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const CheckboxPage = () => {
  const checkboxContent = {
    name: "checkbox",
    title: "Checkbox Component",
    description: `The Checkbox component is a form control that allows users to select one or more options from a set. It's a versatile component that can be used in various contexts, from simple toggles to complex selection interfaces.

Key Features:
- Single and multiple selection
- Customizable styling
- Accessible by default
- Keyboard navigation
- Form integration
- Indeterminate state

Best Practices:
1. Use clear, concise labels
2. Group related checkboxes
3. Consider mobile touch targets
4. Provide clear feedback
5. Use appropriate spacing`,
    codeExample: `import { Checkbox } from '@/components/ui/checkbox';

function ExampleCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  );
}`,
    usage: `The Checkbox component is perfect for:
- Form inputs
- Settings toggles
- List selections
- Terms acceptance
- Feature toggles
- Filter options`,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "The checked state of the checkbox",
      },
      {
        name: "onCheckedChange",
        type: "function",
        description: "Callback when checked state changes",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Whether the checkbox is disabled",
      },
    ],
    examples: [
      {
        title: "Basic Checkbox",
        description: "A simple checkbox with label",
        content: (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        ),
      },
      {
        title: "Disabled Checkbox",
        description: "A disabled checkbox that cannot be interacted with",
        content: (
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled checkbox</Label>
          </div>
        ),
      },
      {
        title: "Checkbox Group",
        description: "A group of related checkboxes",
        content: (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="option3" />
              <Label htmlFor="option3">Option 3</Label>
            </div>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...checkboxContent} />;
}; 