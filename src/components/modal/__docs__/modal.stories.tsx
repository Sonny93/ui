import type { Meta, StoryObj } from '@storybook/react';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Modal',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Title: Story = {
  args: {
    title: 'Title enabled',
  },
};

export const WithoutTitle: Story = {};
