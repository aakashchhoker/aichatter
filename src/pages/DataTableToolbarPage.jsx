import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Filter, Search, SlidersHorizontal } from "lucide-react";

export const DataTableToolbarPage = () => {
  const dataTableToolbarContent = {
    name: "data-table",
    title: "Data Table Toolbar Component",
    description: `The Data Table Toolbar component provides a set of tools for interacting with data tables, including search, filtering, and export functionality. It helps users manage and manipulate table data effectively.

Key Features:
- Search functionality
- Column filtering
- Data export
- View customization
- Responsive design
- Accessible by default

Best Practices:
1. Provide clear search functionality
2. Include relevant filters
3. Add export options
4. Consider mobile layout
5. Keep toolbar organized`,
    codeExample: `import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

function ExampleToolbar() {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Search..." />
      <Button variant="outline">Filter</Button>
      <Button variant="outline">Export</Button>
    </div>
  );
}`,
    usage: `The Data Table Toolbar component is perfect for:
- Data management
- Search interfaces
- Filter controls
- Export functionality
- View customization
- Bulk actions`,
    props: [
      {
        name: "onSearch",
        type: "function",
        description: "Callback fired when search input changes",
      },
      {
        name: "onFilter",
        type: "function",
        description: "Callback fired when filter changes",
      },
      {
        name: "onExport",
        type: "function",
        description: "Callback fired when export is triggered",
      },
    ],
    examples: [
      {
        title: "Basic Toolbar",
        description: "A simple toolbar with search, filter, and export functionality",
        content: (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-1 items-center space-x-2">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    className="pl-8"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem checked>
                      Status
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>
                      Method
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Amount
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuCheckboxItem checked>
                      Invoice
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>
                      Status
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>
                      Method
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked>
                      Amount
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...dataTableToolbarContent} />;
}; 