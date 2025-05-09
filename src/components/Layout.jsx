import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

const components = [
  { name: 'Accordion', path: '/accordion' },
  { name: 'Alert', path: '/alert' },
  { name: 'Alert Dialog', path: '/alert-dialog' },
  { name: 'Aspect Ratio', path: '/aspect-ratio' },
  { name: 'Avatar', path: '/avatar' },
  { name: 'Badge', path: '/badge' },
  { name: 'Breadcrumb', path: '/breadcrumb' },
  { name: 'Button', path: '/button' },
  { name: 'Calendar', path: '/calendar' },
  { name: 'Card', path: '/card' },
  { name: 'Chart', path: '/chart' },
  { name: 'Checkbox', path: '/checkbox' },
  { name: 'Collapsible', path: '/collapsible' },
  { name: 'Combobox', path: '/combobox' },
  { name: 'Command', path: '/command' },
  { name: 'Context Menu', path: '/context-menu' },
  { name: 'Data Table', path: '/data-table' },
  { name: 'Data Table Pagination', path: '/data-table-pagination' },
  { name: 'Data Table Toolbar', path: '/data-table-toolbar' },
  { name: 'Date Picker', path: '/date-picker' },
  { name: 'Dialog', path: '/dialog' },
  { name: 'Drawer', path: '/drawer' },
  { name: 'Dropdown Menu', path: '/dropdown-menu' },
  { name: 'Form', path: '/form' },
  { name: 'Hover Card', path: '/hover-card' },
  { name: 'Input', path: '/input' },
  { name: 'Input OTP', path: '/input-otp' },
  { name: 'Label', path: '/label' },
  { name: 'Menubar', path: '/menubar' },
  { name: 'Navigation Menu', path: '/navigation-menu' },
  { name: 'Pagination', path: '/pagination' },
  { name: 'Popover', path: '/popover' },
  { name: 'Radio Group', path: '/radio-group' },
  { name: 'Resizable', path: '/resizable' },
  { name: 'Scroll Area', path: '/scroll-area' },
  { name: 'Select', path: '/select' },
  { name: 'Separator', path: '/separator' },
  { name: 'Sheet', path: '/sheet' },
  { name: 'Sidebar', path: '/sidebar' },
  { name: 'Skeleton', path: '/skeleton' },
  { name: 'Slider', path: '/slider' },
  { name: 'Sonner', path: '/sonner' },
  { name: 'Switch', path: '/switch' },
  { name: 'Table', path: '/table' },
  { name: 'Tabs', path: '/tabs' },
  { name: 'Textarea', path: '/textarea' },
  { name: 'Toast', path: '/toast' },
  { name: 'Toggle', path: '/toggle' },
  { name: 'Toggle Group', path: '/toggle-group' },
  { name: 'Tooltip', path: '/tooltip' },
  { name: 'Typography', path: '/typography' }
];

export function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [selectedComponent, setSelectedComponent] = useState(
    components.find(comp => comp.path === location.pathname)?.name || 'Button'
  );

  const currentIndex = components.findIndex(comp => comp.path === location.pathname);
  
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
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-30">
        <div className="h-full flex items-center justify-between px-6">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">AI Chatter Components</h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="fixed left-0 top-16 w-64 h-[calc(100vh-8rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-20">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Components
          </h2>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <nav className="space-y-1 pr-4">
              {components.map((component) => (
                <Link
                  key={component.path}
                  to={component.path}
                  className={`block px-4 py-2 rounded-md text-sm ${
                    location.pathname === component.path
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedComponent(component.name)}
                >
                  {component.name}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64 pt-16 flex-1">
        <div className="max-w-4xl mx-auto p-6 min-h-[calc(100vh-8rem)]">
          {/* Navigation Buttons */}
          <div className="flex justify-between mb-6">
            <Button
              variant="outline"
              onClick={navigateToPrevious}
              disabled={currentIndex <= 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={navigateToNext}
              disabled={currentIndex >= components.length - 1}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-30">
        <div className="h-full flex items-center justify-between px-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All rights reserved by Aakash Chhoker
          </p>
          {/* <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div> */}
        </div>
      </footer>
    </div>
  );
} 