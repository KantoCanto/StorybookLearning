import { Slot } from '@radix-ui/react-slot';
import type { ReactNode } from 'react';

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};

const headingMap = {
  1: {
    tag: 'h1',
    className: 'text-h1',
  },
  2: {
    tag: 'h2',
    className: 'text-h2',
  },
  3: {
    tag: 'h3',
    className: 'text-h3',
  },
} as const;

export function Heading({
  level,
  children,
  className = '',
  asChild = false,
}: HeadingProps) {
  const config = headingMap[level];
  const Comp = asChild ? Slot : config.tag;

  return (
    <Comp className={[config.className, className].filter(Boolean).join(' ')}>
      {children}
    </Comp>
  );
}
