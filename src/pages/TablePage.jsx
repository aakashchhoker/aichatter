import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

export const TablePage = () => {
  const tableContent = {
    title: "Table Component",
    description: `The Table component provides a structured way to display data in rows and columns. It's highly customizable and accessible.

Key Features:
- Responsive design
- Sortable columns
- Customizable styling
- Accessible by default
- Row selection
- Pagination support

Best Practices:
1. Keep tables simple and focused
2. Use appropriate column headers
3. Consider mobile responsiveness
4. Implement sorting when needed
5. Use pagination for large datasets`,
    codeExample: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

function ExampleTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    usage: `The Table component is perfect for:
- Data display
- User lists
- Product catalogs
- Financial data
- Comparison tables
- Dashboard statistics`,
    props: [
      {
        name: "variant",
        type: "string",
        default: "default",
        description: 'The visual style of the table. Can be "default" or "bordered".',
      },
      {
        name: "size",
        type: "string",
        default: "default",
        description: 'The size of the table. Can be "default", "sm", or "lg".',
      },
    ],
    examples: [
      {
        title: "Basic Table",
        description: "A simple table with headers and rows",
        content: (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>User</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
      {
        title: "Bordered Table",
        description: "A table with borders for better visual separation",
        content: (
          <Table variant="bordered">
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Laptop</TableCell>
                <TableCell>$999</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone</TableCell>
                <TableCell>$699</TableCell>
                <TableCell>100</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ),
      },
    ],
  };

  return <ComponentDetail {...tableContent} />;
}; 