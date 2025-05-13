import { TypographyH1, TypographyP } from "@/components/ui/typography";

export function ComponentHeader({ description }) {
  return (
    <div className="space-y-2 md:space-y-4">
      <TypographyH1 className="text-2xl md:text-3xl lg:text-4xl">Explanation</TypographyH1>
      <TypographyP className="text-muted-foreground text-sm md:text-base">
        {description}
      </TypographyP>
    </div>
  );
} 