import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '~/components/form/checkbox/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
    inline: false,
    reverse: false,
  },
};
