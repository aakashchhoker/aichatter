import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";

export const RadioGroupPage = () => {
  const radioGroupContent = {
    name: "radio-group",
    title: "Radio Group Component",
    description: `The Radio Group component is a form control that allows users to select a single option from a list of choices.

Key Features:
- Accessible by default
- Keyboard navigation
- Custom styling
- Form integration
- Controlled and uncontrolled modes
- Label support

Best Practices:
1. Use for mutually exclusive options
2. Provide clear labels
3. Group related options
4. Consider mobile interactions
5. Maintain consistent spacing`,
    codeExample: `import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function ExampleRadioGroup() {
  return (
    <RadioGroup defaultValue="option-1">
      <RadioGroupItem value="option-1" />
      <RadioGroupItem value="option-2" />
    </RadioGroup>
  );
}`,
    usage: `The Radio Group component is perfect for:
- Form selections
- Settings options
- Preference choices
- Survey questions
- Filter controls
- Sort options`,
    props: [
      {
        name: "value",
        type: "string",
        default: "undefined",
        description: "The value of the selected radio item when used in controlled mode.",
      },
      {
        name: "onValueChange",
        type: "function",
        default: "undefined",
        description: "Callback fired when the value changes.",
      },
      {
        name: "defaultValue",
        type: "string",
        default: "undefined",
        description: "The default value of the radio group when used in uncontrolled mode.",
      },
    ],
    examples: [
      {
        title: "Basic Radio Group",
        description: "A simple radio group with labels",
        content: (
          <div className="flex flex-wrap gap-4">
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-1" id="option-1" />
                <Label htmlFor="option-1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-2" id="option-2" />
                <Label htmlFor="option-2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-3" id="option-3" />
                <Label htmlFor="option-3">Option 3</Label>
              </div>
            </RadioGroup>
          </div>
        ),
      },
      {
        title: "Radio Group with Description",
        description: "Radio group with additional description text",
        content: (
          <div className="flex flex-wrap gap-4">
            <RadioGroup defaultValue="card">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="card" id="card" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="card">Credit Card</Label>
                  <p className="text-sm text-muted-foreground">
                    Pay with your credit card
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="paypal">PayPal</Label>
                  <p className="text-sm text-muted-foreground">
                    Pay with your PayPal account
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...radioGroupContent} />;
}; 