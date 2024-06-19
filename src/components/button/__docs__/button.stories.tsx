import type { Meta, StoryObj } from '@storybook/react';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    test: 'yes',
    children: 'haha',
    onClick: () => console.log('ze Button'),
  },
};
export const Secondary: Story = {
  args: {
    test: 'no',
    children: 'hihi',
    onClick: () => console.log('la Button'),
  },
};
