'use client';

import { NavigationItem } from '@/types/control';

interface NavigationProps {
  items: NavigationItem[];
}

export function Navigation({ items }: NavigationProps) {
  const visibleItems = items.filter(item => item.visible);
  
  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <nav className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">WebWaka SVM</span>
          </div>
          <div className="ml-10 flex items-baseline space-x-4">
            {visibleItems.map(item => (
              <a
                key={item.id}
                href={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
