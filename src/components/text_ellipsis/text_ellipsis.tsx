import styled from '@emotion/styled';

export type TextEllipsisProps = {
  lines?: number;
};

const TextEllipsis = styled.p<TextEllipsisProps>(({ lines = 1 }) => {
  if (lines > 1) {
    return {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: lines,
      WebkitBoxOrient: 'vertical',
    };
  }

  return {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };
});

export default TextEllipsis;
