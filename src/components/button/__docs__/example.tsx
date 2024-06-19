import { FC } from 'react';
import Button, { ButtonProps } from '../button';

const Example: FC<ButtonProps> = ({ test, children, ...props }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    <Button test={test} {...props}>
      {children}
    </Button>
  </div>
);

export default Example;
