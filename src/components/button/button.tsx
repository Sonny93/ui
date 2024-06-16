import { PropsWithChildren } from 'react';

export default function Button({
  test = 'oui',
  children,
}: { test?: string } & PropsWithChildren) {
  return (
    <button>
      {children} {test && test}
    </button>
  );
}
