import styled from '@emotion/styled';
import { rgba } from '~/lib/colors';

export interface RoundedImageProps {
  size?: number;
}

const RoundedImage = styled.img<RoundedImageProps>(({ theme, size = 48 }) => {
  const transparentBlack = rgba(theme.colors.black, 0.1);
  return {
    height: `${size}px`,
    width: `${size}px`,
    borderRadius: '50%',

    '&:hover': {
      boxShadow: `0 1px 3px 0 ${transparentBlack}, 0 1px 2px -1px ${transparentBlack}`,
    },
  };
});

export default RoundedImage;
