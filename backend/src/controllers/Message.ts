import { Context } from 'koa';
import { io } from '../app';
import { Message } from '../models/Message';

class MessageController {
  public static async create(ctx: Context) {
    const { text, userId } = ctx.request.body;

    const result = await Message.create(text, userId);

    io.emit('newMessage', {
      text: result.text,
      userId: result.userId,
      createdAt: result.createdAt,
      user: {
        name: result.user.name,
        avatarUrl: result.user.avatarUrl,
      },
    });

    ctx.body = result;
  }

  public static async findMany(ctx: Context) {
    const { limit } = ctx.query;

    const result = await Message.findMany(Number(limit as string));

    ctx.body = result;
  }
}

export { MessageController };
