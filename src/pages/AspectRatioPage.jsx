import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { AspectRatio } from "../components/ui/aspect-ratio";

export const AspectRatioPage = () => {
  const aspectRatioContent = {
    name: "aspect-ratio",
    title: "Aspect Ratio Component",
    description: `The Aspect Ratio component is used to maintain consistent width-to-height ratios for content. It's particularly useful for images, videos, and other media elements that need to maintain specific proportions.

Key Features:
- Maintains consistent aspect ratios
- Responsive design
- Works with any content
- Customizable ratios
- Prevents layout shifts
- Easy to implement

Best Practices:
1. Use appropriate ratios for different content types
2. Consider mobile responsiveness
3. Handle loading states
4. Provide fallback content
5. Test across different screen sizes`,
    codeExample: `import { AspectRatio } from '../components/ui/aspect-ratio';

function ExampleAspectRatio() {
  return (
    <AspectRatio ratio={16 / 9}>
      <img
        src="https://example.com/image.jpg"
        alt="Example image"
        className="object-cover w-full h-full"
      />
    </AspectRatio>
  );
}`,
    usage: `The Aspect Ratio component is perfect for:
- Images and photos
- Video players
- Social media embeds
- Product images
- Hero sections
- Media galleries`,
    props: [
      {
        name: "ratio",
        type: "number",
        description: "The width-to-height ratio (e.g., 16/9, 4/3, 1/1)",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the container",
      },
    ],
    examples: [
      {
        title: "16:9 Aspect Ratio",
        description: "A common aspect ratio for videos and wide images",
        content: (
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <div className="flex items-center justify-center">
              <span className="text-muted-foreground">16:9 Aspect Ratio</span>
            </div>
          </AspectRatio>
        ),
      },
      {
        title: "1:1 Aspect Ratio",
        description: "A square aspect ratio, common for profile pictures",
        content: (
          <AspectRatio ratio={1} className="bg-muted">
            <div className="flex items-center justify-center">
              <span className="text-muted-foreground">1:1 Aspect Ratio</span>
            </div>
          </AspectRatio>
        ),
      },
    ],
  };

  return <ComponentDetail {...aspectRatioContent} />;
}; 