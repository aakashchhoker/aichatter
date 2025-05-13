import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const InputPage = () => {
  const inputContent = {  
    name: "input",
    title: "Input Component",
    description: `The Input component is a fundamental form element that allows users to enter text or data. It's a versatile component that can be styled and configured for various input types and use cases.

Key Features:
- Multiple input types (text, number, email, password, etc.)
- Customizable styling
- Form validation support
- Accessible by default
- Responsive design
- Error state handling

Best Practices:
1. Use appropriate input types
2. Provide clear labels
3. Include helpful placeholder text
4. Handle validation states
5. Consider mobile usability`,
    codeExample: `import { Input } from '@/components/ui/input';

function ExampleInput() {
  return (
    <Input type="text" placeholder="Enter your name" />
  );
}`,
    usage: `The Input component is perfect for:
- Form fields
- Search boxes
- Data entry
- User input
- Configuration settings
- Filter inputs`,
    props: [
      {
        name: "type",
        type: "string",
        description: "The type of input (text, number, email, password, etc.)",
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text shown when input is empty",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Whether the input is disabled",
      },
      {
        name: "value",
        type: "string",
        description: "The value of the input",
      },
      {
        name: "onChange",
        type: "function",
        description: "Callback when input value changes",
      },
    ],
    examples: [
      {
        title: "Basic Input",
        description: "A simple text input with label",
        content: (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter your name" />
          </div>
        ),
      },
      {
        title: "Input Types",
        description: "Different types of inputs for various use cases",
        content: (
          <div className="grid w-full max-w-sm items-center gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="number">Age</Label>
              <Input type="number" id="number" placeholder="Enter your age" />
            </div>
          </div>
        ),
      },
      {
        title: "Disabled Input",
        description: "An input that cannot be interacted with",
        content: (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled">Disabled Input</Label>
            <Input type="text" id="disabled" placeholder="This input is disabled" disabled />
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...inputContent} />;
}; 