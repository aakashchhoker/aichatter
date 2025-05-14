import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Skeleton } from "../components/ui/skeleton";

export const SkeletonPage = () => {
  const skeletonContent = { 
    name: "skeleton",
    title: "Skeleton Component",
    description: `The Skeleton component is used to create loading states for content that is being fetched or processed. It provides a visual placeholder that mimics the shape of the content that will be loaded.

Key Features:
- Customizable shapes
- Animation support
- Responsive sizing
- Multiple variants
- Accessible loading states
- Easy to customize

Best Practices:
1. Match the shape of actual content
2. Use appropriate sizes
3. Keep animations subtle
4. Consider loading states
5. Maintain consistent spacing`,
    codeExample: `import { Skeleton } from '@/components/ui/skeleton';

function ExampleSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}`,
    usage: `The Skeleton component is perfect for:
- Content loading states
- Image placeholders
- Text loading indicators
- Card loading states
- List item placeholders
- Form loading states`,
    props: [
      {
        name: "className",
        type: "string",
        default: "undefined",
        description: "Additional CSS classes to apply to the skeleton.",
      },
      {
        name: "variant",
        type: "string",
        default: "default",
        description: 'The visual style of the skeleton. Can be "default" or "pulse".',
      },
    ],
    examples: [
      {
        title: "Basic Skeletons",
        description: "Different shapes and sizes of skeletons",
        content: (
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ),
      },
      {
        title: "Card Skeleton",
        description: "A skeleton that mimics a card layout",
        content: (
          <div className="space-y-4 p-4 border rounded-lg">
            <Skeleton className="h-32 w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Profile Skeleton",
        description: "A skeleton that mimics a profile layout",
        content: (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...skeletonContent} />;
}; 