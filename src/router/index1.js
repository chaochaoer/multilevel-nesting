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
          path: '/team1',
          name: 'team1',
          component: WithRouterReplaceComp(() => import('@/views/Team1/index.vue')),
          meta: {
            title: '团队管理1',
          },
          children: [
            {
              name: 'TeamDetail1',
              path: ':teamId',
              component: () => import('@/views/Team1/TeamDetail/index.vue'),
              props: {
                type: '12'
              },
              meta: {
                title: '团队详情',
                inferRealPath: true
              },
              children: [
                {
                  name: 'PersonDetail1',
                  path: ':personId',
                  component: () => import('@/views/Team1/TeamDetail/PersonDetail/index.vue'),
                  meta: {
                    title: '个人详情',
                    inferRealPath: true
                  },
                  children: [
                    {
                      name: 'ArticleDetail1',
                      path: ':articleId',
                      component: () => import('@/views/Team1/TeamDetail/PersonDetail/ArticleDetail/index.vue'),
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
          path: '/team2',
          name: 'team2',
          component: () => import('@/views/Team2/index.vue'),
          meta: {
            title: '团队管理2',
          },
          children: [
            {
              name: 'TeamDetail2',
              path: ':teamId',
              component: () => import('@/views/Team2/TeamDetail/index.vue'),
              props: {
                type: '12'
              },
              meta: {
                title: '团队详情',
                inferRealPath: true
              },
              children: [
                {
                  name: 'PersonDetail2',
                  path: ':personId',
                  component: () => import('@/views/Team2/TeamDetail/PersonDetail/index.vue'),
                  meta: {
                    title: '个人详情',
                    inferRealPath: true
                  },
                  children: [
                    {
                      name: 'ArticleDetail2',
                      path: ':articleId',
                      component: () => import('@/views/Team2/TeamDetail/PersonDetail/ArticleDetail/index.vue'),
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
          path: '/team3',
          name: 'team3',
          component: WithRouterReplaceComp(() => import('@/views/Team3/index.vue')),
          meta: {
            title: '团队管理3',
          },
          children: [
            {
              name: 'TeamDetail3',
              path: ':teamId',
              component: () => import('@/views/Team3/TeamDetail/index.vue'),
              props: {
                type: '12'
              },
              meta: {
                title: '团队详情',
                inferRealPath: true
              },
              children: [
                {
                  name: 'PersonDetail3',
                  path: ':personId',
                  component: () => import('@/views/Team3/TeamDetail/PersonDetail/index.vue'),
                  meta: {
                    title: '个人详情',
                    inferRealPath: true
                  },
                  children: [
                    {
                      name: 'ArticleDetail3',
                      path: ':articleId',
                      component: () => import('@/views/Team3/TeamDetail/PersonDetail/ArticleDetail/index.vue'),
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
          name: 'demo1',
          path: '/demo1',
          component: () => import('@/views/Demo1/index.vue'),
          meta: {
            title: 'demo1',
          },
        },
        {
          name: 'demo2',
          path: '/demo2',
          component: () => import('@/views/Demo2/index.vue'),
          meta: {
            title: 'demo2',
          },
        },
      ]
    }
  ]
});

export default router;
