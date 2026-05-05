import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TrustedBy from './TrustedBy';

const meta = {
  title: 'Sections/TrustedBy',
  component: TrustedBy,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TrustedBy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
