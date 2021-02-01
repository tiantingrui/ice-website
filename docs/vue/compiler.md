# 模板编译

- 模板是vue 开发中最常用的部分，即与使用相关联的原理
- 他不是 html、有指令、插值、JS表达式，到底是什么？
- 面试不会直接问，但会通过“组件渲染和更新过程”考察

### 核心知识点

- 前置知识：JS 的 with 语法
- vue template complier 将模板编译为 render 函数
- 执行render 函数生成 vnode

## with 语法

```
const obj = {a: 100, b: 200}
console.log(obj.a)
console.log(obj.b)
console.log(obj.c) // undefined

// 使用 with,能改变 {} 内自由变量的查找方式
// 将 {} 内自由变量，当作 obj的属性来查找
with(obj) {
    console.log(a)
    console.log(b)
    console.log(c) // 会报错！！
    
}
```

- 能改变 {} 内自由变量的查找方式，当作 obj 属性来查找
- 如果找不到匹配的 obj 属性，就会报错
- with 要慎用，它打破了作用域规则，易读性变差

## 编译模板

- 模板不是html，有指令，插值、JS表达式，能实现判断、循环
- html是标签语言，只有JS才能实现判断、循环（图灵完备的）
- 因此，模板一定是转换为某种JS代码，即编译模板

```
npm i vue-template-compiler --save
const compiler = require('vue-template-compiler')

// 插值
const template = `<p>{{message}}</p>`
with(this) {
    return _c('p', [_v(_s(message))])
}
h -> vnode
createElement -> vnode

// 表达式
const template2 = `<p> {{flag ？ message : 'no message found'}} </p>`
with(this) {
    return _c('p', [
        -v(_s(flag ? message : 'no message found'))
    ])
}

// 属性 v-if .....
```

### 编译模板原理

- 模板编译为render 函数，执行render 函数返回 vnode
- 基于 vnode 再执行 patch 和 diff
- 使用 webpack vue-loader，会在开发环境下编译模板（重要

## vue 组件可用 render 代替template

```
Vue.component('heading', {
	// template: `xxxx`,
	render: function(createElement) {
		return createElement(
			'h' + this.level,
			[
				createElement('a', {
					attrs: {name: 'headerId', href: '#'}
				}, 'this is a tag')
			]
		)
	}
})
```

- 理解了模板编译之后，再讲这个render，就比较好理解了
- 在有些复杂情况中，不能用template，可以考虑用render
- React 一直都用 render (没有模板)，和这里一样

## 总结

- with 语法
- 模板到render 函数，再到 vnode ，再到渲染和更新
- vue 组件可以用render 代替 template

# 回顾总结 vue 原理

#### 组件 渲染/更新 过程

- 一个组件渲染到页面，修改data 触发更新（数据驱动视图）
- 其背后原理是什么，需要掌握那些要点？
- 考察对流程了解的全面程度

### 回顾Vue 原理三大只是带你

- 响应式：监听data 属性 getter setter （包括数组）
- 模板编译：模板到render 函数，再到 vnode
- vdom: patch（elem, vnode）和 patch(vnode, newVnode)

##### 组件 渲染/更新 过程 的主要要点

- 初次渲染过程
- 更新过程
- 异步渲染

## vue 组件是如何渲染和更新的

### 初次渲染过程

- 解析模板为 render 函数（或在开发环境已完成，vue-loader）
- 触发响应式，监听data属性 getter setter (执行render 函数会触发 getter)
- 执行 render 函数，生成 vnode ，patch(elem，vnode)

### 更新过程

- 修改data，触发 setter （此前在 getter 中已被监听）
- 重新执行render 函数，生成 newVnode
- patch(vnode， newVnode)

### 异步渲染

- 回顾 nextTick()
- 汇总data的修改，一次性更新视图
- 减少DOM操作次数，提高性能

## 总结1 - Vue原理的三大部分

- 渲染和响应式的关系
- 渲染和模板编译的关系
- 渲染和vdom的关系

## 总结2 - vue 组件是如何渲染和更新的

- 初次渲染过程
- 更新过程
- 异步渲染