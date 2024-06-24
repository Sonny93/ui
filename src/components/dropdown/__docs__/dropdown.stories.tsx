import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '~/components/dropdown/dropdown';
import { DropdownItemButton } from '~/components/dropdown/dropdown_item';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: (props) => (
    <Dropdown {...props}>
      <DropdownItemButton>Item 1</DropdownItemButton>
      <DropdownItemButton>Item 2</DropdownItemButton>
      <DropdownItemButton>Item 3</DropdownItemButton>
    </Dropdown>
  ),
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: 'Open dropdown',
  },
};
