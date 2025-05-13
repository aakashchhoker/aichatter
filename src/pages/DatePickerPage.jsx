import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import { DatePicker } from '../components/ui/date-picker';

export const DatePickerPage = () => {
  const [date, setDate] = React.useState(null);

  const datePickerContent = {
    name: "date-picker",
    title: "Date Picker Component",
    description: `The Date Picker component provides a user-friendly interface for selecting dates. It combines a calendar popover with a formatted date display.

Key Features:
- Calendar popover interface
- Date formatting
- Customizable styling
- Keyboard navigation
- Accessibility support
- Date range selection

Best Practices:
1. Provide clear date format
2. Include validation
3. Support keyboard navigation
4. Consider localization
5. Handle edge cases`,
    codeExample: `import { DatePicker } from '../components/ui/date-picker';

function ExampleDatePicker() {
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Select date"
    />
  );
}`,
    usage: `The Date Picker component is perfect for:
- Form date inputs
- Date range selection
- Event scheduling
- Booking systems
- Date-based filtering`,
    props: [
      {
        name: "value",
        type: "Date",
        default: "null",
        description: "The selected date value.",
      },
      {
        name: "onChange",
        type: "function",
        default: "undefined",
        description: "Callback when date selection changes.",
      },
      {
        name: "placeholder",
        type: "string",
        default: "Select date",
        description: "Placeholder text when no date is selected.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the date picker is disabled.",
      },
    ],
    examples: [
      {
        title: "Basic Date Picker",
        description: "A simple date picker with calendar popover",
        content: (
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        ),
      },
      {
        title: "Disabled Date Picker",
        description: "Date picker in disabled state",
        content: (
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="w-[240px] justify-start text-left font-normal opacity-50 cursor-not-allowed"
              disabled
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              Pick a date
            </Button>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...datePickerContent} />;
}; 