<template>
  <div class="login">
    <v-container>
      <div class="login__content">
        <a :href="loginUrl">
          <button type="button" class="login__button">
            <google-icon />
            Войти через Gmail
          </button>
        </a>
      </div>
    </v-container>
  </div>
</template>

<script>
import GoogleIcon from '@svg/google.svg';

export default {
  auth: false,
  components: {
    GoogleIcon,
  },
  layout: 'with-footer',
  computed: {
    loginUrl() {
      return `${this.$store.$config.baseURL}/v1/login/google/`;
    },
  },
  created() {
    if (this.$store.state.auth.loggedIn) {
      this.$router.push('/projects');
    }
  },
};
</script>

<style lang="scss" src="./login.scss">
</style>
