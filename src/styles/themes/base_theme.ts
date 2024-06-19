import { Theme } from '@emotion/react';
import borders from '~/styles/border';
import { fontSizes } from '~/styles/font_size';
import { medias } from '~/styles/media_queries';
import { transitions } from '~/styles/transition';

export const baseTheme: Omit<Theme, 'colors'> = {
  borders,
  medias,
  transitions,
  fontSizes,
};
