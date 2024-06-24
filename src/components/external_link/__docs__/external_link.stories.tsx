import type { Meta, StoryObj } from '@storybook/react';
import ExternalLink from '~/components/external_link/external_link';

const meta: Meta<typeof ExternalLink> = {
  title: 'ExternalLink',
  component: ExternalLink,
};

export default meta;
type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
  args: {
    href: 'https://github.com/minimalstuff/ui',
    children: 'Open external link',
  },
};
