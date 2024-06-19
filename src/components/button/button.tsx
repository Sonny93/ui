import emotionStyled from '@emotion/styled';
import { ButtonHTMLAttributes, PropsWithChildren, useEffect } from 'react';

export type ButtonProps = { test?: string } & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = emotionStyled.button({
  color: 'red',
  backgroundColor: 'white',
  border: '1px solid red',
});

export default function Button({
  test = 'oui',
  children,
  ...props
}: { test?: string } & PropsWithChildren) {
  useEffect(() => {
    console.log(test);
  }, [test]);
  return (
    <StyledButton {...props}>
      {children} {test && test}
    </StyledButton>
  );
}
