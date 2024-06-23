import { generateFadedColors, rgba } from '~/lib/colors';
import { Colors } from '~/types';

export const lightThemeColors: Colors = {
  font: '#333',
  background: '#f0eef6',
  secondary: '#fff',

  black: '#333',
  white: '#ffffff',

  grey: generateFadedColors({
    color: '#777777',
  }),

  blue: generateFadedColors({
    color: '#3f88c5',
  }),

  green: generateFadedColors({
    color: 'green',
  }),

  red: generateFadedColors({
    color: 'red',
  }),

  yellow: generateFadedColors({
    color: '#ffc107',
  }),

  boxShadow: `0 0 1em 0 ${rgba('#aaa', 0.4)}`,
};
