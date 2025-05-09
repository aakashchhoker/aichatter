import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export const HoverCardPage = () => {
  const hoverCardContent = {  
    name: "hover-card",
    title: "Hover Card Component",
    description: `The Hover Card component provides a card that appears when hovering over a trigger element, typically used for displaying additional information or actions.

Key Features:
- Hover trigger
- Customizable content
- Animation support
- Focus management
- Accessible by default
- Multiple positions

Best Practices:
1. Use for supplementary information
2. Keep content concise
3. Provide clear triggers
4. Handle keyboard navigation
5. Consider mobile experience`,
    codeExample: `import { HoverCard } from '@your-ui-library/hover-card';

function ExampleHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover me</HoverCardTrigger>
      <HoverCardContent>
        Additional information here.
      </HoverCardContent>
    </HoverCard>
  );
}`,
    usage: `The Hover Card component is perfect for:
- User profiles
- Tooltips
- Quick actions
- Additional details
- Contextual help`,
    props: [
      {
        name: "open",
        type: "boolean",
        default: "false",
        description: "Controls the open state of the hover card.",
      },
      {
        name: "onOpenChange",
        type: "function",
        default: "undefined",
        description: "Callback when the open state changes.",
      },
      {
        name: "defaultOpen",
        type: "boolean",
        default: "false",
        description: "The default open state of the hover card.",
      },
    ],
    examples: [
      {
        title: "Basic Hover Card",
        description: "A simple hover card with text content",
        content: (
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@username</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@username</h4>
                    <p className="text-sm">
                      The creator of this amazing UI library.
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        ),
      },
      {
        title: "Hover Card with Image",
        description: "A hover card with an image and description",
        content: (
          <div className="flex flex-wrap gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">View Image</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="Profile"
                    className="rounded-md"
                  />
                  <p className="text-sm text-muted-foreground">
                    This is a sample image that appears on hover.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...hoverCardContent} />;
}; 