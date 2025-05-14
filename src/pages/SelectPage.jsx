import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export const SelectPage = () => {
  const selectContent = { 
    name: "select",
    title: "Select Component",
    description: `The Select component is a form control that allows users to choose an option from a dropdown list.

Key Features:
- Customizable styling
- Keyboard navigation
- Form integration
- Controlled and uncontrolled modes
- Disabled state
- Placeholder support

Best Practices:
1. Use for multiple choice options
2. Provide clear labels
3. Group related options
4. Consider mobile interactions
5. Maintain consistent styling`,
    codeExample: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function ExampleSelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    usage: `The Select component is perfect for:
- Form selections
- Settings options
- Filter controls
- Sort options
- Language selection
- Theme selection`,
    props: [
      {
        name: "value",
        type: "string",
        default: "undefined",
        description: "The value of the selected option when used in controlled mode.",
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
        description: "The default value of the select when used in uncontrolled mode.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the select is disabled.",
      },
    ],
    examples: [
      {
        title: "Basic Select",
        description: "A simple select with options",
        content: (
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
                <SelectItem value="mango">Mango</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
      },
      {
        title: "Select with Groups",
        description: "Select with grouped options",
        content: (
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="it">Italy</SelectItem>
                <SelectItem value="es">Spain</SelectItem>
                <SelectItem value="pt">Portugal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...selectContent} />;
}; 