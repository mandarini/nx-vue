import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Btn2 from './btn2.vue';

describe('Btn2', () => {
  it('renders properly', () => {
    const wrapper = mount(Btn2, {});
    expect(wrapper.text()).toContain('Welcome to Btn2');
  });
});
