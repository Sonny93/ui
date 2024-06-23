import { useTheme } from '@emotion/react';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import Button, { ButtonProps } from '../button';

export default function Example(
  props: ButtonProps &
    PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { colors } = useTheme();
  return (
    <div
      style={{
        backgroundColor: colors.background,
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button {...props} />
    </div>
  );
}
