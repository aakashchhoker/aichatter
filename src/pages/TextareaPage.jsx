import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export const TextareaPage = () => {
  const textareaContent = {
    title: "Textarea Component",
    description: `The Textarea component provides a multi-line text input field for longer text content.

Key Features:
- Resizable
- Placeholder support
- Disabled state
- Error state
- Character count
- Auto-resize option

Best Practices:
1. Use appropriate sizing
2. Provide clear labels
3. Include helpful placeholder text
4. Consider character limits
5. Handle validation properly`,
    codeExample: `import { Textarea } from "../components/ui/textarea";

function ExampleTextarea() {
  return (
    <Textarea
      placeholder="Type your message here..."
      className="min-h-[100px]"
    />
  );
}`,
    usage: `The Textarea component is perfect for:
- Comments
- Messages
- Descriptions
- Feedback forms
- Notes
- Long-form content`,
    props: [
      {
        name: "placeholder",
        type: "string",
        default: "undefined",
        description: "Placeholder text when the textarea is empty.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the textarea is disabled.",
      },
      {
        name: "rows",
        type: "number",
        default: "undefined",
        description: "The number of visible text lines.",
      },
    ],
    examples: [
      {
        title: "Basic Textarea",
        description: "A simple textarea with placeholder",
        content: (
          <div className="grid w-full gap-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea
              placeholder="Type your message here..."
              id="message"
              className="min-h-[100px]"
            />
          </div>
        ),
      },
      {
        title: "Disabled Textarea",
        description: "A disabled textarea with label",
        content: (
          <div className="grid w-full gap-2">
            <Label htmlFor="disabled">Disabled textarea</Label>
            <Textarea
              id="disabled"
              placeholder="This textarea is disabled"
              disabled
              className="min-h-[100px]"
            />
          </div>
        ),
      },
      {
        title: "Textarea with Character Count",
        description: "A textarea with character limit and count",
        content: (
          <div className="grid w-full gap-2">
            <Label htmlFor="limited">Limited textarea</Label>
            <Textarea
              id="limited"
              placeholder="Type up to 100 characters..."
              maxLength={100}
              className="min-h-[100px]"
            />
            <p className="text-sm text-gray-500">0/100 characters</p>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...textareaContent} />;
}; 