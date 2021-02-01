module.exports = [
  {
    title: '深入浅出JavaScript',
    path: '/js',
    children: [
      {
        title: 'js基础',
        path: '/js/base'
      },
      {
        title: 'js进阶',
        path: '/js/advance'
      }
    ]
  },
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
  {
    title: '前端工程化',
    path: '/front-project',
    children: [
      {
        title: 'webpack',
        path: '/front-project/webpack'
      },
      {
        title: 'babel',
        path: '/front-project/babel'
      }
    ]
  },
  {
    title: '计算机网络',
    path: '/network',
    children: [
      {
        title: '一篇文章带你快速认知http',
        path: '/network/http'
      }
    ]
  }
];
