import Router from 'koa-router';
import AuthenticationRoutes from './Authentication';
import MessageRoutes from './Message';
import UserRoutes from './User';

const router = new Router();

router.use(AuthenticationRoutes.routes());
router.use(MessageRoutes.routes());
router.use(UserRoutes.routes());

export default router;
