import { Context } from 'koa';
import { User } from '../models/User';

class UserController {
  public static async findUnique(ctx: Context) {
    const { userId } = ctx.request.body;

    const result = await User.findUnique(userId);

    ctx.body = result;
  }
}

export { UserController };
