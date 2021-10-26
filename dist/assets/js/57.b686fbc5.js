(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{421:function(t,a,e){"use strict";e.r(a);var i=e(22),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),e("h3",{attrs:{id:"topic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#topic"}},[t._v("#")]),t._v(" topic")]),t._v(" "),e("ul",[e("li",[t._v("http 常见的状态码有哪些")]),t._v(" "),e("li",[t._v("http常见的header 有哪些")]),t._v(" "),e("li",[t._v("什么是Restful API")]),t._v(" "),e("li",[t._v("描述一下http 的缓存机制（重要）")])]),t._v(" "),e("h2",{attrs:{id:"http-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" http 状态码")]),t._v(" "),e("ul",[e("li",[t._v("状态码分类")]),t._v(" "),e("li",[t._v("常见状态码")]),t._v(" "),e("li",[t._v("关于协议和规范")])]),t._v(" "),e("h3",{attrs:{id:"状态码分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码分类"}},[t._v("#")]),t._v(" 状态码分类")]),t._v(" "),e("ul",[e("li",[t._v("1xx 服务器收到请求")]),t._v(" "),e("li",[t._v("2xx 请求成功，如200")]),t._v(" "),e("li",[t._v("3xx 重定向，如 302")]),t._v(" "),e("li",[t._v("4xx 客户端错误，如404")]),t._v(" "),e("li",[t._v("5xx 服务端错误，如500")])]),t._v(" "),e("h3",{attrs:{id:"常见状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[t._v("#")]),t._v(" 常见状态码")]),t._v(" "),e("ul",[e("li",[t._v("200 成功")]),t._v(" "),e("li",[t._v("301 永久重定向（配合 location ，浏览器自动处理）")]),t._v(" "),e("li",[t._v("302 临时重定向（配合 location ，浏览器自动处理）")]),t._v(" "),e("li",[t._v("304 资源未被修改（不属于重定向）比如说有缓存")]),t._v(" "),e("li",[t._v("403 没有权限")]),t._v(" "),e("li",[t._v("404 资源未找到")]),t._v(" "),e("li",[t._v("500 服务器错误")]),t._v(" "),e("li",[t._v("504 网关超时")])]),t._v(" "),e("h3",{attrs:{id:"关于协议和规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于协议和规范"}},[t._v("#")]),t._v(" 关于协议和规范")]),t._v(" "),e("ul",[e("li",[t._v("就是一个约定")]),t._v(" "),e("li",[t._v("要求大家都跟着执行")]),t._v(" "),e("li",[t._v("不要违反规范，例如IE浏览器")])]),t._v(" "),e("h2",{attrs:{id:"http-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-methods"}},[t._v("#")]),t._v(" http methods")]),t._v(" "),e("ul",[e("li",[t._v("传统的methods\n"),e("ul",[e("li",[t._v("get 获取服务器的数据")]),t._v(" "),e("li",[t._v("post 向服务器提交数据")]),t._v(" "),e("li",[t._v("简单的网页功能，就这两个操作")])])]),t._v(" "),e("li",[t._v("现在的methods\n"),e("ul",[e("li",[t._v("get 获取数据")]),t._v(" "),e("li",[t._v("post 新增数据")]),t._v(" "),e("li",[t._v("patch/put 更新数据")]),t._v(" "),e("li",[t._v("delete 删除数据")])])]),t._v(" "),e("li",[t._v("Restful API\n"),e("ul",[e("li",[t._v("一种新的API设计方法（早已推广使用）")]),t._v(" "),e("li",[t._v("传统API设计：把每个 url 当作一个功能")]),t._v(" "),e("li",[t._v("restful API 设计：把每个 url 当做一个唯一的资源")])])])]),t._v(" "),e("h4",{attrs:{id:"如何设计成一个资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何设计成一个资源"}},[t._v("#")]),t._v(" 如何设计成一个资源？")]),t._v(" "),e("ul",[e("li",[t._v("尽量不用 url 参数")]),t._v(" "),e("li",[t._v("用 method 表示操作类型")])]),t._v(" "),e("h4",{attrs:{id:"不使用url参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不使用url参数"}},[t._v("#")]),t._v(" 不使用url参数")]),t._v(" "),e("ul",[e("li",[t._v("传统API设计： /api/list?pageIndex =2")]),t._v(" "),e("li",[t._v("Restful API 设计： /api/list")])]),t._v(" "),e("h4",{attrs:{id:"用method表示操作类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用method表示操作类型"}},[t._v("#")]),t._v(" 用method表示操作类型")]),t._v(" "),e("p",[e("strong",[t._v("传统API设计")])]),t._v(" "),e("ul",[e("li",[t._v("post请求 /api/create-blog")]),t._v(" "),e("li",[t._v("post请求 /api/update-blog?id=100")]),t._v(" "),e("li",[t._v("get请求 /api/get-blog?id=100")])]),t._v(" "),e("p",[e("strong",[t._v("Restful API设计")])]),t._v(" "),e("ul",[e("li",[t._v("post请求 /api/blog")]),t._v(" "),e("li",[t._v("patch请求 /api/blog/100")]),t._v(" "),e("li",[t._v("get请求 /api/blog/100")])]),t._v(" "),e("h2",{attrs:{id:"http-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-headers"}},[t._v("#")]),t._v(" http headers")]),t._v(" "),e("ul",[e("li",[t._v("常见的 Request Headers")]),t._v(" "),e("li",[t._v("常见的Response Headers")])]),t._v(" "),e("h3",{attrs:{id:"request-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-headers"}},[t._v("#")]),t._v(" Request Headers")]),t._v(" "),e("ul",[e("li",[t._v("Accept 浏览器可接受的数据格式")]),t._v(" "),e("li",[t._v("Accept-Encoding 浏览器可接收的压缩算法，如gzip")]),t._v(" "),e("li",[t._v("Accept-Language 浏览器可接收的语言，如zh-CN")]),t._v(" "),e("li",[t._v("Connection: keep-alive 一次TCP连接重复使用")]),t._v(" "),e("li",[t._v("Cookie(浏览器会自动携带同域的cookie)")]),t._v(" "),e("li",[t._v("Host")]),t._v(" "),e("li",[t._v("User-Agent(简称UA)浏览器信息")]),t._v(" "),e("li",[t._v("Content-Type 发送数据的格式，如application/json")])]),t._v(" "),e("h3",{attrs:{id:"response-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-headers"}},[t._v("#")]),t._v(" Response Headers")]),t._v(" "),e("ul",[e("li",[t._v("Content-Type 返回数据的格式，如application/json")]),t._v(" "),e("li",[t._v("Content-length 返回数据的大小，多少字节")]),t._v(" "),e("li",[t._v("Content-Encoding 返回数据的压缩算法，如gzip")]),t._v(" "),e("li",[t._v("Set-Cookie")])]),t._v(" "),e("h3",{attrs:{id:"自定义header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义header"}},[t._v("#")]),t._v(" 自定义header")]),t._v(" "),e("blockquote",[e("p",[t._v("axios-js.com/docs/#Request-Config")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// `headers` are custom headers tobe sent\nheaders: {'X-Requested-with': 'XMLHttpRequest'},\n")])])]),e("h3",{attrs:{id:"缓存相关的headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存相关的headers"}},[t._v("#")]),t._v(" 缓存相关的headers")]),t._v(" "),e("ul",[e("li",[t._v("Cache-Control Expires")]),t._v(" "),e("li",[t._v("Last-Modified If-Modified-Since")]),t._v(" "),e("li",[t._v("Etag If-None-Match")])]),t._v(" "),e("h2",{attrs:{id:"http-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" http 缓存")]),t._v(" "),e("ul",[e("li",[t._v("关于缓存的介绍")]),t._v(" "),e("li",[t._v("http 缓存策略（强制缓存+协商缓存）")]),t._v(" "),e("li",[t._v("刷新操作方式，对缓存的影响")])]),t._v(" "),e("h3",{attrs:{id:"关于缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于缓存"}},[t._v("#")]),t._v(" 关于缓存")]),t._v(" "),e("p",[e("strong",[t._v("什么是缓存？")])]),t._v(" "),e("p",[e("strong",[t._v("为什么需要缓存？")])]),t._v(" "),e("ul",[e("li",[t._v("让页面加载更快些")])]),t._v(" "),e("p",[e("strong",[t._v("哪些资源可以被缓存")])]),t._v(" "),e("ul",[e("li",[t._v("静态资源 （js css img）")])]),t._v(" "),e("h2",{attrs:{id:"http-缓存-强制缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存-强制缓存"}},[t._v("#")]),t._v(" http 缓存 - 强制缓存")]),t._v(" "),e("h4",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),e("ul",[e("li",[t._v("Response Headers 中")]),t._v(" "),e("li",[t._v("控制强制缓存的逻辑")]),t._v(" "),e("li",[t._v("例如Cache-Control: max-age=31536000(单位是秒， 一年)")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131160829774.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131160829774.png",alt:"image-20210131160829774"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131161004001.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131161004001.png",alt:"image-20210131161004001"}}),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"cache-control-的值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-的值"}},[t._v("#")]),t._v(" Cache-control 的值")]),t._v(" "),e("ul",[e("li",[t._v("max-age - 缓存时间")]),t._v(" "),e("li",[t._v("no-cache - 不用强制缓存，去服务端请求，服务端怎么处理我们不管")]),t._v(" "),e("li",[t._v("no-store - 不用本地缓存，也不用服务端的一些缓存措施（协商缓存....）,更彻底（每次拿最新的）")]),t._v(" "),e("li",[t._v("private - 电脑、浏览器个人做缓存")]),t._v(" "),e("li",[t._v("public - 中间路由做代理也可以做缓存")])]),t._v(" "),e("h4",{attrs:{id:"关于expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于expires"}},[t._v("#")]),t._v(" 关于Expires")]),t._v(" "),e("ul",[e("li",[t._v("同在 Response Headers 中")]),t._v(" "),e("li",[t._v("同为控制缓存过期")]),t._v(" "),e("li",[t._v("已被Cache-Control 代替")])]),t._v(" "),e("h2",{attrs:{id:"http缓存-协商缓存-对比缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http缓存-协商缓存-对比缓存"}},[t._v("#")]),t._v(" http缓存 - 协商缓存（对比缓存）")]),t._v(" "),e("ul",[e("li",[t._v("服务端缓存策略")]),t._v(" "),e("li",[t._v("服务端判断客户端资源，是否和服务端资源一样")]),t._v(" "),e("li",[t._v("一致返回304，否则返回200和最新的资源")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162110067.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162110067.png",alt:"image-20210131162110067"}}),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"资源标识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源标识"}},[t._v("#")]),t._v(" 资源标识")]),t._v(" "),e("ul",[e("li",[t._v("在Response Headers 中，有两种")]),t._v(" "),e("li",[t._v("Last-modified 资源的最后修改时间")]),t._v(" "),e("li",[t._v("Etag 资源的唯一标识（一个字符串，类似人类的指纹）")])]),t._v(" "),e("h4",{attrs:{id:"last-modified"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[t._v("#")]),t._v(" Last-Modified")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162429441.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162429441.png",alt:"image-20210131162429441"}}),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[t._v("#")]),t._v(" Etag")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162805634.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162805634.png",alt:"image-20210131162805634"}}),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"headers-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headers-示例"}},[t._v("#")]),t._v(" Headers 示例")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162927822.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162927822.png",alt:"image-20210131162927822"}}),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"请求示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求示例"}},[t._v("#")]),t._v(" 请求示例")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131163005897.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131163005897.png",alt:"image-20210131163005897"}}),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"last-modified-和-etag-共存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-etag-共存"}},[t._v("#")]),t._v(" Last-Modified 和 Etag 共存")]),t._v(" "),e("ul",[e("li",[t._v("会优先使用Etag")]),t._v(" "),e("li",[t._v("Last-Modified 只能精确到秒级")]),t._v(" "),e("li",[t._v("如果资源被重复生成，而内容不变，则Etag 更精确")])]),t._v(" "),e("h4",{attrs:{id:"缓存流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存流程"}},[t._v("#")]),t._v(" 缓存流程")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/tiantingrui/up_2021/blob/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131163411129.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131163411129.png",alt:"image-20210131163411129"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"刷新页面对缓存的影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷新页面对缓存的影响"}},[t._v("#")]),t._v(" 刷新页面对缓存的影响")]),t._v(" "),e("h3",{attrs:{id:"三种刷新操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三种刷新操作"}},[t._v("#")]),t._v(" 三种刷新操作")]),t._v(" "),e("ul",[e("li",[t._v("正常操作：地址栏输入 url ，跳转链接，前进后退等")]),t._v(" "),e("li",[t._v("手动刷新：F5，点击刷新按钮，点击菜单刷新 command + R")]),t._v(" "),e("li",[t._v("强制刷新：ctrl + F5 / command + shift + R")])]),t._v(" "),e("h4",{attrs:{id:"不同刷新操作-不同的缓存策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同刷新操作-不同的缓存策略"}},[t._v("#")]),t._v(" 不同刷新操作，不同的缓存策略")]),t._v(" "),e("ul",[e("li",[t._v("正常操作：强制缓存有效，协商缓存有效")]),t._v(" "),e("li",[t._v("手动刷新：强制缓存失效，协商缓存有效")]),t._v(" "),e("li",[t._v("强制刷新：强制缓存失效，协商缓存失效")])]),t._v(" "),e("details",{staticClass:"details-reset details-overlay details-overlay-dark",staticStyle:{"box-sizing":"border-box",display:"block"},attrs:{id:"jumpto-line-details-dialog"}},[e("summary",{staticStyle:{"box-sizing":"border-box",display:"list-item",cursor:"pointer","list-style":"none"},attrs:{"data-hotkey":"l","aria-label":"Jump to line",role:"button"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);