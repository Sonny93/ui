import { rgba } from '~/lib/colors';
import {
  darkBlue,
  darkestBlue,
  lightBlue,
  lightRed,
  lightestBlue,
  primaryColor,
} from '~/styles/common_colors';

export const lightThemeColors = {
  font: '#333',
  background: '#f0eef6',
  primary: primaryColor,
  secondary: '#fff',

  black: '#333',
  white: '#ffffff',

  lightGrey: '#dadce0',
  grey: '#777777',

  lightestBlue,
  lightBlue,
  blue: primaryColor,
  darkBlue,
  darkestBlue,

  green: 'green',

  lightRed,

  yellow: '#FF8A08',

  boxShadow: `0 0 1em 0 ${rgba('#aaa', 0.4)}`,
};
