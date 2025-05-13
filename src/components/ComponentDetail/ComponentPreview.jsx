import { TypographyH2 } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ComponentPreview({ variants = [], examples = [] }) {
  return (
    <div className="space-y-4">
      {variants.length > 0 && (
        <div className="space-y-4">
          <TypographyH2>Variants</TypographyH2>
          <div className="grid gap-4">
            {variants.map((variant, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{variant.name}</CardTitle>
                  <CardDescription>{variant.description}</CardDescription>
                </CardHeader>
                <CardContent>{variant.example}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {examples.length > 0 && (
        <div className="space-y-4">
          <TypographyH2>Examples</TypographyH2>
          <div className="grid gap-4">
            {examples.map((example, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{example.title}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent>{example.content}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 