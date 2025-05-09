import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar'
import { Chart } from '@/components/ui/chart'
import { DatePicker, DatePickerWithRange } from '@/components/ui/date-picker'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { TypographyH1, TypographyH2, TypographyP, TypographyBlockquote } from '@/components/ui/typography'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from '@/components/ui/context-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Home, 
  Settings, 
  User, 
  Mail, 
  Bell, 
  Search, 
  Menu, 
  ChevronDown, 
  ChevronRight, 
  Plus, 
  Trash, 
  Edit, 
  Share, 
  Download, 
  Upload, 
  Star, 
  Heart, 
  MessageSquare, 
  Calendar as CalendarIcon,
  Clock,
  Check,
  X,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronUp,
  File,
  Folder,
  Image,
  Link,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Filter,
  Grid,
  List,
  Maximize,
  Minimize,
  MoreHorizontal,
  MoreVertical,
  RefreshCw,
  Save,
  Send,
  Shield,
  Sliders,
  Tag,
  ThumbsUp,
  ThumbsDown,
  Trash2,
  UploadCloud,
  Users,
  Video,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Zap,
  ZoomIn,
  ZoomOut,
  LogOut,
  Sun,
  Moon
} from 'lucide-react'

// Icon categories
const iconCategories = {
  navigation: [Home, Settings, Menu, ChevronDown, ChevronRight, ChevronLeft, ChevronUp, ArrowRight, ArrowLeft],
  actions: [Plus, Trash, Edit, Share, Download, Upload, Save, Send, RefreshCw],
  social: [Star, Heart, ThumbsUp, ThumbsDown, MessageSquare],
  media: [Image, Video, Volume2, VolumeX, ZoomIn, ZoomOut],
  system: [Bell, Search, Lock, Unlock, Eye, EyeOff, Wifi, WifiOff],
  interface: [Grid, List, Maximize, Minimize, MoreHorizontal, MoreVertical],
  files: [File, Folder, UploadCloud],
  communication: [Mail, MessageSquare, Send],
  status: [Check, X, AlertCircle, Info, HelpCircle],
  user: [User, Users, LogOut],
  other: [CalendarIcon, Clock, ExternalLink, Link, Shield, Sliders, Tag, Zap]
}

