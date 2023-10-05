import type { Meta, StoryObj } from '@storybook/vue3';
import btn2 from './btn2.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof btn2> = {
  component: btn2,
  title: 'btn2',
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
    await expect(canvas.getByText(/Welcome to btn2!/gi)).toBeTruthy();
  },
};
