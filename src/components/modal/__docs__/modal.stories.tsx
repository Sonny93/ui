import type { Meta, StoryObj } from '@storybook/react';
import { ThemeContextProvider } from '~/contexts/theme_context';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Modal',
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

export const Title: Story = {
  args: {
    title: 'Title enabled',
  },
};

export const WithoutTitle: Story = {};
