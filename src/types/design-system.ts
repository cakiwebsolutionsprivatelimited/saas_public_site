export type Align = 'left' | 'center';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: Align;
  className?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
