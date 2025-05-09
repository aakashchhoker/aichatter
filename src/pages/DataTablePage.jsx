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

export const DataTablePage = () => {
  const dataTableContent = {
    title: "Data Table Component",
    description: `The Data Table component provides a structured way to display and interact with tabular data. It supports sorting, filtering, pagination, and other advanced features for managing large datasets.

Key Features:
- Sortable columns
- Filterable data
- Pagination support
- Row selection
- Customizable styling
- Accessible by default

Best Practices:
1. Use clear column headers
2. Implement proper sorting
3. Include pagination for large datasets
4. Consider mobile responsiveness
5. Provide search/filter functionality`,
    codeExample: `import { Table, TableHeader, TableBody, TableRow, TableCell } from '@your-ui-library/table';

function ExampleDataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    usage: `The Data Table component is perfect for:
- User management
- Product listings
- Order history
- Analytics data
- Inventory management
- Financial records`,
    props: [
      {
        name: "data",
        type: "array",
        description: "The data to be displayed in the table",
      },
      {
        name: "columns",
        type: "array",
        description: "The column definitions for the table",
      },
      {
        name: "onSort",
        type: "function",
        description: "Callback fired when sorting changes",
      },
    ],
    examples: [
      {
        title: "Basic Data Table",
        description: "A simple data table with sortable columns",
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
                <TableRow>
                  <TableCell className="font-medium">INV003</TableCell>
                  <TableCell>Unpaid</TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV004</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV005</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$550.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...dataTableContent} />;
}; 