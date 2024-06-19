import { ScreenType } from '~/types/theme_common';

export type Medias = {
  [key in ScreenType]: string;
};

export const medias: Medias = {
  mobile: '768px',
  tablet: '1024px',
  small_desktop: '1280px',
  medium_desktop: '1440px',
  large_desktop: '1920px',
  xlarge_desktop: '2560px',
};
