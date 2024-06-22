import type { Meta, StoryObj } from '@storybook/react';
import { ThemeContextProvider } from '~/contexts/theme_context';
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
    children: 'Primary',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    danger: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const DangerDisabled: Story = {
  args: {
    children: 'Danger Disabled',
    disabled: true,
    danger: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    secondary: true,
  },
};

export const SecondaryDanger: Story = {
  args: {
    children: 'Secondary Danger',
    secondary: true,
    danger: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Disabled',
    disabled: true,
    secondary: true,
  },
};

export const SecondaryDisabledDanger: Story = {
  args: {
    children: 'Secondary Disabled Danger',
    disabled: true,
    secondary: true,
    danger: true,
  },
};
