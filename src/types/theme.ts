import { Borders } from '~/styles/border';
import { FontSizes } from '~/styles/font_size';
import { Medias } from '~/styles/media_queries';
import { Transitions } from '~/styles/transition';

export type FadedColor = {
  lightest: string;
  light: string;
  default: string;
  dark: string;
  darkest: string;
};

export type Colors = {
  font: string;
  background: string;
  secondary: string;

  black: string;
  white: string;

  grey: FadedColor;
  blue: FadedColor;
  green: FadedColor;
  red: FadedColor;
  yellow: FadedColor;

  boxShadow: string;
};

export interface UITheme {
  colors: Colors;
  borders: Borders;
  medias: Medias;
  transitions: Transitions;
  fontSizes: FontSizes;
}
