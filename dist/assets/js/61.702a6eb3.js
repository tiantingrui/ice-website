(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{425:function(t,e,a){"use strict";a.r(e);var s=a(22),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"koa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa"}},[t._v("#")]),t._v(" koa")]),t._v(" "),a("p",[t._v("Nodejs Web 框架对比")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("框架名称")]),t._v(" "),a("th",[t._v("特性")]),t._v(" "),a("th",[t._v("评价")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Express")]),t._v(" "),a("td",[t._v("简单、实用，路由中间件等五脏俱全")]),t._v(" "),a("td",[t._v("最著名的Web 框架")])]),t._v(" "),a("tr",[a("td",[t._v("Hapi & Restify")]),t._v(" "),a("td",[t._v("面向API & 微服务")]),t._v(" "),a("td",[t._v("移动互联网时代API的作用被放大，故而独立分类，尤其对微服务开发更是利器")])]),t._v(" "),a("tr",[a("td",[t._v("ThinkJS")]),t._v(" "),a("td",[t._v("面向新特性")]),t._v(" "),a("td",[t._v("借鉴ThinkPHP，并慢慢走出自己的一条路，长于新特性支持，新版三元整是基于Koa v2.0 作为内核的")])]),t._v(" "),a("tr",[a("td",[t._v("Koa")]),t._v(" "),a("td",[t._v("专注于异步流程改进")]),t._v(" "),a("td",[t._v("下一代Web 框架")])]),t._v(" "),a("tr",[a("td",[t._v("Egg")]),t._v(" "),a("td",[t._v("基于Koa，在开发上有极大便利")]),t._v(" "),a("td",[t._v("企业级Web 开发框架")])])])]),t._v(" "),a("h2",{attrs:{id:"koa-概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-概览"}},[t._v("#")]),t._v(" Koa 概览")]),t._v(" "),a("ul",[a("li",[t._v("Express 很简洁，Koa更简洁")]),t._v(" "),a("li",[t._v("Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的")]),t._v(" "),a("li",[t._v("内置优雅的底层中间件处理内容协商，缓存清理，代理支持和重定向等常见任务的方法，开箱即用")])]),t._v(" "),a("p",[a("strong",[t._v("洋葱模型")])]),t._v(" "),a("p",[a("strong",[t._v("Koa 常用插件")])]),t._v(" "),a("ul",[a("li",[t._v("koa-static\n"),a("ul",[a("li",[t._v("处理静态资源")])])]),t._v(" "),a("li",[t._v("koa-router\n"),a("ul",[a("li",[t._v("处理路由")])])]),t._v(" "),a("li",[t._v("koa-session\n"),a("ul",[a("li",[t._v("保持网络请求状态")])])]),t._v(" "),a("li",[t._v("koa-bodyparser\n"),a("ul",[a("li",[t._v("处理请求体")])])]),t._v(" "),a("li",[t._v("koa-compress\n"),a("ul",[a("li",[t._v("压缩响应数据")])])]),t._v(" "),a("li",[t._v("koa-logger\n"),a("ul",[a("li",[t._v("输出服务日志")])])]),t._v(" "),a("li",[t._v("koa-error\n"),a("ul",[a("li",[t._v("处理响应错误")])])])]),t._v(" "),a("h4",{attrs:{id:"koa-与-express-的异同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-与-express-的异同"}},[t._v("#")]),t._v(" Koa 与 Express 的异同")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Koa")]),t._v(" "),a("th",[t._v("Express")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("更优雅的编程体验")]),t._v(" "),a("td",[t._v("Node.js至今最流行框架")])]),t._v(" "),a("tr",[a("td",[t._v("核心轻量，插件生态庞大")]),t._v(" "),a("td",[t._v("提供了Web 中间件的标准")])]),t._v(" "),a("tr",[a("td",[t._v("内置异步流控制")]),t._v(" "),a("td",[t._v("简单快捷可拓展")])]),t._v(" "),a("tr",[a("td",[t._v("与Express生态不兼容，有自己的开发生态")]),t._v(" "),a("td",[t._v("维护成本高。对系统设计能力要求高")])]),t._v(" "),a("tr",[a("td",[t._v("入手简单，便于企业级实践")]),t._v(" "),a("td",[t._v("学习曲线低，入手简单")])])])]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"koa-源码概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-源码概览"}},[t._v("#")]),t._v(" Koa 源码概览")]),t._v(" "),a("h4",{attrs:{id:"项目概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目概览"}},[t._v("#")]),t._v(" 项目概览")]),t._v(" "),a("ul",[a("li",[t._v("application.js")]),t._v(" "),a("li",[t._v("context.js")]),t._v(" "),a("li",[t._v("request.js")]),t._v(" "),a("li",[t._v("response.js")])]),t._v(" "),a("h4",{attrs:{id:"项目核心依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目核心依赖"}},[t._v("#")]),t._v(" 项目核心依赖")]),t._v(" "),a("ul",[a("li",[t._v("accepts\n"),a("ul",[a("li",[t._v("网络请求 类型管理")])])]),t._v(" "),a("li",[t._v("cache-content-type\n"),a("ul",[a("li",[t._v("可缓存的ContentType管理器")])])]),t._v(" "),a("li",[t._v("only\n"),a("ul",[a("li",[t._v("属性筛选器")])])]),t._v(" "),a("li",[t._v("delegates\n"),a("ul",[a("li",[t._v("JavaScript委托库")])])]),t._v(" "),a("li",[t._v("koa-compose\n"),a("ul",[a("li",[t._v("中间件组合器")])])]),t._v(" "),a("li",[t._v("koa-convert\n"),a("ul",[a("li",[t._v("1.x转换器")])])]),t._v(" "),a("li",[t._v("http-assert\n"),a("ul",[a("li",[t._v("网络请求断言库")])])]),t._v(" "),a("li",[t._v("statuses\n"),a("ul",[a("li",[t._v("语义化HTTP响应码")])])])]),t._v(" "),a("h4",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("ul",[a("li",[t._v("benchmark性能基准测试")]),t._v(" "),a("li",[t._v("docs文档目录")]),t._v(" "),a("li",[t._v("libs核心文件\n"),a("ul",[a("li",[t._v("application主应用")]),t._v(" "),a("li",[t._v("context上下文")]),t._v(" "),a("li",[t._v("request 请求")]),t._v(" "),a("li",[t._v("response 响应")])])]),t._v(" "),a("li",[t._v("test 单测")])]),t._v(" "),a("h4",{attrs:{id:"源码架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码架构"}},[t._v("#")]),t._v(" 源码架构")]),t._v(" "),a("h2",{attrs:{id:"构造一个可用运行的server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造一个可用运行的server"}},[t._v("#")]),t._v(" 构造一个可用运行的Server")]),t._v(" "),a("h4",{attrs:{id:"application-源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-源码解析"}},[t._v("#")]),t._v(" Application 源码解析")]),t._v(" "),a("ul",[a("li",[t._v("模块依赖\n"),a("ul",[a("li",[t._v("原生依赖 events.Emitter util stream http")]),t._v(" "),a("li",[t._v("第三方工具依赖\n"),a("ul",[a("li",[t._v("koa-compose http-errors statuses")]),t._v(" "),a("li",[t._v("koa-convert is-generator-function")]),t._v(" "),a("li",[t._v("depd only debug on-finished")])])]),t._v(" "),a("li",[t._v("内置模块依赖 request response context")])])]),t._v(" "),a("li",[a("strong",[t._v("核心类Application 初始化配置")])])]),t._v(" "),a("h4",{attrs:{id:"koa-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-compose"}},[t._v("#")]),t._v(" Koa-compose")]),t._v(" "),a("ul",[a("li",[t._v("基于Promise 的流程控制方式，对异步流程同步化，解决链式耦合")]),t._v(" "),a("li",[t._v("将输入数组中的函数一次调用")]),t._v(" "),a("li",[t._v("提供一个数组函数公用的上下文 ctx")]),t._v(" "),a("li",[t._v("提供一个数组函数之间串联的 next 指针")]),t._v(" "),a("li",[a("strong",[t._v("核心代码逻辑为：递归遍历数组")])])]),t._v(" "),a("h4",{attrs:{id:"实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[t._v("#")]),t._v(" 实战")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//koa.js\n//* const app = new Koa()\n//* app.use()\n//* app.listen()\nconst http = require('http')\n\nclass Koa {\n    middleware = () => {}\n\n    constructor() {}\n\n    listen(port, cb) {\n        const server = http.createServer((req, res) => {\n            this.middleware(req, res)\n        });\n        server.listen(port, cb)\n    }\n\n    use(middleware) {\n        this.middleware = middleware\n        return this\n    }\n}\n\nmodule.exports = Koa\n//app.js\nconst Koa = require('./koa')\n\nconst app = new Koa()\n\napp.use((req, res) => {\n    res.writeHead(200)\n    res.end('hello Koa')\n})\n\napp.listen(3000, () => {\n    console.log('Server is running on 3000')\n})\n")])])]),a("h3",{attrs:{id:"编写最小系统-ts写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写最小系统-ts写法"}},[t._v("#")]),t._v(" 编写最小系统（TS写法）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// koa.ts\nconst http = require('http')\n\nclass Koa {\n    private middleware: middlewareFn = () => {};\n    \n    constructor() {}\n\n    listen(port: number, cb: noop) {\n        const server = http.createServer((req, res) => {\n            this.middleware(req, res)\n        })\n        return server.listen(port, cb)\n    }\n    \n    use(middlewareFn: middlewareFn) {\n        this.middleware = this.middleware\n        return this\n    }\n}\n")])])]),a("h4",{attrs:{id:"编写测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写测试"}},[t._v("#")]),t._v(" 编写测试")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Koa from './koa'\n\nconst app = new Koa()\n\napp.use((req, res) => {\n    res.writeHead(200)\n    res.end('A request come in')\n})\n\napp.listen(3000, () => {\n    console.log('Server listen on port 3000')\n})\n")])])]),a("h3",{attrs:{id:"-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])])])}),[],!1,null,null,null);e.default=r.exports}}]);