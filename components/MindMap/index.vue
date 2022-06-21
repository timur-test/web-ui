<template>
  <div class="mind-map">
    <div class="mind-map__box">
      <canvas id="mind-map-canvas" />
      <div class="mind-map__main" variant="primary">
        Нажмите Enter чтобы добавить блок
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      this.init();
    }
  },
  methods: {
    init() {
      const canvas = document.querySelector('#mind-map-canvas');
      const main = document.querySelector('.mind-map__main');
      const rect = main.getBoundingClientRect();
      const context = canvas.getContext('2d');

      context.beginPath();
    },
  },
};
</script>

<style lang="scss" src="./MindMap.scss" />
