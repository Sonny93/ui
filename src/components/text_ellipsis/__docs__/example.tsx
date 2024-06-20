import { ClassAttributes, FC, PropsWithChildren } from 'react';
import TextEllipsis, {
  TextEllipsisProps,
} from '~/components/text_ellipsis/text_ellipsis';

const Example: FC<
  TextEllipsisProps & PropsWithChildren & ClassAttributes<HTMLParagraphElement>
> = (props) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100px',
    }}
  >
    <TextEllipsis {...props} />
  </div>
);

export default Example;
