import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import Button, { ButtonProps } from '../button';

const Example: FC<
  ButtonProps & PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => (
  <div
    style={{
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
