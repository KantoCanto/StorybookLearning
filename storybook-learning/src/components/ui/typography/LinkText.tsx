import type { ElementType, ReactNode } from 'react';
import { Typography } from './Typography';

type LinkTextProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  as?: ElementType;
};

export function LinkText(props: LinkTextProps) {
  return (
    <Typography
      {...props}
      defaultTag='a'
      textClass='text-link'
    />
  );
}
