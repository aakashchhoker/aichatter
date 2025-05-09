import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { cn } from "../lib/utils";

export const TypographyPage = () => {
  const typographyContent = {  
    name: "typography",
    title: "Typography Component",
    description: `The Typography component provides a set of pre-styled text elements for consistent typography across your application.

Key Features:
- Consistent styling
- Responsive design
- Semantic HTML
- Customizable variants
- Accessible by default
- Rich text support

Best Practices:
1. Use appropriate heading levels
2. Maintain hierarchy
3. Consider readability
4. Use consistent spacing
5. Follow accessibility guidelines`,
    codeExample: `import { cn } from "../lib/utils";

function ExampleTypography() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Heading 1</h1>
      <p className="text-base">Regular paragraph text</p>
      <p className="text-sm text-muted-foreground">Muted text</p>
    </div>
  );
}`,
    usage: `The Typography component is perfect for:
- Headings
- Body text
- Labels
- Captions
- Quotes
- Lists`,
    props: [
      {
        name: "variant",
        type: "string",
        default: "default",
        description: 'The visual style of the text. Can be "default", "muted", or "subtle".',
      },
      {
        name: "size",
        type: "string",
        default: "default",
        description: 'The size of the text. Can be "xs", "sm", "base", "lg", or "xl".',
      },
      {
        name: "weight",
        type: "string",
        default: "normal",
        description: 'The font weight. Can be "normal", "medium", "semibold", or "bold".',
      },
    ],
    examples: [
      {
        title: "Headings",
        description: "Different heading levels with consistent styling",
        content: (
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Heading 1
            </h1>
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              Heading 2
            </h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Heading 3
            </h3>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Heading 4
            </h4>
          </div>
        ),
      },
      {
        title: "Body Text",
        description: "Different styles of body text",
        content: (
          <div className="space-y-4">
            <p className="leading-7">
              This is a regular paragraph with normal text size and line height.
            </p>
            <p className="text-sm text-muted-foreground">
              This is muted text with a smaller size, perfect for secondary information.
            </p>
            <p className="text-sm font-medium leading-none">
              This is small text with medium weight and no line height.
            </p>
          </div>
        ),
      },
      {
        title: "Lists",
        description: "Ordered and unordered lists",
        content: (
          <div className="space-y-4">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>First item in an unordered list</li>
              <li>Second item in an unordered list</li>
              <li>Third item in an unordered list</li>
            </ul>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>First item in an ordered list</li>
              <li>Second item in an ordered list</li>
              <li>Third item in an ordered list</li>
            </ol>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...typographyContent} />;
}; 