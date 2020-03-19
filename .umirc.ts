import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: '德阳邮政公司'
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
