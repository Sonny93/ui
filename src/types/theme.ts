import { Borders } from '~/styles/border';
import { FontSizes } from '~/styles/font_size';
import { Medias } from '~/styles/media_queries';
import { lightThemeColors } from '~/styles/themes/light_theme';
import { Transitions } from '~/styles/transition';

export type Colors = typeof lightThemeColors;

export interface UITheme {
  colors: Colors;
  borders: Borders;
  medias: Medias;
  transitions: Transitions;
  fontSizes: FontSizes;
}
