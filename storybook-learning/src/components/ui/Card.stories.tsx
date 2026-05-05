import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LineChart } from 'lucide-react';
import Card from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    icon: (
      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lightGreen)] text-[var(--darkGreen)]'>
        <LineChart className='h-6 w-6' />
      </div>
    ),
    title: 'Consistent Styling',
    content:
      'Reuse shared typography and color tokens so each section feels connected to the same system.',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
