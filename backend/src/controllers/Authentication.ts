import { Context } from 'koa';
import { Authentication } from '../models/Authentication';

class AuthenticationController {
  public static async githubLogin(ctx: Context) {
    const { code } = ctx.request.body;

    try {
      const result = await Authentication.githubLogin(code);

      ctx.body = result;
    } catch (err) {
      ctx.body = { error: err.message };
    }
  }
}

export { AuthenticationController };
