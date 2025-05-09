import React from 'react';
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const PaginationPage = () => {
  const paginationContent = {
    name: "pagination",
    title: "Pagination Component",
    description: `The Pagination component provides a way to navigate through multi-page content. It offers a consistent and accessible interface for users to move between pages of content.

Key Features:
- Previous and Next navigation
- Page number links
- Active page indication
- Ellipsis for truncated page ranges
- Fully customizable appearance
- Accessible by default

Best Practices:
1. Keep pagination simple and intuitive
2. Clearly indicate the current page
3. Provide Previous and Next buttons for easy navigation
4. Use ellipsis to indicate truncated page ranges
5. Ensure proper keyboard navigation and screen reader support`,
    codeExample: `import { 
  Pagination, 
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious 
} from '@your-ui-library/pagination';

function ExamplePagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    usage: `The Pagination component is ideal for:
- Multi-page content navigation
- Search results pagination
- Table data pagination
- Image galleries
- Article listings
- Any content that spans multiple pages`,
    props: [
      {
        name: "isActive",
        type: "boolean",
        default: "false",
        description: "Whether the pagination link is active (current page).",
      },
      {
        name: "href",
        type: "string",
        default: "#",
        description: "The URL that the pagination link points to.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the pagination link is disabled.",
      }
    ],
    examples: [
      {
        title: "Basic Pagination",
        description: "Standard pagination with previous, next, and page numbers",
        content: (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
      },
      {
        title: "Disabled Pagination",
        description: "Pagination with disabled previous button (for first page)",
        content: (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" disabled />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
      }
    ],
  };

  return <ComponentDetail {...paginationContent} />;
};