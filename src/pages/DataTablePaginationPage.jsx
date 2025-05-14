import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const DataTablePaginationPage = () => {
  const dataTablePaginationContent = {
    name: "data-table",
    title: "Data Table Pagination Component",
    description: `The Data Table Pagination component provides navigation controls for paginated data tables. It helps users navigate through large datasets by breaking them into manageable pages.

Key Features:
- Page navigation
- Page size selection
- Current page indicator
- First/last page shortcuts
- Customizable styling
- Accessible by default

Best Practices:
1. Show current page number
2. Include total pages count
3. Provide page size options
4. Consider mobile responsiveness
5. Handle edge cases (first/last page)`,
    codeExample: `import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

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
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
    usage: `The Data Table Pagination component is perfect for:
- Large data tables
- Search results
- Product listings
- User management
- Order history
- Analytics data`,
    props: [
      {
        name: "currentPage",
        type: "number",
        description: "The current page number",
      },
      {
        name: "totalPages",
        type: "number",
        description: "The total number of pages",
      },
      {
        name: "onPageChange",
        type: "function",
        description: "Callback fired when page changes",
      },
    ],
    examples: [
      {
        title: "Basic Pagination",
        description: "A simple pagination component with navigation controls",
        content: (
          <div className="flex flex-col items-center space-y-4">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
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
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...dataTablePaginationContent} />;
}; 