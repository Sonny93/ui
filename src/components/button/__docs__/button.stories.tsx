import type { Meta, StoryObj } from '@storybook/react';
import ThemeContextProvider from '~/contexts/ThemeContext';
import Example from './example';

const meta: Meta<typeof Example> = {
  title: 'Button',
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

export const Primary: Story = {
  args: {
    children: 'haha',
    onClick: () => console.log('ze Button'),
  },
};
export const Danger: Story = {
  args: {
    children: 'hihi',
    danger: true,
    onClick: () => console.log('la Button'),
  },
};
