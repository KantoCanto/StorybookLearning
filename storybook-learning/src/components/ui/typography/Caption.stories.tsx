import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Caption } from './Caption';

const meta = {
  title: 'Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
  args: {
    children: 'Label / metadata / supporting copy',
  },
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
