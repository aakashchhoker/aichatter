import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ComponentUsage({ usage }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose dark:prose-invert max-w-none">{usage}</div>
      </CardContent>
    </Card>
  );
} 