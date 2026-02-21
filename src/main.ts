import('@/ui/stylesheet/index.css')
import { createRouter, createWebHistory, RouterView } from 'vue-router';
import { createApp } from 'vue';

namespace Kuxtal {
  export const Router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'playground',
        component: () => import('@/view/playground.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/view/playground.vue'),
      },
    ],
  });
}

createApp(RouterView).use(Kuxtal.Router).mount('#application');
