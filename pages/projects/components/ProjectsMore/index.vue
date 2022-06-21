<template>
  <div class="projects-more">
    <v-heading :level="3">
      Создать больше проектов
    </v-heading>
    <v-text tag="p">
      Сейчас можно создать только 3 проекта.
      Подключите подписку и создавайте неограниченное количество проектов
    </v-text>
    <client-only>
      <v-button>
        Подключить за 400/мес
      </v-button>
    </client-only>
  </div>
</template>

<script>
export default {
  computed: {
    isClient() {
      return process.client;
    },
  },
};
</script>

<style lang="scss" src="./ProjectsMore.scss">
</style>
