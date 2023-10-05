import type { Meta, StoryObj } from '@storybook/vue3';
import myLib from './my-lib.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof myLib> = {
  component: myLib,
  title: 'myLib',
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
    await expect(canvas.getByText(/Welcome to myLib!/gi)).toBeTruthy();
  },
};
