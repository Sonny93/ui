import { SizeType } from '~/types/theme_common';

export type FontSizes = {
  [key in SizeType]: string;
};

export const fontSizes: FontSizes = {
  xs: '10px',
  s: '12px',
  m: '14px',
  l: '16px',
  xl: '18px',
};
