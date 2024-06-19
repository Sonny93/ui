import { Theme } from '@emotion/react';
import { rgba } from '~/lib/colors';
import {
  darkBlue,
  darkestBlue,
  lightBlue,
  lightRed,
  lightestBlue,
} from '~/styles/common_colors';

export const darkThemeColors: Theme['colors'] = {
  font: '#f0eef6',
  background: '#222831',
  primary: '#4fadfc',
  secondary: '#323a47',

  black: '#333333',
  white: '#ffffff',

  lightGrey: '#323a47',
  grey: '#aaaaaa',

  lightestBlue,
  lightBlue,
  blue: '#4fadfc',
  darkBlue,
  darkestBlue,

  green: '#09b909',

  lightRed,

  yellow: '#ffc107',

  boxShadow: `0 0 1em 0 ${rgba('#111', 0.4)}`,
};
