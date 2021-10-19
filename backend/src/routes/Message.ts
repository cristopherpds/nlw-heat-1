import Router from 'koa-router';
import { MessageController } from '../controllers/Message';
import { authenticated } from '../middlewares/authenticated';

const router = new Router({ prefix: '/messages' });

router.post('/', authenticated, MessageController.create);
router.get('/', MessageController.findMany);

export default router;
