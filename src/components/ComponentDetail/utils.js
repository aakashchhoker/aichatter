// Function to get the active file path based on component name
export const getActiveFilePath = (componentName) => {
  const componentMap = {
    'accordion': 'src/components/ui/accordion.jsx',
    'alert': 'src/components/ui/alert.jsx',
    'alert-dialog': 'src/components/ui/alert-dialog.jsx',
    'aspect-ratio': 'src/components/ui/aspect-ratio.jsx',
    'avatar': 'src/components/ui/avatar.jsx',
    'badge': 'src/components/ui/badge.jsx',
    'button': 'src/components/ui/button.jsx',
    'calendar': 'src/components/ui/calendar.jsx',
    'card': 'src/components/ui/card.jsx',
    'checkbox': 'src/components/ui/checkbox.jsx',
    'collapsible': 'src/components/ui/collapsible.jsx',
    'command': 'src/components/ui/command.jsx',
    'context-menu': 'src/components/ui/context-menu.jsx',
    'data-table': 'src/components/ui/data-table.jsx',
    'dialog': 'src/components/ui/dialog.jsx',
    'dropdown-menu': 'src/components/ui/dropdown-menu.jsx',
    'form': 'src/components/ui/form.jsx',
    'hover-card': 'src/components/ui/hover-card.jsx',
    'input': 'src/components/ui/input.jsx',
    'input-otp': 'src/components/ui/input-otp.jsx',
    'label': 'src/components/ui/label.jsx',
    'menubar': 'src/components/ui/menubar.jsx',
    'navigation-menu': 'src/components/ui/navigation-menu.jsx',
    'popover': 'src/components/ui/popover.jsx',
    'radio-group': 'src/components/ui/radio-group.jsx',
    'resizable': 'src/components/ui/resizable.jsx',
    'scroll-area': 'src/components/ui/scroll-area.jsx',
    'select': 'src/components/ui/select.jsx',
    'separator': 'src/components/ui/separator.jsx',
    'sheet': 'src/components/ui/sheet.jsx',
    'skeleton': 'src/components/ui/skeleton.jsx',
    'slider': 'src/components/ui/slider.jsx',
    'switch': 'src/components/ui/switch.jsx',
    'table': 'src/components/ui/table.jsx',
    'tabs': 'src/components/ui/tabs.jsx',
    'textarea': 'src/components/ui/textarea.jsx',
    'toast': 'src/components/ui/toast.jsx',
    'toggle': 'src/components/ui/toggle.jsx',
    'toggle-group': 'src/components/ui/toggle-group.jsx',
    'tooltip': 'src/components/ui/tooltip.jsx',
  };
  return componentMap[componentName.toLowerCase()] || null;
};

// Function to transform imports in the code
export const transformImports = (code) => {
  return code.replace(/@your-ui-library\/([^'"]+)/g, '@/components/ui/$1');
}; 