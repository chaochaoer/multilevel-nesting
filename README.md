# multilevel-nesting
vue 使用高阶组件解决多层路由嵌套，父组件里面有子组件，但是子组件不希望父组件显示出来。父组件缓存，子组件不缓存，例如1->2，1会被缓存，
1->2->3，1和2都会被缓存。

高阶组件引入一次，就可以自动接管当前组件和子组件的渲染。

路由结构类似这样：

~~~javascript
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
          component: WithRouterReplaceComp(AAA),
          meta: {
            title: '团队管理',
          },
          children: [
            {
              name: 'TeamDetail',
              path: ':teamId',
              component: BBB,
              meta: {
                title: '团队详情'
              },
              children: [
                {
                  name: 'PersonDetail',
                  path: ':personId',
                  component: CCC,
                  meta: {
                    title: '个人详情',
                  }
                },
              ]
            },
          ]
        },
      ]
    }
  ]
});
~~~
