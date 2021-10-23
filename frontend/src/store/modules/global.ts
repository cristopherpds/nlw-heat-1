import { ActionTree, GetterTree, MutationTree } from 'vuex';

type GlobalType = {
  message: string;
  error: string;
  loading: boolean;
};

const state: GlobalType = {
  message: '',
  error: '',
  loading: false,
};

const mutations: MutationTree<GlobalType> = {
  SET_MESSAGE(state, data) {
    state.message = data;
  },
  SET_ERROR(state, data) {
    state.error = data;
  },
  SET_LOADING(state) {
    state.loading = !state.loading;
  },
};

const actions: ActionTree<GlobalType, void> = {
  updateMessage: ({ commit }, { message }) => commit('SET_MESSAGE', message),
  updateError: ({ commit }, { error }) => commit('SET_ERROR', error),
  setLoading: ({ commit }) => commit('SET_LOADING'),
};

const getters: GetterTree<GlobalType, void> = {
  getError: (state) => state.error,
  getMessage: (state) => state.message,
  getLoading: (state) => state.loading,
};

export const GlobalModules = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
