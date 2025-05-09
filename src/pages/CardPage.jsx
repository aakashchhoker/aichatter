import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CardPage = () => {
  const cardContent = {
    title: "Card Component",
    description: `The Card component is a flexible container that can be used to group related content and actions. It's a versatile component that can be used for various purposes, from displaying information to creating interactive elements.

Key Features:
- Multiple sections (header, content, footer)
- Flexible layout
- Customizable styling
- Responsive design
- Accessible by default
- Interactive elements support

Best Practices:
1. Keep content organized and focused
2. Use appropriate spacing
3. Maintain visual hierarchy
4. Consider mobile responsiveness
5. Use consistent styling across cards`,
    codeExample: `import { Card, CardHeader, CardContent, CardFooter } from '@your-ui-library/card';

function ExampleCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}`,
    usage: `The Card component is perfect for:
- Content containers
- Product displays
- User profiles
- Feature highlights
- Pricing tables
- Blog posts
- Dashboard widgets`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the card",
      },
    ],
    examples: [
      {
        title: "Basic Card",
        description: "A simple card with header, content, and footer",
        content: (
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content of the card.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        ),
      },
      {
        title: "Interactive Card",
        description: "A card with interactive elements",
        content: (
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      placeholder="Name of your project"
                      className="border rounded-md p-2"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        ),
      },
    ],
  };

  return <ComponentDetail {...cardContent} />;
}; 