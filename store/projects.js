export const state = () => ({
  projectsList: [],
  isProjectPage: true,
  currentProject: null,
});

export const actions = {
  async fetchProjects({ commit }) {
    const { data } = await this.$api.get('/v1/projects/');
    commit('setProjects', data);
  },
  async fetchProject({ commit }, id) {
    commit('setIsProjectPage', true);
    const { data } = await this.$api.get(`/v1/projects/${id}/`);
    commit('setCurrentProject', data);
    return data;
  },
  async changeProject({ state, commit }, payload) {
    const { data } = await this.$api.patch(`/v1/projects/${payload.id}/`, payload);

    const projects = [...state.projects];
    const changedProjectIndex = projects.findIndex(p => p.id === payload.id);
    projects[changedProjectIndex] = data;

    commit('setProjects', projects);
  },
  async addProject({ state, commit }, payload) {
    const { data } = await this.$api.post('/v1/projects/', JSON.stringify(payload));
    commit('setProjects', [...state.projectsList, data]);
  },
  async deleteProject({ state, commit }, id) {
    await this.$api.delete(`/v1/projects/${id}/`);

    const filteredProjects = [...state.projectsList].filter(p => p.id !== id);
    commit('setProjects', filteredProjects);
  },
};

export const mutations = {
  setProjects(state, payload) {
    state.projectsList = payload;
  },
  setIsProjectPage(state, payload) {
    state.isProjectPage = payload;
  },
  setCurrentProject(state, payload) {
    state.currentProject = payload;
  },
};

export const getters = {
  projectsList: state => state.projectsList,
  isProjectPage: state => state.isProjectPage,
  getProjectById: state => id => state.projectsList.find(p => +p.id === +id),
  getCurrentProject: state => state.currentProject,
};
