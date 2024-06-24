import type { Meta, StoryObj } from '@storybook/react';
import RoundedImage from '~/components/rounded_image/rounded_image';

const meta: Meta<typeof RoundedImage> = {
  title: 'Rounded image',
  component: RoundedImage,
};

export default meta;
type Story = StoryObj<typeof RoundedImage>;

export const RoundedImageStory: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/172921285?s=48&v=4',
    size: 24,
  },
};
