<template>
  <footer class="footer">
    MADE IN UPROCK
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss">
  @import '@approck/styles/settings/_colors.scss';

  .footer {
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 16px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.02em;
    color: $gray-color-6;
  }
</style>
