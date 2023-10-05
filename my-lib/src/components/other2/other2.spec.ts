import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Other2 from './other2.vue';

describe('Other2', () => {
  it('renders properly', () => {
    const wrapper = mount(Other2, {});
    expect(wrapper.text()).toContain('Welcome to Other2');
  });
});
