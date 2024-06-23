import { generateFadedColors, rgba } from '~/lib/colors';
import { Colors } from '~/types';

export const darkThemeColors: Colors = {
  font: '#f0eef6',
  background: '#222831',
  secondary: '#323a47',

  black: '#333333',
  white: '#ffffff',

  grey: generateFadedColors({
    color: '#aaaaaa',
  }),

  blue: generateFadedColors({
    color: '#4fadfc',
  }),

  green: generateFadedColors({
    color: '#09b909',
  }),

  red: generateFadedColors({ color: 'red' }),

  yellow: generateFadedColors({ color: '#ffc107' }),

  boxShadow: `0 0 1em 0 ${rgba('#111', 0.4)}`,
};
