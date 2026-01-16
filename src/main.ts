import { createApp } from 'vue';
// import Playground from './test/playground.vue';
import StyleComponents from './test/style.components.vue';

import { UI, Router } from '.';

createApp(UI.Page)
  .use(
    Router.create({
      history: Router.createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'home',
          component: StyleComponents,
        },
      ],
    })
  )
  .mount('#application');
