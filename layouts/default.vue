<template>
  <div class="default-layout">
    <app-header />
    <main class="default-layout__content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import fetchUserMixin from '@/mixins/fetchUserMixin';

export default {
  mixins: [fetchUserMixin],
};
</script>

<style lang="scss">
  .default-layout {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>
