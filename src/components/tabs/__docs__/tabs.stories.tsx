import type { Meta, StoryObj } from '@storybook/react';
import { IoLanguageOutline } from 'react-icons/io5';
import Tabs from '~/components/tabs/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      {
        title: 'Tab 1',
        content: 'My super tab 1',
        icon: IoLanguageOutline,
      },
      {
        title: 'Tab with html content',
        content: <p>yes paragraph</p>,
      },
      {
        title: 'Tab 3',
        content: <p>yes</p>,
      },
      {
        title: 'Tab 4',
        content: <p>no</p>,
      },
      {
        title: 'Tab 5',
        content: <p>yesno</p>,
      },
    ],
  },
};
