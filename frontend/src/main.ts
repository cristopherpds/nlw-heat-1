import 'boxicons';

import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import SocketIo from './plugins/socketio';

createApp(App)
  .use(Router)
  .use(Store)
  .use(SocketIo, {
    connection: 'http://localhost:4000',
    options: {},
  })
  .mount('#app');
