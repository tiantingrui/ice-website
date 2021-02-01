module.exports = [
  // {
  //   title: '前端三剑客',
  //   // collapsable: false,
  //   children: [
  //     {
  //       title: 'HTML',
  //       path: '/html'
  //     },
  //     {
  //       title: 'CSS',
  //       path: '/css'
  //     },
  //     {
  //       title: 'JavaScript',
  //       path: '/javascript'
  //     }
  //   ]
  // },
  {
    title: "Vue", // 必要的
    path: "/vue", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    // collapsable: false, // 可选的, 默认值是 true,
    // sidebarDepth: 1, // 可选的, 默认值是 1
    children: [
      {
        title: "什么是MVVM",
        path: "/vue/mvvm",
      },
      {
        title: 'Vue响应式',
        path: '/vue/observe'
      },
      {
        title: 'vdom',
        path: '/vue/vdom'
      },
      {
        title: '深入diff算法',
        path: '/vue/diff'
      },
      {
        title: '模板编译',
        path: '/vue/compiler'
      },
      {
        title: '前端路由原理',
        path: '/vue/router'
      },
      {
        title: 'Vue3 响应式原理',
        path: '/vue/proxy'
      }
    ],
  },
];
