import { ExternalLink } from "lucide-react";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ComponentShadcn({ name }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shadcn UI Documentation</CardTitle>
        <CardDescription>
          Information about this component from Shadcn UI
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <a
          href={`https://ui.shadcn.com/docs/components/${name ? name.toLowerCase() : 'docs'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 text-muted-foreground hover:text-primary transition-colors"
          title={`View ${name || 'component'} on Shadcn UI`}
        >
          <ExternalLink className="w-5 h-5 cursor-pointer" />
        </a>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <TypographyH2>About Shadcn UI</TypographyH2>
          <TypographyP>
            Shadcn UI is a collection of re-usable components built using
            Radix UI and Tailwind CSS. These components are designed to be
            accessible, customizable, and easy to use.
          </TypographyP>

          <TypographyH2>Component Features</TypographyH2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Built with Radix UI primitives for accessibility</li>
            <li>Styled with Tailwind CSS for easy customization</li>
            <li>Fully typed with TypeScript</li>
            <li>Dark mode support out of the box</li>
            <li>Customizable through CSS variables</li>
          </ul>

          <TypographyH2>Installation</TypographyH2>
          <TypographyP>
            To use this component in your project, you can install it
            using the Shadcn UI CLI:
          </TypographyP>
          <pre className="bg-muted p-2 md:p-4 rounded-md text-xs md:text-sm overflow-x-auto">
            <code>npx shadcn-ui@latest add {name?.toLowerCase()}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
} 