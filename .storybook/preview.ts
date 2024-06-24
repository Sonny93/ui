import type { Preview } from '@storybook/react';

import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { StyleReset } from '../src/contexts/theme_context';
import { baseTheme } from '../src/styles/themes/base_theme';
import { darkThemeColors } from '../src/styles/themes/dark_theme';
import { lightThemeColors } from '../src/styles/themes/light_theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: { ...baseTheme, colors: lightThemeColors },
        dark: { ...baseTheme, colors: darkThemeColors },
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: StyleReset,
    }),
  ],
};

export default preview;
