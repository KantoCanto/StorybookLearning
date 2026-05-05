import type { ReactNode } from 'react';
import { Heading } from './typography/Heading';
import { Paragraph } from './typography/Paragraph';

type CardProps = {
  icon: ReactNode;
  title: string;
  content: string;
};

const Card = ({ icon, title, content }: CardProps) => {
  return (
    <div className='flex flex-col items-start gap-4 rounded-3xl bg-[var(--white)] p-6'>
      <div className='flex items-start justify-start'>{icon}</div>

      <Heading
        level={3}
        className='text-left'
      >
        {title}
      </Heading>

      <Paragraph className='text-left text-[var(--darkGray)]'>
        {content}
      </Paragraph>
    </div>
  );
};

export default Card;
