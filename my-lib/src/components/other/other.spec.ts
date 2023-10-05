import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Other from './other.vue';

describe('Other', () => {
  it('renders properly', () => {
    const wrapper = mount(Other, {});
    expect(wrapper.text()).toContain('Welcome to Other');
  });
});
