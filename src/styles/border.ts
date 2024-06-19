import { SizeType } from '~/types/theme_common';

export type Borders = {
  radius: {
    [key in SizeType]: string;
  };
};

const borders: Borders = {
  radius: {
    xs: '1px',
    s: '2px',
    m: '3px',
    l: '4px',
    xl: '5px',
  },
};

export default borders;
