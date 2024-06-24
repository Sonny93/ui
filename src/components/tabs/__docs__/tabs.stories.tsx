import type { Meta, StoryObj } from '@storybook/react';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Tabs',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Tabs: Story = {};
