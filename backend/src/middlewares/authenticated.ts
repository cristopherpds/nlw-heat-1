import { Context } from 'koa';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '../configs/environment';

interface IPayload {
  sub: string;
}

export async function authenticated(
  ctx: Context,
  next: Function,
):Promise<void> {
  const authToken = ctx.headers.authorization;

  if (!authToken) {
    ctx.status = 401;
    ctx.body = {
      errorCode: 'token.invalid',
    };
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, JWT_SECRET) as IPayload;

    ctx.request.body.userId = sub;

    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = {
      errorCode: 'token.expired',
    };
  }
}
