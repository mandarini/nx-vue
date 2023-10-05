import { mount } from '@vue/test-utils';
import MyLib from './my-lib.vue';

describe('MyLib', () => {
  it('renders properly', () => {
    const wrapper = mount(MyLib, {});
    expect(wrapper.text()).toContain('Welcome to MyLib');
  });
});
