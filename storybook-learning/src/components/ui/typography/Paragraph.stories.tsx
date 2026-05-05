import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Paragraph } from './Paragraph';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  args: {
    children:
      'Area provides real insights without the data overload, helping teams evaluate layout and content in isolation.',
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
