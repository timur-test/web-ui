<template>
  <div class="projects">
    <v-container>
      <div class="projects__inner">
        <v-heading :level="3">
          Мои проекты
        </v-heading>
        <ul class="projects__list">
          <li
            v-for="project in projects"
            :key="project.id"
          >
            <projects-item
              :project-data="project"
              @delete-project="deleteProjectHandler"
            />
          </li>
          <li v-if="aboveLimit">
            <projects-more />
          </li>
          <li v-else>
            <button
              type="button"
              class="projects__add"
              @click="addProject"
            />
          </li>
        </ul>
      </div>
    </v-container>
  </div>
</template>

<script>
import ProjectsItem from './components/ProjectsItem';
import ProjectsMore from './components/ProjectsMore';

export default {
  components: {
    ProjectsItem,
    ProjectsMore,
  },
  meta: {
    auth: true,
  },
  computed: {
    aboveLimit() {
      return this.profile?.subscription_status === 'free' && this.projects?.length > 2;
    },
    projects() {
      return this.$store.getters['projects/projectsList'];
    },
    profile() {
      return this.$store.getters['user/getProfile'];
    },
  },
  async mounted() {
    await this.$store.dispatch('projects/fetchProjects');
  },
  methods: {
    async addProject() {
      let lastProjectId = '';
      if (this.projects.length) {
        const lasProject = this.projects[this.projects.length - 1];
        lastProjectId = lasProject.id;
      }
      await this.$store.dispatch('projects/addProject', { name: `Новый проект ${lastProjectId + 1}` });
    },
    async deleteProjectHandler(id) {
      await this.$store.dispatch('projects/deleteProject', id);
    },
  },
};
</script>

<style lang="scss" src="./Projects.scss">

</style>
