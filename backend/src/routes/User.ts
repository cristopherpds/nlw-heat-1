import Router from 'koa-router';
import { UserController } from '../controllers/User';
import { authenticated } from '../middlewares/authenticated';

const router = new Router({ prefix: '/users' });

router.get('/profile', authenticated, UserController.findUnique);

export default router;
