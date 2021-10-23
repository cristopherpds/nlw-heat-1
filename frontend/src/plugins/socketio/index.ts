import { App } from 'vue';
import { io, ManagerOptions } from 'socket.io-client';

type OptionsType = {
  connection: string;
  options?: ManagerOptions;
}

export default {
  install: (app: App, pluginOptions: OptionsType) => {
    const socket = io(pluginOptions.connection, pluginOptions.options);

    app.config.globalProperties.$socket = socket;

    app.provide('socket', socket);
  },
};
