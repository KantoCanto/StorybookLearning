import type { ElementType, ReactNode } from 'react';
import { Typography } from './Typography';

type ParagraphProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  as?: ElementType;
};

export function Paragraph(props: ParagraphProps) {
  return (
    <Typography
      {...props}
      defaultTag='p'
      textClass='text-paragraph'
    />
  );
}
