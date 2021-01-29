const sideBarConfig = require("./sidebarConfig") 

module.exports = {
  title: "前端大本营",
  themeConfig: {
    // logo: "/assets/img/bg.jpg",
    // 导航栏链接
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Github", link: "https://github.com/tiantingrui" },
    ],
    // sidebar: 'auto',
    sidebar: sideBarConfig,
    lastUpdated: "Last Updated",
    smoothScroll: true, // string | boolean
  },
};
