import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import {
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
  AppWindow,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import logoImage from "../assets/logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const components = [
  { name: "Accordion", path: "/accordion" },
  { name: "Alert", path: "/alert" },
  { name: "Alert Dialog", path: "/alert-dialog" },
  { name: "Aspect Ratio", path: "/aspect-ratio" },
  { name: "Avatar", path: "/avatar" },
  { name: "Badge", path: "/badge" },
  { name: "Breadcrumb", path: "/breadcrumb" },
  { name: "Button", path: "/button" },
  { name: "Calendar", path: "/calendar" },
  { name: "Card", path: "/card" },
  { name: "Chart", path: "/chart" },
  { name: "Checkbox", path: "/checkbox" },
  { name: "Collapsible", path: "/collapsible" },
  { name: "Combobox", path: "/combobox" },
  { name: "Command", path: "/command" },
  { name: "Context Menu", path: "/context-menu" },
  { name: "Data Table", path: "/data-table" },
  { name: "Data Table Pagination", path: "/data-table-pagination" },
  { name: "Data Table Toolbar", path: "/data-table-toolbar" },
  { name: "Date Picker", path: "/date-picker" },
  { name: "Dialog", path: "/dialog" },
  { name: "Drawer", path: "/drawer" },
  { name: "Dropdown Menu", path: "/dropdown-menu" },
  { name: "Form", path: "/form" },
  { name: "Hover Card", path: "/hover-card" },
  { name: "Input", path: "/input" },
  { name: "Input OTP", path: "/input-otp" },
  { name: "Label", path: "/label" },
  { name: "Menubar", path: "/menubar" },
  { name: "Navigation Menu", path: "/navigation-menu" },
  { name: "Pagination", path: "/pagination" },
  { name: "Popover", path: "/popover" },
  { name: "Radio Group", path: "/radio-group" },
  { name: "Resizable", path: "/resizable" },
  { name: "Scroll Area", path: "/scroll-area" },
  { name: "Select", path: "/select" },
  { name: "Separator", path: "/separator" },
  { name: "Sheet", path: "/sheet" },
  { name: "Sidebar", path: "/sidebar" },
  { name: "Skeleton", path: "/skeleton" },
  { name: "Slider", path: "/slider" },
  { name: "Sonner", path: "/sonner" },
  { name: "Switch", path: "/switch" },
  { name: "Table", path: "/table" },
  { name: "Tabs", path: "/tabs" },
  { name: "Textarea", path: "/textarea" },
  { name: "Toast", path: "/toast" },
  { name: "Toggle", path: "/toggle" },
  { name: "Toggle Group", path: "/toggle-group" },
  { name: "Tooltip", path: "/tooltip" },
  { name: "Typography", path: "/typography" },
];

export function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState(
    components.find((comp) => comp.path === location.pathname)?.name || "Button"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const currentIndex = components.findIndex(
    (comp) => comp.path === location.pathname
  );

  const navigateToNext = () => {
    if (currentIndex < components.length - 1) {
      navigate(components[currentIndex + 1].path);
    }
  };

  const navigateToPrevious = () => {
    if (currentIndex > 0) {
      navigate(components[currentIndex - 1].path);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-30">
        <div className="h-full flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link to="/aichatter">
              <Avatar className="h-10 w-10 md:h-12 md:w-12 rounded-md cursor-pointer hover:opacity-80 transition-opacity">
                <AvatarImage src={logoImage} alt="UI/Ux Explainer Logo" />
                <AvatarFallback className="rounded-md">UI</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Sidebar Toggle Button (Desktop) */}
            {/* <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex h-8 w-8 md:h-10 md:w-10"
              aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              onClick={() => setIsSidebarOpen((v) => !v)}
            >
              {isSidebarOpen ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 md:h-10 md:w-10"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 md:h-5 md:w-5" />
              ) : (
                <Moon className="h-4 w-4 md:h-5 md:w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Layout: Sidebar + Content (sidebar hidden only on /aichatter) */}
      <div className="flex flex-1 pt-16">
        {/* Desktop Sidebar - hidden on /aichatter */}
        {location.pathname !== "/aichatter" && (
          <div
            className={`hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"}`}
          >
            <div className={`p-4 h-full flex flex-col ${isSidebarOpen ? "" : "items-center p-2"}`}>
              {isSidebarOpen && (
                <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  List
                </h2>
              )}
              <ScrollArea className="flex-1">
                <nav className={`space-y-1 pr-4 ${isSidebarOpen ? "" : "flex flex-col items-center"}`}>
                  {isSidebarOpen && (
                    <Accordion type="single" collapsible className="mb-1" defaultValue={location.pathname.startsWith("/icons") ? "icons" : undefined}>
                      <AccordionItem value="icons">
                        <AccordionTrigger
                          className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-sm focus:outline-none ${
                            location.pathname.startsWith("/icons")
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                              : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                          }`}
                          onClick={() => setSelectedComponent("Icons")}
                        >
                          <span>Icons</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div id="icon-category-list" className="ml-4 mt-1 space-y-1">
                            {window.iconCategoriesList &&
                              window.iconCategoriesList.map((cat) => (
                                <Link
                                  key={cat}
                                  to={`/icons?category=${encodeURIComponent(cat)}`}
                                  className={`block px-3 py-1 rounded text-xs ${
                                    new URLSearchParams(window.location.search).get("category") === cat
                                      ? "bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-200"
                                      : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                                  }`}
                                  onClick={() => setSelectedComponent("Icons")}
                                >
                                  {cat}
                                </Link>
                              ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                  {components.map((component) => (
                    <Link
                      key={component.path}
                      to={component.path}
                      className={`block ${isSidebarOpen ? "px-4 py-2 text-sm" : "px-1 py-2 text-xs text-center"} rounded-md ${
                        location.pathname === component.path
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                          : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => setSelectedComponent(component.name)}
                      title={component.name}
                    >
                      {isSidebarOpen ? component.name : component.name[0]}
                    </Link>
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </div>
        )}
        {/* Main Content */}
        <main className={`flex-1 w-full p-0 md:p-0 min-h-0 overflow-auto transition-all duration-300 ${location.pathname !== "/aichatter" ? (isSidebarOpen ? "md:ml-64" : "md:ml-16") : ""}`} style={{flexGrow: 1}}>
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed right-0 top-16 w-3/4 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 overflow-hidden z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Components
              </h2>
              <ScrollArea className="h-[calc(100vh-10rem)]">
                <nav className="space-y-1 pr-4 pb-8">
                  {components.map((component) => (
                    <Link
                      key={component.path}
                      to={component.path}
                      className={`block px-4 py-2 rounded-md text-sm ${
                        location.pathname === component.path
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                          : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => {
                        setSelectedComponent(component.name);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {component.name}
                    </Link>
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="h-12 md:h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="h-full flex items-center justify-center md:justify-between px-4 md:px-6">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            made with ❤️ by Aakash Chhoker
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
