'use client';

import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { NavigationItem } from '@/types/control';

interface LayoutProps {
  navigation: NavigationItem[];
  children: ReactNode;
}

export function Layout({ navigation, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navigation items={navigation} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-slate-800 text-slate-400 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          WebWaka Suite SVM UI
        </div>
      </footer>
    </div>
  );
}
