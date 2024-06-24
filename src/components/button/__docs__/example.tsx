import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import Button, { ButtonProps } from '../button';

const Example = (
  props: ButtonProps &
    PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <div
    style={{
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

export default Example;
