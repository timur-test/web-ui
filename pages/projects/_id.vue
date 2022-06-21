<template>
  <div class="project_detail">
    <template v-if="isCleanProject">
      <v-heading>Добро пожаловать!</v-heading>
    </template>
    <mind-map />
    <template v-if="showManual">
      <manual @close="closeManualHandler" />
    </template>
  </div>
</template>

<script>
export default {
  meta: {
    auth: true,
  },
  data() {
    return {
      isCleanProject: true,
      showManual: true,
    };
  },
  async mounted() {
    this.$store.dispatch('projects/fetchProject', this.$route.params.id);

    if (process.client) {
      document.addEventListener('keydown', e => {
        if (e.code === 'Enter') {
          this.isCleanProject = false;
        }
      });
    }
  },
  methods: {
    closeManualHandler() {
      this.showManual = false;
    },
  },
};
</script>

<style lang="scss" src="./ProjectDetail.scss" />
