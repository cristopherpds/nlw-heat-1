import { Context } from 'koa';
import Router from 'koa-router';
import { GITHUB_CLIENT_ID } from '../configs/environment';
import { AuthenticationController } from '../controllers/Authentication';

const router = new Router({ prefix: '/auth' });

router.get('/github', (ctx: Context) => {
  ctx.redirect(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`);
});

router.get('/github/callback', (ctx: Context) => {
  const { code } = ctx.request.query;

  ctx.body = { code };
});

router.post('/github/login', AuthenticationController.githubLogin);

export default router;
