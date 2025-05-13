import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const ComboboxPage = () => {
  const [value, setValue] = React.useState("");

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  const comboboxContent = {
    name: "combobox",
    title: "Combobox Component",
    description: `The Combobox component is an enhanced select input that combines the functionality of a text input with a dropdown list. It provides search, filtering, and keyboard navigation capabilities.

Key Features:
- Search and filter functionality
- Keyboard navigation
- Customizable styling
- Accessible by default
- Responsive design
- Support for complex data structures

Best Practices:
1. Provide clear labels and placeholders
2. Include helpful empty states
3. Group related items
4. Consider mobile usability
5. Handle loading states appropriately`,
    codeExample: `import { Command, CommandInput, CommandList, CommandItem } from '../components/ui/command';

function ExampleCombobox() {
  const [value, setValue] = React.useState("");

  return (
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Frameworks">
          <CommandItem value="next.js">Next.js</CommandItem>
          <CommandItem value="sveltekit">SvelteKit</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
    usage: `The Combobox component is perfect for:
- Search inputs
- Filter interfaces
- Selection menus
- Command palettes
- Autocomplete fields
- Navigation menus`,
    props: [
      {
        name: "value",
        type: "string",
        description: "The current value of the combobox",
      },
      {
        name: "onValueChange",
        type: "function",
        description: "Callback fired when the value changes",
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text for the input",
      },
    ],
    examples: [
      {
        title: "Basic Combobox",
        description: "A simple combobox with search functionality",
        content: (
          <div className="flex flex-col items-center space-y-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-[200px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Select framework..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === framework.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...comboboxContent} />;
}; 