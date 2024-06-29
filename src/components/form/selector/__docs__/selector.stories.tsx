import type { Meta, StoryObj } from '@storybook/react';
import Selector from '~/components/form/selector/selector';

const meta: Meta<typeof Selector> = {
  title: 'Selector',
  component: Selector,
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {
  args: {
    label: 'Selector',
    value: 'value2',
    options: [
      {
        label: 'Value 1',
        value: 'value1',
      },
      {
        label: 'Value 2',
        value: 'value2',
      },
      {
        label: 'Value 3',
        value: 'value3',
      },
    ],
  },
};
