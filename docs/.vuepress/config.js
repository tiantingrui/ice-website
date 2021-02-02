const sideBarConfig = require("./baseConfig/sidebarConfig") 
const navConfig = require('./baseConfig/navConfig')

module.exports = {
  title: "忘带伞的阿离",
  description: '',
  head: [
    ['link', {rel: 'icon', href: ''}]
  ],
  themeConfig: {
    // logo: "/assets/img/bg.jpg",
    // 导航栏链接
    nav: navConfig,
    // sidebar: 'auto',
    sidebar: sideBarConfig,
    // lastUpdated: "Last Updated",
    smoothScroll: true, // string | boolean
  },
  dest: 'dist',
  plugins: [
    "vuepress-plugin-cat"
  ]
};
