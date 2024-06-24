import type { Meta, StoryObj } from '@storybook/react';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Dropdown',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Dropdown: Story = {
  args: {
    label: 'Open dropdown',
  },
};
