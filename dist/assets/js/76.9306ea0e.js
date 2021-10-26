(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{440:function(e,t,a){"use strict";a.r(t);var v=a(22),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"模板编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板编译"}},[e._v("#")]),e._v(" 模板编译")]),e._v(" "),a("ul",[a("li",[e._v("模板是vue 开发中最常用的部分，即与使用相关联的原理")]),e._v(" "),a("li",[e._v("他不是 html、有指令、插值、JS表达式，到底是什么？")]),e._v(" "),a("li",[e._v("面试不会直接问，但会通过“组件渲染和更新过程”考察")])]),e._v(" "),a("h3",{attrs:{id:"核心知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心知识点"}},[e._v("#")]),e._v(" 核心知识点")]),e._v(" "),a("ul",[a("li",[e._v("前置知识：JS 的 with 语法")]),e._v(" "),a("li",[e._v("vue template complier 将模板编译为 render 函数")]),e._v(" "),a("li",[e._v("执行render 函数生成 vnode")])]),e._v(" "),a("h2",{attrs:{id:"with-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-语法"}},[e._v("#")]),e._v(" with 语法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const obj = {a: 100, b: 200}\nconsole.log(obj.a)\nconsole.log(obj.b)\nconsole.log(obj.c) // undefined\n\n// 使用 with,能改变 {} 内自由变量的查找方式\n// 将 {} 内自由变量，当作 obj的属性来查找\nwith(obj) {\n    console.log(a)\n    console.log(b)\n    console.log(c) // 会报错！！\n    \n}\n")])])]),a("ul",[a("li",[e._v("能改变 {} 内自由变量的查找方式，当作 obj 属性来查找")]),e._v(" "),a("li",[e._v("如果找不到匹配的 obj 属性，就会报错")]),e._v(" "),a("li",[e._v("with 要慎用，它打破了作用域规则，易读性变差")])]),e._v(" "),a("h2",{attrs:{id:"编译模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译模板"}},[e._v("#")]),e._v(" 编译模板")]),e._v(" "),a("ul",[a("li",[e._v("模板不是html，有指令，插值、JS表达式，能实现判断、循环")]),e._v(" "),a("li",[e._v("html是标签语言，只有JS才能实现判断、循环（图灵完备的）")]),e._v(" "),a("li",[e._v("因此，模板一定是转换为某种JS代码，即编译模板")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i vue-template-compiler --save\nconst compiler = require('vue-template-compiler')\n\n// 插值\nconst template = `<p>{{message}}</p>`\nwith(this) {\n    return _c('p', [_v(_s(message))])\n}\nh -> vnode\ncreateElement -> vnode\n\n// 表达式\nconst template2 = `<p> {{flag ？ message : 'no message found'}} </p>`\nwith(this) {\n    return _c('p', [\n        -v(_s(flag ? message : 'no message found'))\n    ])\n}\n\n// 属性 v-if .....\n")])])]),a("h3",{attrs:{id:"编译模板原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译模板原理"}},[e._v("#")]),e._v(" 编译模板原理")]),e._v(" "),a("ul",[a("li",[e._v("模板编译为render 函数，执行render 函数返回 vnode")]),e._v(" "),a("li",[e._v("基于 vnode 再执行 patch 和 diff")]),e._v(" "),a("li",[e._v("使用 webpack vue-loader，会在开发环境下编译模板（重要")])]),e._v(" "),a("h2",{attrs:{id:"vue-组件可用-render-代替template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件可用-render-代替template"}},[e._v("#")]),e._v(" vue 组件可用 render 代替template")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Vue.component('heading', {\n\t// template: `xxxx`,\n\trender: function(createElement) {\n\t\treturn createElement(\n\t\t\t'h' + this.level,\n\t\t\t[\n\t\t\t\tcreateElement('a', {\n\t\t\t\t\tattrs: {name: 'headerId', href: '#'}\n\t\t\t\t}, 'this is a tag')\n\t\t\t]\n\t\t)\n\t}\n})\n")])])]),a("ul",[a("li",[e._v("理解了模板编译之后，再讲这个render，就比较好理解了")]),e._v(" "),a("li",[e._v("在有些复杂情况中，不能用template，可以考虑用render")]),e._v(" "),a("li",[e._v("React 一直都用 render (没有模板)，和这里一样")])]),e._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("ul",[a("li",[e._v("with 语法")]),e._v(" "),a("li",[e._v("模板到render 函数，再到 vnode ，再到渲染和更新")]),e._v(" "),a("li",[e._v("vue 组件可以用render 代替 template")])]),e._v(" "),a("h1",{attrs:{id:"回顾总结-vue-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾总结-vue-原理"}},[e._v("#")]),e._v(" 回顾总结 vue 原理")]),e._v(" "),a("h4",{attrs:{id:"组件-渲染-更新-过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件-渲染-更新-过程"}},[e._v("#")]),e._v(" 组件 渲染/更新 过程")]),e._v(" "),a("ul",[a("li",[e._v("一个组件渲染到页面，修改data 触发更新（数据驱动视图）")]),e._v(" "),a("li",[e._v("其背后原理是什么，需要掌握那些要点？")]),e._v(" "),a("li",[e._v("考察对流程了解的全面程度")])]),e._v(" "),a("h3",{attrs:{id:"回顾vue-原理三大只是带你"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾vue-原理三大只是带你"}},[e._v("#")]),e._v(" 回顾Vue 原理三大只是带你")]),e._v(" "),a("ul",[a("li",[e._v("响应式：监听data 属性 getter setter （包括数组）")]),e._v(" "),a("li",[e._v("模板编译：模板到render 函数，再到 vnode")]),e._v(" "),a("li",[e._v("vdom: patch（elem, vnode）和 patch(vnode, newVnode)")])]),e._v(" "),a("h5",{attrs:{id:"组件-渲染-更新-过程-的主要要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件-渲染-更新-过程-的主要要点"}},[e._v("#")]),e._v(" 组件 渲染/更新 过程 的主要要点")]),e._v(" "),a("ul",[a("li",[e._v("初次渲染过程")]),e._v(" "),a("li",[e._v("更新过程")]),e._v(" "),a("li",[e._v("异步渲染")])]),e._v(" "),a("h2",{attrs:{id:"vue-组件是如何渲染和更新的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件是如何渲染和更新的"}},[e._v("#")]),e._v(" vue 组件是如何渲染和更新的")]),e._v(" "),a("h3",{attrs:{id:"初次渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初次渲染过程"}},[e._v("#")]),e._v(" 初次渲染过程")]),e._v(" "),a("ul",[a("li",[e._v("解析模板为 render 函数（或在开发环境已完成，vue-loader）")]),e._v(" "),a("li",[e._v("触发响应式，监听data属性 getter setter (执行render 函数会触发 getter)")]),e._v(" "),a("li",[e._v("执行 render 函数，生成 vnode ，patch(elem，vnode)")])]),e._v(" "),a("h3",{attrs:{id:"更新过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新过程"}},[e._v("#")]),e._v(" 更新过程")]),e._v(" "),a("ul",[a("li",[e._v("修改data，触发 setter （此前在 getter 中已被监听）")]),e._v(" "),a("li",[e._v("重新执行render 函数，生成 newVnode")]),e._v(" "),a("li",[e._v("patch(vnode， newVnode)")])]),e._v(" "),a("h3",{attrs:{id:"异步渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步渲染"}},[e._v("#")]),e._v(" 异步渲染")]),e._v(" "),a("ul",[a("li",[e._v("回顾 nextTick()")]),e._v(" "),a("li",[e._v("汇总data的修改，一次性更新视图")]),e._v(" "),a("li",[e._v("减少DOM操作次数，提高性能")])]),e._v(" "),a("h2",{attrs:{id:"总结1-vue原理的三大部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结1-vue原理的三大部分"}},[e._v("#")]),e._v(" 总结1 - Vue原理的三大部分")]),e._v(" "),a("ul",[a("li",[e._v("渲染和响应式的关系")]),e._v(" "),a("li",[e._v("渲染和模板编译的关系")]),e._v(" "),a("li",[e._v("渲染和vdom的关系")])]),e._v(" "),a("h2",{attrs:{id:"总结2-vue-组件是如何渲染和更新的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结2-vue-组件是如何渲染和更新的"}},[e._v("#")]),e._v(" 总结2 - vue 组件是如何渲染和更新的")]),e._v(" "),a("ul",[a("li",[e._v("初次渲染过程")]),e._v(" "),a("li",[e._v("更新过程")]),e._v(" "),a("li",[e._v("异步渲染")])])])}),[],!1,null,null,null);t.default=r.exports}}]);