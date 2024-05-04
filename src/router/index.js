import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'chat-room',
      component: () => import('../pages/ChatRoom.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../pages/Form.vue'),
    },
  ],
});

export default router;
