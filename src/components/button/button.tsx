import emotionStyled from '@emotion/styled';
import { PropsWithChildren, useEffect } from 'react';

const StyledButton = emotionStyled.button({
  color: 'red',
  backgroundColor: 'white',
  border: '1px solid red',
});

export default function Button({
  test = 'oui',
  children,
}: { test?: string } & PropsWithChildren) {
  useEffect(() => {
    console.log('oui');
  }, []);
  return (
    <StyledButton>
      {children} {test && test}
    </StyledButton>
  );
}
