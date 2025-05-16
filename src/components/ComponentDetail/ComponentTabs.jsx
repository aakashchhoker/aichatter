import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentPreview } from "./ComponentPreview";
import { ComponentCode } from "./ComponentCode";
import { ComponentPractice } from "./ComponentPractice";
import { ComponentUsage } from "./ComponentUsage";
import { ComponentProps } from "./ComponentProps";
import { ComponentShadcn } from "./ComponentShadcn";

export function ComponentTabs({
  name,
  variants,
  examples,
  codeExample,
  usage,
  props,
  initialLiveCode,
  scope,
  getActiveFilePath,
  transformImports
}) {
  return (
    <Tabs defaultValue="preview" className="space-y-3 md:space-y-4">
      <TabsList className="w-full flex justify-start overflow-x-auto">
        <TabsTrigger value="preview" className="text-xs md:text-sm">Preview</TabsTrigger>
        <TabsTrigger value="code" className="text-xs md:text-sm">Code</TabsTrigger>
        {/* <TabsTrigger value="practice" className="text-xs md:text-sm">Practice</TabsTrigger> */}
        <TabsTrigger value="usage" className="text-xs md:text-sm">Usage</TabsTrigger>
        {props.length > 0 && <TabsTrigger value="props" className="text-xs md:text-sm">Props</TabsTrigger>}
        <TabsTrigger value="shadcn" className="text-xs md:text-sm">Shadcn UI</TabsTrigger>
      </TabsList>

      <TabsContent value="preview">
        <ComponentPreview variants={variants} examples={examples} />
      </TabsContent>

      <TabsContent value="code">
        <ComponentCode
          codeExample={codeExample}
          name={name}
          getActiveFilePath={getActiveFilePath}
        />
      </TabsContent>

      {/*
      <TabsContent value="practice">
        <ComponentPractice
          name={name}
          initialLiveCode={initialLiveCode}
          scope={scope}
          getActiveFilePath={getActiveFilePath}
          transformImports={transformImports}
        />
      </TabsContent>
      */}

      <TabsContent value="usage">
        <ComponentUsage usage={usage} />
      </TabsContent>

      {props.length > 0 && (
        <TabsContent value="props">
          <ComponentProps props={props} />
        </TabsContent>
      )}

      <TabsContent value="shadcn">
        <ComponentShadcn name={name} />
      </TabsContent>
    </Tabs>
  );
} 