import type { Meta, StoryObj } from '@storybook/react';
import TextEllipsis from '~/components/text_ellipsis/text_ellipsis';

const meta: Meta<typeof TextEllipsis> = {
  title: 'Text Ellipsis',
  component: (props) => (
    <div style={{ width: '100px' }}>
      <TextEllipsis {...props} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof TextEllipsis>;

export const Default: Story = {
  args: {
    children: 'Hello everyone !',
  },
};

export const MultipleLines: Story = {
  args: {
    children: 'Hello everyone, this is a multilines paragraph',
    lines: 2,
  },
};
