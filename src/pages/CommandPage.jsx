import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

export const CommandPage = () => {
  const commandContent = {
    name: "command",
    title: "Command Component",
    description: `The Command component is a command palette interface that provides a powerful way to navigate and execute commands in your application. It's commonly used for quick actions, navigation, and search functionality.

Key Features:
- Command palette interface
- Keyboard navigation
- Search functionality
- Group organization
- Shortcuts support
- Accessible by default

Best Practices:
1. Use clear, descriptive labels
2. Group related commands
3. Include keyboard shortcuts
4. Provide helpful empty states
5. Consider mobile usability`,
    codeExample: `import { Command, CommandInput, CommandList, CommandItem } from '@your-ui-library/command';

function ExampleCommand() {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
    usage: `The Command component is perfect for:
- Command palettes
- Quick actions
- Navigation menus
- Search interfaces
- Keyboard shortcuts
- Global commands`,
    props: [
      {
        name: "value",
        type: "string",
        description: "The current value of the command input",
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
        title: "Basic Command Palette",
        description: "A simple command palette with grouped commands",
        content: (
          <div className="flex flex-col items-center space-y-4">
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...commandContent} />;
}; 