import '@emotion/react';
import { lightThemeColors } from '~/styles/themes/light_theme';
import { UITheme } from './theme';

export type Colors = typeof lightThemeColors;

declare module '@emotion/react' {
  export interface Theme extends UITheme {}
}
