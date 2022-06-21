<template>
  <div class="projects-item" @click="goToProject">
    <div class="projects-item__bottom">
      <div class="projects-item__name">
        {{ projectData.name }}
      </div>
      <div class="projects-item__icons">
        <button type="button" @click.stop="deleteProject">
          <delete-icon />
        </button>
        <button type="button" @click.stop="shareProject">
          <share-icon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ShareIcon from '@svg/share.svg';
import DeleteIcon from '@svg/delete.svg';

export default {
  name: 'ProjectsItem',
  components: {
    ShareIcon,
    DeleteIcon,
  },
  props: {
    projectData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteProject() {
      this.$emit('delete-project', this.projectData.id);
    },
    shareProject() {
      this.$emit('share-project', this.projectData.id);
    },
    goToProject() {
      this.$router.push(`/projects/${this.projectData.id}`);
    },
  },
};
</script>

<style lang="scss" src="./ProjectsItem.scss">
</style>
