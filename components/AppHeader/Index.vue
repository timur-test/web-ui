<template>
  <header class="header">
    <v-container>
      <div class="header__content">
        <router-link
          to="/"
          tag="div"
          class="header__logo"
        >
          xmindock
        </router-link>
        <v-menu
          v-if="isProjectPage"
          :title="currentProject && currentProject.name"
          :menu-items="menuItems"
        />
        <client-only v-if="isLogin">
          <div v-click-outside="showUserInfo" class="header__user-info">
            <v-icon-button
              icon-name="cog-outline"
              @click="showUserInfo = !showUserInfo"
            />
            <transition name="user-info">
              <ul
                v-if="showUserInfo"
                class="v-menu-list v-menu-list--status"
              >
                <nuxt-link to="/payment" tag="li">
                  Изменить тариф
                </nuxt-link>
                <li @click="logout">
                  Выйти
                </li>
              </ul>
            </transition>
          </div>
        </client-only>
        <div v-else class="header__controls">
          <nuxt-link
            to="/login"
            tag="div"
            class="header__link"
            exact
          >
            <v-link variant="medium" gray>Вход</v-link>
          </nuxt-link>
        </div>
      </div>
    </v-container>
  </header>
</template>

<script>

export default {
  data() {
    return {
      showUserInfo: false,
      menuItems: [
        { text: 'Создать дубликат', eventName: 'duplicate' },
        { text: 'Удалить', eventName: 'delete' },
        { text: 'Поделиться', eventName: 'share' },
      ],
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.auth.loggedIn;
    },
    loginUrl() {
      return `${this.$store.$config.baseURL}/v1/login/google/`;
    },
    isProjectPage() {
      return this.$route.name === 'projects-id';
    },
    currentProject() {
      return this.$store.getters['projects/getCurrentProject'];
    },
    user() {
      return this.$store.getters['user/getUser'];
    },
  },
  mounted() {

  },
  methods: {
    async logout() {
      await this.$api.post(`${this.$store.$config.baseURL}/v1/logout/`);
      await this.$auth.logout();

      if (process.client) {
        window.location.href = '/login';
      }
    },
  },
};
</script>

<style  lang="scss" src="./AppHeader.scss">
</style>
