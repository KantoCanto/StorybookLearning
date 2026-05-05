import type { ElementType, ReactNode } from 'react';
import { Typography } from './Typography';

type DisplayProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  as?: ElementType;
};

export function Display(props: DisplayProps) {
  return (
    <Typography
      {...props}
      defaultTag='h1'
      textClass='text-display'
    />
  );
}
