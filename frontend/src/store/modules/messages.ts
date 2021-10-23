import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { MessageType } from '../../@types';
import { MessageService } from '../../services/api/messages';

type GlobalType = {
  messages: MessageType[];
  message: {
    text: string;
  } | null;
};

const state: GlobalType = {
  messages: [],
  message: {
    text: '',
  },
};

const mutations: MutationTree<GlobalType> = {
  SET_MESSAGE(state, messages) {
    state.messages = messages;
  },
};

const actions: ActionTree<GlobalType, void> = {
  handleGetMessages: async ({ commit }, limit?: number) => {
    const response = await MessageService.get(limit);

    if (response) {
      commit('SET_MESSAGE', response);
    }
  },
  handleCreateMessage: async ({ state }) => {
    const { message } = state;

    if (message) {
      await MessageService.create(message.text);
    }
  },
  handleNewMessage: async ({ state }, message: MessageType) => {
    const { messages } = state;

    setTimeout(() => {
      messages.push(message);
      messages.shift();
    }, 1500);
  },
};

const getters: GetterTree<GlobalType, void> = {
  getMessages: (state) => state.messages,
  getMessage: (state) => state.message,
};

export const MessagesModules = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
