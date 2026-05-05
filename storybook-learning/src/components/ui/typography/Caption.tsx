import type { ElementType, ReactNode } from 'react';
import { Typography } from './Typography';

type CaptionProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  as?: ElementType;
};

export function Caption(props: CaptionProps) {
  return (
    <Typography
      {...props}
      defaultTag='span'
      textClass='text-caption'
    />
  );
}
