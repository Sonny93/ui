import type { Meta, StoryObj } from '@storybook/react';
import { ThemeContextProvider } from '~/contexts/theme_context';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Dropdown',
  component: Example,
  decorators: [
    (Story) => (
      <ThemeContextProvider preferDarkTheme={false}>
        <Story />
      </ThemeContextProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Dropdown: Story = {
  args: {
    label: 'Open dropdown',
  },
};
