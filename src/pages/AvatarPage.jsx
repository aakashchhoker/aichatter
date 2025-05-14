import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export const AvatarPage = () => {
  const avatarContent = {
    name: "avatar",
    title: "Avatar Component",
    description: `The Avatar component is used to display user profile pictures or initials. It's a versatile component that can handle different image formats and provides fallback options when images fail to load.

Key Features:
- Image and fallback support
- Multiple sizes
- Customizable styling
- Accessible by default
- Responsive design
- Group support

Best Practices:
1. Always provide meaningful fallback content
2. Use appropriate sizes for different contexts
3. Handle image loading states
4. Consider accessibility
5. Use consistent styling across your application`,
    codeExample: `import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

function ExampleAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://example.com/avatar.jpg" alt="User avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}`,
    usage: `The Avatar component is perfect for:
- User profiles
- Team member displays
- Comment sections
- Chat interfaces
- Navigation menus
- User settings`,
    props: [
      {
        name: "size",
        type: "string",
        description: "The size of the avatar (sm, md, lg)",
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes to apply to the avatar",
      },
    ],
    examples: [
      {
        title: "Basic Avatar",
        description: "A simple avatar with image and fallback",
        content: (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ),
      },
      {
        title: "Avatar with Fallback",
        description: "An avatar that shows initials when image fails to load",
        content: (
          <Avatar>
            <AvatarImage src="/broken-image.jpg" alt="@user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        ),
      },
      {
        title: "Different Sizes",
        description: "Avatars in different sizes",
        content: (
          <div className="flex items-center gap-4">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...avatarContent} />;
}; 