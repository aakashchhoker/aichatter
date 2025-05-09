import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const BreadcrumbPages = () => {
  const breadcrumbContent = {
    title: "Breadcrumb Component",
    description: `The Breadcrumb component provides navigation context by showing the user's location in a website or application. It helps users understand where they are and how to navigate back to previous levels.

Key Features:
- Hierarchical navigation
- Customizable separators
- Accessible by default
- Responsive design
- Flexible styling
- Link support

Best Practices:
1. Keep breadcrumbs concise and clear
2. Use appropriate separators
3. Ensure proper spacing
4. Make all items clickable except current page
5. Consider mobile responsiveness`,
    codeExample: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@your-ui-library/breadcrumb';

function ExampleBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}`,
    usage: `The Breadcrumb component is perfect for:
- Website navigation
- File system navigation
- E-commerce categories
- Documentation sections
- Multi-level menus
- Site maps`,
    props: [
      {
        name: "separator",
        type: "ReactNode",
        description: "Custom separator between breadcrumb items",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the breadcrumb",
      },
    ],
    examples: [
      {
        title: "Basic Breadcrumb",
        description: "A simple breadcrumb with default styling",
        content: (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
      },
      {
        title: "Custom Separator",
        description: "Breadcrumb with a custom separator",
        content: (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>→</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>→</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Getting Started</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
      },
    ],
  };

  return <ComponentDetail {...breadcrumbContent} />;
}; 