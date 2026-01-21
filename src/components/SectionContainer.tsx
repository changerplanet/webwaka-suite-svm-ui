'use client';

import { SectionConfig } from '@/types/control';
import { ReactNode } from 'react';

interface SectionContainerProps {
  section: SectionConfig;
  children?: ReactNode;
}

export function SectionContainer({ section, children }: SectionContainerProps) {
  if (!section.visible) {
    return null;
  }

  return (
    <section 
      id={section.id}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <h2 className="text-xl font-semibold text-slate-800 mb-4">
        {section.label}
      </h2>
      <div className="text-slate-600">
        {children}
      </div>
    </section>
  );
}
