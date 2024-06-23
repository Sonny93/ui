import '@emotion/react';
import { UITheme } from './theme';

declare module '@emotion/react' {
  export interface Theme extends UITheme {}
}
