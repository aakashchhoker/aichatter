import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/ui/resizable";

export const ResizablePage = () => {
  const resizableContent = {
    title: "Resizable Component",
    description: `The Resizable component allows users to adjust the size of panels or containers by dragging handles.

Key Features:
- Multiple panel support
- Custom handle positions
- Minimum and maximum sizes
- Collapsible panels
- Touch support
- Keyboard accessibility

Best Practices:
1. Provide visual feedback
2. Set appropriate size constraints
3. Consider mobile interactions
4. Maintain aspect ratios when needed
5. Use for flexible layouts`,
    codeExample: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@your-ui-library/resizable';

function ExampleResizable() {
  return (
    <ResizablePanelGroup>
      <ResizablePanel defaultSize={25}>
        <div>Panel 1</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div>Panel 2</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`,
    usage: `The Resizable component is ideal for:
- Split views
- Sidebar panels
- Code editors
- Dashboard layouts
- Document viewers
- Custom layouts`,
    props: [
      {
        name: "defaultSize",
        type: "number",
        default: "undefined",
        description: "The default size of the panel as a percentage.",
      },
      {
        name: "minSize",
        type: "number",
        default: "10",
        description: "The minimum size of the panel as a percentage.",
      },
      {
        name: "maxSize",
        type: "number",
        default: "90",
        description: "The maximum size of the panel as a percentage.",
      },
      {
        name: "collapsible",
        type: "boolean",
        default: "false",
        description: "Whether the panel can be collapsed.",
      },
    ],
    examples: [
      {
        title: "Basic Resizable Panels",
        description: "Two panels with a resizable handle",
        content: (
          <div className="h-[200px] w-full">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Sidebar</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Main Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        ),
      },
      {
        title: "Vertical Resizable Panels",
        description: "Three panels with vertical resizing",
        content: (
          <div className="h-[300px] w-full">
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Header</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Content</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Footer</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...resizableContent} />;
}; 