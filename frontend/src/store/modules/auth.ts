import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { AuthService } from '../../services/api/auth';

type GlobalType = {
  isLogged: Boolean;
};

const state: GlobalType = {
  isLogged: false,
};

const mutations: MutationTree<GlobalType> = {
  SET_IS_LOGGED(state, data) {
    state.isLogged = data;
  },
};

const actions: ActionTree<GlobalType, void> = {
  handleGithubLogin: async ({ commit }, code: string) => {
    const response = await AuthService.githubLogin(code);

    if (response) {
      commit('SET_IS_LOGGED', true);
      window.localStorage.setItem('@nlwheat:token', response.token);
    }
  },
  handleLogout: async ({ commit }) => {
    commit('SET_IS_LOGGED', false);
    window.localStorage.removeItem('@nlwheat:token');
  },
  handleSetIsLogged: async ({ commit }) => {
    commit('SET_IS_LOGGED', true);
  },
};

const getters: GetterTree<GlobalType, void> = {
  getIsLogged: (state) => state.isLogged,
};

export const AuthModules = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
