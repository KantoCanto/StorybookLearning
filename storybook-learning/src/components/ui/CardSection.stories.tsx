import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CardSection from './CardSection';

const meta = {
  title: 'Sections/CardSection',
  component: CardSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CardSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
