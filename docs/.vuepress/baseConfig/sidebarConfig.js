module.exports = [
  {
    title: '前端三剑客',
    // collapsable: false,
    children: [
      {
        title: 'HTML',
        path: '/html'
      },
      {
        title: 'CSS',
        path: '/css'
      },
      {
        title: 'JavaScript',
        path: '/javascript'
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
        title: "基础使用",
        path: "/vue/base",
      },
      {
        title: "进阶使用",
        path: "/vue/advance",
      },
      {
        title: "Vue原理",
        path: "/vue/source",
      },
      {
        title: "什么是MVVM",
        path: "/vue/mvvm",
      },
    ],
  },
];
