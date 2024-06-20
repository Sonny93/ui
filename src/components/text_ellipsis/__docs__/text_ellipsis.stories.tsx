import type { Meta, StoryObj } from '@storybook/react';
import ThemeContextProvider from '~/contexts/ThemeContext';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Text Ellipsis',
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

export const Default: Story = {
  args: {
    children: 'Hello everyone !',
  },
};

export const MultipleLines: Story = {
  args: {
    children: 'Hello everyone, this is a multilines paragraph',
    lines: 2,
  },
};
