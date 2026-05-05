import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Heading } from './Heading';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    level: 2,
    children: 'Section heading',
  },
  argTypes: {
    level: {
      control: 'inline-radio',
      options: [1, 2, 3],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllLevels: Story = {
  render: () => (
    <div className='space-y-4'>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
    </div>
  ),
};
