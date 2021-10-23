import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { UserType } from '../../@types';
import { UserService } from '../../services/api/user';

type GlobalType = {
  user: UserType | null;
};

const state: GlobalType = {
  user: null,
};

const mutations: MutationTree<GlobalType> = {
  SET_USER(state, data) {
    state.user = data;
  },
};

const actions: ActionTree<GlobalType, void> = {
  handleGetUser: async ({ commit }) => {
    const response = await UserService.getProfile();

    if (response) {
      commit('SET_USER', response);
    }
  },
};

const getters: GetterTree<GlobalType, void> = {
  getUser: (state) => state.user,
};

export const UsersModules = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
