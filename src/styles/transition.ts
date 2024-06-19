import { SpeedType } from '~/types/theme_common';

export type Transitions = {
  delay: {
    [key in SpeedType]: string;
  };
};

export const transitions: Transitions = {
  delay: {
    fast: '0.075s',
    normal: '0.15s',
    slow: '0.3s',
  },
};
