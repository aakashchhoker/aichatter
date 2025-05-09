import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { Slider } from "../components/ui/slider";

export const SliderPage = () => {
  const sliderContent = { 
    name: "slider",
    title: "Slider Component",
    description: `The Slider component allows users to select a value from a given range by moving a handle along a track. It's commonly used for adjusting settings like volume, brightness, or any numerical value within a range.

Key Features:
- Single and range selection
- Customizable steps
- Keyboard navigation
- Touch support
- Accessible by default
- Customizable styling

Best Practices:
1. Provide clear labels
2. Use appropriate ranges
3. Consider step sizes
4. Show current value
5. Support keyboard input`,
    codeExample: `import { Slider } from '@your-ui-library/slider';

function ExampleSlider() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  );
}`,
    usage: `The Slider component is perfect for:
- Volume controls
- Brightness adjustment
- Price range selection
- Time selection
- Rating inputs
- Progress indicators`,
    props: [
      {
        name: "defaultValue",
        type: "number[]",
        default: "[0]",
        description: "The default value of the slider.",
      },
      {
        name: "max",
        type: "number",
        default: "100",
        description: "The maximum value of the slider.",
      },
      {
        name: "min",
        type: "number",
        default: "0",
        description: "The minimum value of the slider.",
      },
      {
        name: "step",
        type: "number",
        default: "1",
        description: "The step interval of the slider.",
      },
    ],
    examples: [
      {
        title: "Basic Slider",
        description: "A simple slider with default settings",
        content: (
          <div className="space-y-4">
            <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
            <div className="text-sm text-muted-foreground">Default slider with range 0-100</div>
          </div>
        ),
      },
      {
        title: "Range Slider",
        description: "A slider that allows selecting a range of values",
        content: (
          <div className="space-y-4">
            <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />
            <div className="text-sm text-muted-foreground">Range slider with two handles</div>
          </div>
        ),
      },
      {
        title: "Stepped Slider",
        description: "A slider with custom step intervals",
        content: (
          <div className="space-y-4">
            <Slider defaultValue={[50]} max={100} step={10} className="w-[60%]" />
            <div className="text-sm text-muted-foreground">Slider with 10-step intervals</div>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...sliderContent} />;
}; 