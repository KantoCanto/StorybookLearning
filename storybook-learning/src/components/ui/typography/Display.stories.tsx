import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Display } from './Display';

const meta = {
  title: 'Typography/Display',
  component: Display,
  tags: ['autodocs'],
  args: {
    children: 'Designed for bold hero copy',
  },
} satisfies Meta<typeof Display>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
