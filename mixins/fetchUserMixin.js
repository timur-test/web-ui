export default {
  mounted() {
    if (this.$store.state.auth.loggedIn) {
      if (!this.$store.getters['user/getUser']) {
        this.$store.dispatch('user/fetchUser');
      }
      if (!this.$store.getters['user/getProfile']) {
        this.$store.dispatch('user/fetchProfile');
      }
    }
  },
};
