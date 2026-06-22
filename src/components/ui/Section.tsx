import React from 'react';
import type { SectionProps } from '../../types/design-system';

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
