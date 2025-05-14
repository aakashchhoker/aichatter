import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const AccordionPage = () => {
  const accordionContent = {
    name: "Accordion",
    title: "Accordion Component",
    description: `The Accordion component is a vertically stacked set of interactive headings that each reveal an associated section of content. It's commonly used to organize and present information in a collapsible format, reducing vertical space while maintaining easy access to all content.

Key Features:
- Expandable/collapsible sections
- Smooth animations
- Keyboard navigation support
- Accessible by default
- Customizable styling

Best Practices:
1. Use clear, descriptive headings
2. Keep content concise and relevant
3. Consider mobile responsiveness
4. Maintain consistent spacing
5. Use appropriate icons for expand/collapse states`,
    codeExample: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

function ExampleAccordion() {
  return (
    <Accordion>
      <AccordionItem title="Section 1">
        <p>Content for section 1</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <p>Content for section 2</p>
      </AccordionItem>
    </Accordion>
  );
}`,
    usage: `The Accordion component is perfect for:
- FAQs
- Product specifications
- Documentation sections
- Multi-step forms
- Content organization
- Mobile navigation menus`,
    props: [
      {
        name: "defaultExpanded",
        type: "boolean",
        description: "Controls whether the accordion is expanded by default",
      },
      {
        name: "onChange",
        type: "function",
        description: "Callback fired when the expanded state changes",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "If true, the accordion will be disabled",
      },
    ],
    examples: [
      {
        title: "Basic Accordion",
        description: "A simple accordion with multiple sections",
        content: (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is an accordion?</AccordionTrigger>
              <AccordionContent>
                An accordion is a vertically stacked set of interactive headings
                that each reveal an associated section of content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I use it?</AccordionTrigger>
              <AccordionContent>
                Simply click on any accordion header to expand or collapse its
                content. You can have multiple sections, but only one can be
                open at a time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes! The accordion component is fully accessible, supporting
                keyboard navigation and screen readers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
    ],
  };

  return <ComponentDetail {...accordionContent} />;
};
