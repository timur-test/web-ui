<template>
  <div class="with-footer-layout">
    <app-header />
    <main class="with-footer-layout__content">
      <Nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script>
import fetchUserMixin from '@/mixins/fetchUserMixin';

export default {
  mixins: [fetchUserMixin],
};
</script>

<style lang="scss">
@import '@approck/styles/settings/_colors.scss';

  .with-footer-layout {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: $background-color-2;
  }
</style>
