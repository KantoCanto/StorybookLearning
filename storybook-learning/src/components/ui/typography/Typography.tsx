import { Slot } from '@radix-ui/react-slot';
import type { ElementType, ReactNode } from 'react';

type TypographyProps = {
  asChild?: boolean;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

type TypographyBaseProps = TypographyProps & {
  defaultTag: ElementType;
  textClass: string;
};

export function Typography({
  asChild = false,
  as,
  className = '',
  children,
  defaultTag,
  textClass,
}: TypographyBaseProps) {
  const Comp = asChild ? Slot : as || defaultTag;

  return (
    <Comp className={[textClass, className].filter(Boolean).join(' ')}>
      {children}
    </Comp>
  );
}
