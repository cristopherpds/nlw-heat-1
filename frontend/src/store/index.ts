import { createStore } from 'vuex';

import { AuthModules } from './modules/auth';
import { GlobalModules } from './modules/global';
import { MessagesModules } from './modules/messages';
import { UsersModules } from './modules/user';

const store = createStore({
  modules: {
    auth: AuthModules,
    global: GlobalModules,
    messages: MessagesModules,
    users: UsersModules,
  },
});

export default store;