export function ShowAllComponents() {
  const { theme, setTheme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState('navigation')

  const IconCard = ({ Icon, name }) => (
    <Card className="flex flex-col items-center p-4 hover:shadow-lg transition-shadow">
      <Icon className="h-8 w-8 mb-2" />
      <TypographyP className="text-sm text-center">{name}</TypographyP>
    </Card>
  )

  // Sample data for the chart
  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
  ]

  // Sample data for the table
  const tableData = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ]

  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Header with Theme Switch */}
      <div className="flex justify-between items-center">
        <TypographyH1>UI Components Showcase</TypographyH1>
        <div className="flex items-center space-x-2">
          <Sun className="h-5 w-5" />
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
          <Moon className="h-5 w-5" />
        </div>
      </div>

      {/* Icon Categories */}
      <section className="space-y-4">
        <TypographyH2>Lucide Icons</TypographyH2>
        <Tabs defaultValue="navigation" value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="mb-4">
            {Object.keys(iconCategories).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={selectedCategory}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {iconCategories[selectedCategory].map((Icon) => (
                <IconCard key={Icon.name} Icon={Icon} name={Icon.name} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Typography Section */}
      <section className="space-y-4">
        <TypographyH2>Typography</TypographyH2>
        <TypographyP>This is a paragraph text.</TypographyP>
        <TypographyBlockquote>
          This is a blockquote. It can be used to highlight important quotes or information.
        </TypographyBlockquote>
      </section>

      {/* Avatar Section */}
      <section className="space-y-4">
        <TypographyH2>Avatar</TypographyH2>
        <div className="flex space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Badge Section */}
      <section className="space-y-4">
        <TypographyH2>Badge</TypographyH2>
        <div className="flex space-x-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="space-y-4">
        <TypographyH2>Calendar</TypographyH2>
        <div className="border rounded-lg p-4">
          <Calendar />
        </div>
      </section>

      {/* Date Picker Section */}
      <section className="space-y-4">
        <TypographyH2>Date Picker</TypographyH2>
        <div className="flex space-x-4">
          <DatePicker />
          <DatePickerWithRange />
        </div>
      </section>

      {/* Chart Section */}
      <section className="space-y-4">
        <TypographyH2>Chart</TypographyH2>
        <div className="border rounded-lg p-4">
          <Chart
            data={chartData}
            xAxisKey="name"
            yAxisKey="value"
            title="Monthly Sales"
          />
        </div>
      </section>

      {/* Resizable Section */}
      <section className="space-y-4">
        <TypographyH2>Resizable Panels</TypographyH2>
        <div className="h-[200px] border rounded-lg">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25}>
              <div className="p-4">Panel 1</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="p-4">Panel 2</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </section>

      {/* Table Section */}
      <section className="space-y-4">
        <TypographyH2>Table</TypographyH2>
        <div className="border rounded-lg">
          <Table>
            <TableCaption>A list of users</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Button Section */}
      <section className="space-y-4">
        <TypographyH2>Button</TypographyH2>
        <div className="flex space-x-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
          <Button variant="secondary">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="destructive">
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="ghost">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="link">
            <ExternalLink className="mr-2 h-4 w-4" />
            Link
          </Button>
        </div>
      </section>

      {/* Input Section */}
      <section className="space-y-4">
        <TypographyH2>Input</TypographyH2>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
          <div className="relative">
            <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="password" placeholder="Password" className="pl-8" />
          </div>
        </div>
      </section>

      {/* Label Section */}
      <section className="space-y-4">
        <TypographyH2>Label</TypographyH2>
        <div className="flex space-x-4">
          <Label htmlFor="name">Name</Label>
          <Label htmlFor="email">Email</Label>
        </div>
      </section>

      {/* Select Section */}
      <section className="space-y-4">
        <TypographyH2>Select</TypographyH2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* Card Section */}
      <section className="space-y-4">
        <TypographyH2>Card</TypographyH2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-500" />
              Featured Content
            </CardTitle>
            <CardDescription>This is a featured card with icons</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content with some interesting information</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <ThumbsUp className="mr-2 h-4 w-4" />
              Like
            </Button>
            <Button variant="outline" size="sm">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Tabs Section */}
      <section className="space-y-4">
        <TypographyH2>Tabs</TypographyH2>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
        </Tabs>
      </section>

      {/* Sheet Section */}
      <section className="space-y-4">
        <TypographyH2>Sheet</TypographyH2>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>Sheet Description</SheetDescription>
            </SheetHeader>
            <div className="py-4">Sheet Content</div>
          </SheetContent>
        </Sheet>
      </section>

      {/* Separator Section */}
      <section className="space-y-4">
        <TypographyH2>Separator</TypographyH2>
        <div className="space-y-4">
          <p>Above separator</p>
          <Separator />
          <p>Below separator</p>
        </div>
      </section>

      {/* Skeleton Section */}
      <section className="space-y-4">
        <TypographyH2>Skeleton</TypographyH2>
        <div className="space-y-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </section>

      {/* Command Section */}
      <section className="space-y-4">
        <TypographyH2>Command</TypographyH2>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      {/* Context Menu Section */}
      <section className="space-y-4">
        <TypographyH2>Context Menu</TypographyH2>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Save Page As...</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      {/* Hover Card Section */}
      <section className="space-y-4">
        <TypographyH2>Hover Card</TypographyH2>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Hover Card Title</h4>
              <p className="text-sm">Hover Card Content</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </section>

      {/* Menubar Section */}
      <section className="space-y-4">
        <TypographyH2>Menubar</TypographyH2>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </section>

      {/* Navigation Menu Section */}
      <section className="space-y-4">
        <TypographyH2>Navigation Menu</TypographyH2>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Getting Started
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <NavigationMenuLink className="flex items-center">
                      <File className="mr-2 h-4 w-4" />
                      Documentation
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Components
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      {/* Scroll Area Section */}
      <section className="space-y-4">
        <TypographyH2>Scroll Area</TypographyH2>
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Scroll Area Content</h4>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>Scrollable content {i + 1}</p>
            ))}
          </div>
        </ScrollArea>
      </section>

      {/* Tooltip Section */}
      <section className="space-y-4">
        <TypographyH2>Tooltip</TypographyH2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>

      {/* Checkbox Section */}
      <section className="space-y-4">
        <TypographyH2>Checkbox</TypographyH2>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms">Accept terms and conditions</label>
        </div>
      </section>

      {/* Radio Group Section */}
      <section className="space-y-4">
        <TypographyH2>Radio Group</TypographyH2>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="option1" />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="option2" />
            <Label htmlFor="option2">Option 2</Label>
          </div>
        </RadioGroup>
      </section>

      {/* Slider Section */}
      <section className="space-y-4">
        <TypographyH2>Slider</TypographyH2>
        <Slider defaultValue={[50]} max={100} step={1} />
      </section>

      {/* Switch Section */}
      <section className="space-y-4">
        <TypographyH2>Switch</TypographyH2>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </section>

      {/* Textarea Section */}
      <section className="space-y-4">
        <TypographyH2>Textarea</TypographyH2>
        <Textarea placeholder="Type your message here." />
      </section>

      {/* Toggle Section */}
      <section className="space-y-4">
        <TypographyH2>Toggle</TypographyH2>
        <div className="flex space-x-4">
          <ToggleGroup type="single">
            <ToggleGroupItem value="toggle">Toggle</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      {/* Alert Section */}
      <section className="space-y-4">
        <TypographyH2>Alert</TypographyH2>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is an informational alert with an icon.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>This is an error alert with an icon.</AlertDescription>
        </Alert>
      </section>

      {/* Alert Dialog Section */}
      <section className="space-y-4">
        <TypographyH2>Alert Dialog</TypographyH2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Open Alert Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      {/* Dialog Section */}
      <section className="space-y-4">
        <TypographyH2>Dialog</TypographyH2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>Dialog Description</DialogDescription>
            </DialogHeader>
            <div className="py-4">Dialog Content</div>
            <DialogFooter>
              <Button>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Dropdown Menu Section */}
      <section className="space-y-4">
        <TypographyH2>Dropdown Menu</TypographyH2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <Menu className="mr-2 h-4 w-4" />
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* Collapsible Section */}
      <section className="space-y-4">
        <TypographyH2>Collapsible</TypographyH2>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button>Toggle</Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-4">Collapsible Content</div>
          </CollapsibleContent>
        </Collapsible>
      </section>

      {/* Aspect Ratio Section */}
      <section className="space-y-4">
        <TypographyH2>Aspect Ratio</TypographyH2>
        <div className="w-[300px]">
          <AspectRatio ratio={16 / 9}>
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              Aspect Ratio 16:9
            </div>
          </AspectRatio>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="space-y-4">
        <TypographyH2>Accordion</TypographyH2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </div>
                <div className="flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  Privacy
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Account
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex items-center">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </div>
                <div className="flex items-center">
                  <File className="mr-2 h-4 w-4" />
                  Documentation
                </div>
                <div className="flex items-center">
                  <Info className="mr-2 h-4 w-4" />
                  FAQ
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Toast Demo Button */}
      <section className="space-y-4">
        <TypographyH2>Toast</TypographyH2>
        <button
          onClick={() => toast('This is a toast notification')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show Toast
        </button>
      </section>

      {/* Toast Provider */}
      <Toaster />
    </div>
  )
} 