import type { ElementType, ReactNode } from 'react';
import { Typography } from './Typography';

type DisplayStaticProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  as?: ElementType;
};

export function DisplayStatic(props: DisplayStaticProps) {
  return (
    <Typography
      {...props}
      defaultTag='h1'
      textClass='text-display-static'
    />
  );
}
