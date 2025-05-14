import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const LabelPage = () => {
  const labelContent = {  
    name: "label",
    title: "Label Component",
    description: `The Label component is used to provide accessible labels for form controls and other interactive elements. It helps users understand the purpose of form fields and improves accessibility.

Key Features:
- Accessible by default
- Form control association
- Customizable styling
- Responsive design
- Required field indication
- Error state support

Best Practices:
1. Use clear, descriptive labels
2. Associate labels with form controls
3. Indicate required fields
4. Consider mobile layout
5. Handle error states appropriately`,
    codeExample: `import { Label } from '@/components/ui/label';

function ExampleLabel() {
  return (
    <Label htmlFor="name">Name</Label>
  );
}`,
    usage: `The Label component is perfect for:
- Form field labels
- Input descriptions
- Checkbox labels
- Radio button labels
- Select labels
- Custom form controls`,
    props: [
      {
        name: "htmlFor",
        type: "string",
        description: "The ID of the form control this label is associated with",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the label",
      },
      {
        name: "required",
        type: "boolean",
        description: "Whether the associated form control is required",
      },
    ],
    examples: [
      {
        title: "Basic Label",
        description: "A simple label for a text input",
        content: (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter your name" />
          </div>
        ),
      },
      {
        title: "Required Field Label",
        description: "A label indicating a required field",
        content: (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email" required>Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
        ),
      },
      {
        title: "Checkbox Label",
        description: "A label for a checkbox input",
        content: (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...labelContent} />;
}; 