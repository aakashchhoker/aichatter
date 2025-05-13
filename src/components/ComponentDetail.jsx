import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ComponentHeader } from "./ComponentDetail/ComponentHeader";
import { ComponentTabs } from "./ComponentDetail/ComponentTabs";
import { getActiveFilePath, transformImports } from "./ComponentDetail/utils";

export function ComponentDetail({
  name,
  description,
  variants = [],
  examples = [],
  codeExample = "",
  usage = "",
  props = [],
}) {
  // Default to just the JSX for live preview
  const initialLiveCode = name === 'avatar'
    ? `<Avatar>\n  <AvatarImage src=\"https://example.com/avatar.jpg\" alt=\"User avatar\" />\n  <AvatarFallback>JD</AvatarFallback>\n</Avatar>`
    : codeExample;

  // Create a scope object with all available components
  const scope = {
    Avatar, AvatarImage, AvatarFallback,
    Button,
    Input,
    Label,
    Checkbox,
    RadioGroup, RadioGroupItem,
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
    Switch,
    Slider,
    Separator,
    Skeleton,
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
    Alert, AlertTitle, AlertDescription,
    AspectRatio,
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
    Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
    Popover, PopoverContent, PopoverTrigger,
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
    InputOTP, InputOTPGroup, InputOTPSlot,
  };

  return (
    <div className="container mx-auto p-0 space-y-4 md:space-y-8">
      <ComponentHeader description={description} />
      <ComponentTabs
        name={name}
        variants={variants}
        examples={examples}
        codeExample={codeExample}
        usage={usage}
        props={props}
        initialLiveCode={initialLiveCode}
        scope={scope}
        getActiveFilePath={getActiveFilePath}
        transformImports={transformImports}
      />
    </div>
  );
}
