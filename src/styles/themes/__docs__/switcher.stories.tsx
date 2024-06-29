import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '~/components';
import { useThemeSwitcher } from '~/hooks';
import { ThemeContextProvider } from '~/contexts';

const meta: Meta = {
  title: 'Theme Switcher',
  decorators: (Story) => (
    <ThemeContextProvider>
      <Story />
    </ThemeContextProvider>
  ),
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isDarkTheme, toggleDarkTheme } = useThemeSwitcher();
    return (
      <Checkbox
        label="Theme switcher"
        name="theme-switcher"
        onChange={(_, checked) => toggleDarkTheme(checked)}
        checked={isDarkTheme}
      />
    );
  },
};

export default meta;
type Story = StoryObj;

export const ThemeSwitcher: Story = {};
