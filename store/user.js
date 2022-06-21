/* eslint-disable no-unused-vars */
export const state = () => ({
  user: null,
  profile: null,
});

export const actions = {
  async fetchUser({ commit }) {
    const { data } = await this.$api.get('/v1/user/');
    commit('setUser', data);
  },
  async fetchProfile({ commit }) {
    const { data } = await this.$api.get('/v1/profile/');
    commit('setProfile', data);
  },
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setProfile(state, payload) {
    state.profile = payload;
  },
};

export const getters = {
  getUser: state => state.user,
  getProfile: state => state.profile,
};
