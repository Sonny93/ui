import type { Meta, StoryObj } from '@storybook/react';
import ExampleModal from '~/components/modal/__docs__/example';
import Modal from '~/components/modal/modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: ExampleModal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Title enabled',
  },
};

export const WithoutTitle: Story = {};
