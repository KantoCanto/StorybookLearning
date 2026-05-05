import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LinkText } from './LinkText';

const meta = {
  title: 'Typography/LinkText',
  component: LinkText,
  tags: ['autodocs'],
  args: {
    children: 'Read the guide',
  },
} satisfies Meta<typeof LinkText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
