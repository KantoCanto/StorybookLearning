import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DisplayStatic } from './DisplayStatic';

const meta = {
  title: 'Typography/DisplayStatic',
  component: DisplayStatic,
  tags: ['autodocs'],
  args: {
    children: 'Browse Everything.',
  },
} satisfies Meta<typeof DisplayStatic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
