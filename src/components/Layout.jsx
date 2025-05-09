import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

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
  const [selectedComponent, setSelectedComponent] = useState(
    components.find(comp => comp.path === location.pathname)?.name || 'Button'
  );

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Left Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Components
          </h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
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
    </div>
  );
} 