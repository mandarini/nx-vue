import type { Meta, StoryObj } from '@storybook/vue3';
import other2 from './other2.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof other2> = {
  component: other2,
  title: 'other2',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to other2!/gi)).toBeTruthy();
  },
};
