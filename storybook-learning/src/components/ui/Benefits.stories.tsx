import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Benefits from './Benefits';

const meta = {
  title: 'Sections/Benefits',
  component: Benefits,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Benefits>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
