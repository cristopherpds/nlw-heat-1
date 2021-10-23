import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../layouts/Default.vue'),
    children: [
      {
        name: 'Login',
        path: '/login',
        component: () => import('../views/Login.vue'),
      },
      {
        name: 'Message',
        path: '/message',
        props: true,
        component: () => import('../views/Message.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name !== 'Login') {
    const token = window.localStorage.getItem('@nlwheat:token');

    if (token) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
