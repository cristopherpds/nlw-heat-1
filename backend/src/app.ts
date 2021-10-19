import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import http from 'http';
import KoaCors from '@koa/cors';
import { Server } from 'socket.io';

import Router from './routes';

const app = new Koa();
app.use(KoaCors());

const serverHttp = http.createServer(app.callback());

const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log(`Usuário conectado no socket ${socket.id}`);
});

app.use(BodyParser());

app.use(Router.routes());

export { serverHttp, io };
