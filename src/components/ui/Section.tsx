import React from 'react';
import type { SectionProps } from '../../types/design-system';

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-4 sm:py-6 lg:py-10 ${className}`}>
      {children}
    </section>
  );
}
