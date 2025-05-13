import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Calendar } from "../components/ui/calendar";
import { Card } from "@/components/ui/card";

export const CalendarPage = () => {
  const calendarContent = { 
    name: "calendar",
    title: "Calendar Component",
    description: `The Calendar component provides a date picker interface that allows users to select dates in a calendar view. It's a versatile component that supports various date selection modes and customization options.

Key Features:
- Date selection
- Range selection
- Multiple selection
- Customizable styling
- Keyboard navigation
- Localization support
- Accessible by default

Best Practices:
1. Provide clear date format
2. Include date constraints when needed
3. Handle timezone differences
4. Consider localization
5. Provide clear feedback for selected dates`,
    codeExample: `import { Calendar } from '../components/ui/calendar';

function ExampleCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}`,
    usage: `The Calendar component is perfect for:
- Date selection forms
- Booking systems
- Event scheduling
- Date range selection
- Appointment booking
- Date-based filtering`,
    props: [
      {
        name: "mode",
        type: "string",
        description: "Selection mode (single, range, multiple)",
      },
      {
        name: "selected",
        type: "Date | Date[]",
        description: "The selected date(s)",
      },
      {
        name: "onSelect",
        type: "function",
        description: "Callback when date selection changes",
      },
    ],
    examples: [
      {
        title: "Basic Calendar",
        description: "A simple calendar with single date selection",
        content: (
          <Card className="p-4">
            <Calendar
              mode="single"
              selected={new Date()}
              className="rounded-md"
            />
          </Card>
        ),
      },
      {
        title: "Range Selection",
        description: "Calendar with date range selection",
        content: (
          <Card className="p-4">
            <Calendar
              mode="range"
              selected={{
                from: new Date(),
                to: new Date(new Date().setDate(new Date().getDate() + 7)),
              }}
              className="rounded-md"
            />
          </Card>
        ),
      },
    ],
  };

  return <ComponentDetail {...calendarContent} />;
}; 