import hexRgb from 'hex-rgb';
import tinycolor from 'tinycolor2';
import { FadedColor } from '~/types';

export const rgba = (hex: string, alpha: number) => {
  const rgb = hexRgb(hex, { format: 'array' }).slice(0, -1).join(',');
  return `rgba(${rgb},${alpha})`;
};

interface FadedColorGenerator {
  color: string;
  fadeStep?: number;
}
export function generateFadedColors(props: FadedColorGenerator): FadedColor {
  const baseColor = tinycolor(props.color);
  if (!baseColor.isValid()) {
    throw new Error('Invalid color provided');
  }

  return {
    lightest: generateColorHelper({
      ...props,
      multiplicator: 2,
      type: 'lighten',
    }),
    light: generateColorHelper({
      ...props,
      multiplicator: 1,
      type: 'lighten',
    }),
    default: baseColor.toString(),
    dark: generateColorHelper({
      ...props,
      multiplicator: 1,
      type: 'darken',
    }),
    darkest: generateColorHelper({
      ...props,
      multiplicator: 2,
      type: 'darken',
    }),
  };
}

function generateColorHelper({
  color,
  fadeStep = 15,
  multiplicator,
  type,
}: FadedColorGenerator & {
  multiplicator: number;
  type: 'darken' | 'lighten';
}) {
  return tinycolor(color)
    [type](fadeStep * multiplicator)
    .toString();
}
