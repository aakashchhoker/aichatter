import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from "./components/ThemeProvider";
import { Layout } from "./components/Layout";
import { ShowAllComponents } from "./components/ShowAllComponents";
import { ButtonPage } from "./pages/ButtonPage";
import { AccordionPage } from "./pages/AccordionPage";
import { AlertPage } from "./pages/AlertPage";
import { AlertDialogPage } from "./pages/AlertDialogPage";
import { AspectRatioPage } from "./pages/AspectRatioPage";
import { AvatarPage } from "./pages/AvatarPage";
import { BadgePage } from "./pages/BadgePage";
import { CalendarPage } from "./pages/CalendarPage";
import { CardPage } from "./pages/CardPage";
import { ChartPage } from "./pages/ChartPage";
import { CheckboxPage } from "./pages/CheckboxPage";
import { BreadcrumbPages } from "./pages/BreadcrumbPage";
import { CollapsiblePage } from "./pages/CollapsiblePage";
import { ComboboxPage } from "./pages/ComboboxPage";
import { CommandPage } from "./pages/CommandPage";
import { ContextMenuPage } from "./pages/ContextMenuPage";
import { DataTablePage } from "./pages/DataTablePage";
import { DataTablePaginationPage } from "./pages/DataTablePaginationPage";
import { DataTableToolbarPage } from "./pages/DataTableToolbarPage";
import { DatePickerPage } from "./pages/DatePickerPage";
import { DialogPage } from "./pages/DialogPage";
import { DrawerPage } from "./pages/DrawerPage";
import { DropdownMenuPage } from "./pages/DropdownMenuPage";
import { FormPage } from "./pages/FormPage";
import { HoverCardPage } from "./pages/HoverCardPage";
import { InputPage } from "./pages/InputPage";
import { InputOTPPage } from "./pages/InputOTPPage";
import { LabelPage } from "./pages/LabelPage";
import { MenubarPage } from "./pages/MenubarPage";
import { NavigationMenuPage } from "./pages/NavigationMenuPage";
import { PaginationPage } from "./pages/PaginationPage";
import { PopoverPage } from "./pages/PopoverPage";
import { RadioGroupPage } from "./pages/RadioGroupPage";
import { ResizablePage } from "./pages/ResizablePage";
import { ScrollAreaPage } from "./pages/ScrollAreaPage";
import { SelectPage } from "./pages/SelectPage";
import { SeparatorPage } from "./pages/SeparatorPage";
import { SheetPage } from "./pages/SheetPage";
import { SidebarPage } from "./pages/SidebarPage";
import { SkeletonPage } from "./pages/SkeletonPage";
import { SliderPage } from "./pages/SliderPage";
import { SonnerPage } from "./pages/SonnerPage";
import { SwitchPage } from "./pages/SwitchPage";
import { TablePage } from "./pages/TablePage";
import { TabsPage } from "./pages/TabsPage";
import { TextareaPage } from "./pages/TextareaPage";
import { ToastPage } from "./pages/ToastPage";
import { TogglePage } from "./pages/TogglePage";
import { ToggleGroupPage } from "./pages/ToggleGroupPage";
import { TooltipPage } from "./pages/TooltipPage";
import { TypographyPage } from "./pages/TypographyPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ShowAllComponents />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/alert" element={<AlertPage />} />
            <Route path="/alert-dialog" element={<AlertDialogPage />} />
            <Route path="/aspect-ratio" element={<AspectRatioPage />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="/badge" element={<BadgePage />} />
            <Route path="/breadcrumb" element={<BreadcrumbPages />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/checkbox" element={<CheckboxPage />} />
            <Route path="/collapsible" element={<CollapsiblePage />} />
            <Route path="/combobox" element={<ComboboxPage />} />
            <Route path="/command" element={<CommandPage />} />
            <Route path="/context-menu" element={<ContextMenuPage />} />
            <Route path="/data-table" element={<DataTablePage />} />
            <Route path="/data-table-pagination" element={<DataTablePaginationPage />} />
            <Route path="/data-table-toolbar" element={<DataTableToolbarPage />} />
            <Route path="/date-picker" element={<DatePickerPage />} />
            <Route path="/dialog" element={<DialogPage />} />
            <Route path="/drawer" element={<DrawerPage />} />
            <Route path="/dropdown-menu" element={<DropdownMenuPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/hover-card" element={<HoverCardPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/input-otp" element={<InputOTPPage />} />
            <Route path="/label" element={<LabelPage />} />
            <Route path="/menubar" element={<MenubarPage />} />
            <Route path="/navigation-menu" element={<NavigationMenuPage />} />
            <Route path="/pagination" element={<PaginationPage />} />
            <Route path="/popover" element={<PopoverPage />} />
            <Route path="/radio-group" element={<RadioGroupPage />} />
            <Route path="/resizable" element={<ResizablePage />} />
            <Route path="/scroll-area" element={<ScrollAreaPage />} />
            <Route path="/select" element={<SelectPage />} />
            <Route path="/separator" element={<SeparatorPage />} />
            <Route path="/sheet" element={<SheetPage />} />
            <Route path="/sidebar" element={<SidebarPage />} />
            <Route path="/skeleton" element={<SkeletonPage />} />
            <Route path="/slider" element={<SliderPage />} />
            <Route path="/sonner" element={<SonnerPage />} />
            <Route path="/switch" element={<SwitchPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/textarea" element={<TextareaPage />} />
            <Route path="/toast" element={<ToastPage />} />
            <Route path="/toggle" element={<TogglePage />} />
            <Route path="/toggle-group" element={<ToggleGroupPage />} />
            <Route path="/tooltip" element={<TooltipPage />} />
            <Route path="/typography" element={<TypographyPage />} />

            {/* Add more routes for other components */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
