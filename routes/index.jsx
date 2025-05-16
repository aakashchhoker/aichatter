import React from "react";
import { Navigate } from "react-router-dom";
import { AccordionPage } from "../src/pages/AccordionPage";
import { AlertPage } from "../src/pages/AlertPage";
import { AlertDialogPage } from "../src/pages/AlertDialogPage";
import { AspectRatioPage } from "../src/pages/AspectRatioPage";
import { AvatarPage } from "../src/pages/AvatarPage";
import { BadgePage } from "../src/pages/BadgePage";
import { CalendarPage } from "../src/pages/CalendarPage";
import { CardPage } from "../src/pages/CardPage";
import { ChartPage } from "../src/pages/ChartPage";
import { CheckboxPage } from "../src/pages/CheckboxPage";
import { BreadcrumbPages } from "../src/pages/BreadcrumbPage";
import { CollapsiblePage } from "../src/pages/CollapsiblePage";
import { ComboboxPage } from "../src/pages/ComboboxPage";
import { CommandPage } from "../src/pages/CommandPage";
import { ContextMenuPage } from "../src/pages/ContextMenuPage";
import { DataTablePage } from "../src/pages/DataTablePage";
import { DataTablePaginationPage } from "../src/pages/DataTablePaginationPage";
import { DataTableToolbarPage } from "../src/pages/DataTableToolbarPage";
import { DatePickerPage } from "../src/pages/DatePickerPage";
import { DialogPage } from "../src/pages/DialogPage";
import { DrawerPage } from "../src/pages/DrawerPage";
import { DropdownMenuPage } from "../src/pages/DropdownMenuPage";
import { FormPage } from "../src/pages/FormPage";
import { HoverCardPage } from "../src/pages/HoverCardPage";
import { InputPage } from "../src/pages/InputPage";
import { InputOTPPage } from "../src/pages/InputOTPPage";
import { LabelPage } from "../src/pages/LabelPage";
import { MenubarPage } from "../src/pages/MenubarPage";
import { NavigationMenuPage } from "../src/pages/NavigationMenuPage";
import { PaginationPage } from "../src/pages/PaginationPage";
import { PopoverPage } from "../src/pages/PopoverPage";
import { RadioGroupPage } from "../src/pages/RadioGroupPage";
import { ResizablePage } from "../src/pages/ResizablePage";
import { ScrollAreaPage } from "../src/pages/ScrollAreaPage";
import { SelectPage } from "../src/pages/SelectPage";
import { SeparatorPage } from "../src/pages/SeparatorPage";
import { SheetPage } from "../src/pages/SheetPage";
import { SidebarPage } from "../src/pages/SidebarPage";
import { SkeletonPage } from "../src/pages/SkeletonPage";
import { SliderPage } from "../src/pages/SliderPage";
import { SonnerPage } from "../src/pages/SonnerPage";
import { SwitchPage } from "../src/pages/SwitchPage";
import { TablePage } from "../src/pages/TablePage";
import { TabsPage } from "../src/pages/TabsPage";
import { TextareaPage } from "../src/pages/TextareaPage";
import { ToastPage } from "../src/pages/ToastPage";
import { TogglePage } from "../src/pages/TogglePage";
import { ToggleGroupPage } from "../src/pages/ToggleGroupPage";
import { TooltipPage } from "../src/pages/TooltipPage";
import { TypographyPage } from "../src/pages/TypographyPage";
import IconsPage from "../src/pages/IconsPage";
import { ButtonPage } from "../src/pages/ButtonPage";
import AiChatter from "../src/aichatter/index.jsx";

// Usage: import routes from '../routes';
// Then in your <Routes>: routes.map(({path, element, ...rest}) => <Route key={path} path={path} element={element} {...rest} />)
const allRoutes = [
  { path: "/button", element: <ButtonPage /> },
  { path: "/accordion", element: <AccordionPage /> },
  { path: "/alert", element: <AlertPage /> },
  { path: "/alert-dialog", element: <AlertDialogPage /> },
  { path: "/aspect-ratio", element: <AspectRatioPage /> },
  { path: "/avatar", element: <AvatarPage /> },
  { path: "/badge", element: <BadgePage /> },
  { path: "/breadcrumb", element: <BreadcrumbPages /> },
  { path: "/calendar", element: <CalendarPage /> },
  { path: "/card", element: <CardPage /> },
  { path: "/chart", element: <ChartPage /> },
  { path: "/checkbox", element: <CheckboxPage /> },
  { path: "/collapsible", element: <CollapsiblePage /> },
  { path: "/combobox", element: <ComboboxPage /> },
  { path: "/command", element: <CommandPage /> },
  { path: "/context-menu", element: <ContextMenuPage /> },
  { path: "/data-table", element: <DataTablePage /> },
  { path: "/data-table-pagination", element: <DataTablePaginationPage /> },
  { path: "/data-table-toolbar", element: <DataTableToolbarPage /> },
  { path: "/date-picker", element: <DatePickerPage /> },
  { path: "/dialog", element: <DialogPage /> },
  { path: "/drawer", element: <DrawerPage /> },
  { path: "/dropdown-menu", element: <DropdownMenuPage /> },
  { path: "/form", element: <FormPage /> },
  { path: "/hover-card", element: <HoverCardPage /> },
  { path: "/icons", element: <IconsPage /> },
  { path: "/input-otp", element: <InputOTPPage /> },
  { path: "/input", element: <InputPage /> },
  { path: "/label", element: <LabelPage /> },
  { path: "/menubar", element: <MenubarPage /> },
  { path: "/navigation-menu", element: <NavigationMenuPage /> },
  { path: "/pagination", element: <PaginationPage /> },
  { path: "/popover", element: <PopoverPage /> },
  { path: "/radio-group", element: <RadioGroupPage /> },
  { path: "/resizable", element: <ResizablePage /> },
  { path: "/scroll-area", element: <ScrollAreaPage /> },
  { path: "/select", element: <SelectPage /> },
  { path: "/separator", element: <SeparatorPage /> },
  { path: "/sheet", element: <SheetPage /> },
  { path: "/sidebar", element: <SidebarPage /> },
  { path: "/skeleton", element: <SkeletonPage /> },
  { path: "/slider", element: <SliderPage /> },
  { path: "/sonner", element: <SonnerPage /> },
  { path: "/switch", element: <SwitchPage /> },
  { path: "/table", element: <TablePage /> },
  { path: "/tabs", element: <TabsPage /> },
  { path: "/textarea", element: <TextareaPage /> },
  { path: "/toast", element: <ToastPage /> },
  { path: "/toggle-group", element: <ToggleGroupPage /> },
  { path: "/toggle", element: <TogglePage /> },
  { path: "/tooltip", element: <TooltipPage /> },
  { path: "/typography", element: <TypographyPage /> },
  { path: "/aichatter", element: <AiChatter /> },
  { path: "*", element: <Navigate to="/" replace /> },
];

export default allRoutes;
