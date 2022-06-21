import { shallowMount } from '@vue/test-utils';
import Header from '@/components/AppHeader';

describe('Header', () => {
  const header = shallowMount(Header, {
    stubs: ['v-link', 'v-container', 'nuxt-link'],
  });

  it('отображает корректную разметку', () => {
    expect(header.html()).toContain('<div class="header__logo"> xmindock </div>');
  });
});
