import { createRouter, createWebHashHistory } from 'vue-router';
import WithRouterReplaceComp from "@/components/WithRouterReplaceComp"
import Layouts from "@/layouts"

const router = createRouter({
  history: createWebHashHistory('hash'),
  routes: [
    {
      path: '/',
      component: Layouts,
      redirect: '/team',
      children: [
        {
          path: '/team',
          name: 'team',
          component: WithRouterReplaceComp(() => import('@/views/Team/index.vue')),
          meta: {
            title: '团队管理',
          },
          children: [
            {
              name: 'TeamDetail',
              path: ':teamId',
              component: WithRouterReplaceComp(() => import('@/views/Team/TeamDetail/index.vue')),
              props: {
                type: '12'
              },
              meta: {
                title: '团队详情',
                inferRealPath: true
              },
              children: [
                {
                  name: 'PersonDetail',
                  path: ':personId',
                  component: WithRouterReplaceComp(() => import('@/views/Team/TeamDetail/PersonDetail/index.vue')),
                  meta: {
                    title: '个人详情',
                    inferRealPath: true
                  },
                  children: [
                    {
                      name: 'ArticleDetail',
                      path: ':articleId',
                      component: () => import('@/views/Team/TeamDetail/PersonDetail/ArticleDetail/index.vue'),
                      meta: {
                        title: '文章详情'
                      },
                    }
                  ]
                },
              ]
            },
          ]
        },
        {
          name: 'demo',
          path: '/demo',
          component: () => import('@/views/Demo/index.vue'),
          meta: {
            title: 'demo',
          },
        },
      ]
    }
  ]
});

export default router;
