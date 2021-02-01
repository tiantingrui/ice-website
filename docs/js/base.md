# JS 基础

- 变量类型和计算
- 原型和原型链
- 作用域和闭包
- 异步

## 变量类型和计算

### 变量类型

- 值类型和引用类型
- typeof 运算符
- 深拷贝

### 变量计算 - 类型转换

- 字符串拼接
- == 运算符

```js
100 = '100' // true
0 == '' // true
0 == false // true
false == '' // true
null == undefined // true
```

- if 语句和逻辑运算

**truly 变量**：!!a === true 的变量

**falsely变量**：!!a === false 的变量

```js
// 以下是 falsely 变量。除此之外都是 truth变量
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false
```

#### 常见考点

- typeof 能判断哪些类型

  - 识别所有值类型
  - 识别函数
  - 判断是否是引用类型（不可细分）

- 何时使用 === ，何时使用 ==

  - 除了 == null 之外，其他都一律用 ===

- 值类型和引用类型的区别

  - 值类型 - 栈内存
  - 引用类型 - 堆内存

- 手写深拷贝

  - 注意判断值类型和引用类型
  - 注意判断是数组还是对象
  - 递归

  ```js
  function deepCLone(obj = {}) {
      if (typeof obj !== 'object' || obj == null) {
          return obj
      }
      // let newObj = obj instanceof Array ? [] : {}
      let newObj = Array.isArray(obj) ? [] : {}
      for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
              // 保证key 不是原型的属性
              newObj[key] = deepClone(obj[key])
          }
      }
      return newObj
  }
  ```

## 原型和原型链

- class 和 继承
- 类型判断 instanceof
- 原型和原型链

### class

> class 实际上就是构造函数的语法糖，本质还是函数

- constructor
- 属性
- 方法

#### 继承

- extends
- super
- 扩展和重写方法

### 类型判断 - instanceof

```js
[] instanceof Array // true
[] instanceof Object // true
{} instanceof Object // true
```

### 原型

- 构造函数的prototype (显示原型)
- 实例的`__proto__ `（隐式原型）

#### 基于原型的执行规则

- 现在自身属性和方法寻找
- 如果找不到则自动去 `__proto__` 中查找

### 原型链

instanceof 是基于原型链实现的

看一个易错点

```js
[typeof null, null instanceof Object]
// ['object', false]
```

instanceof 运算符是用来测试一个对象在其原型链构造函数上是否具有 prototype 属性，null 值并不是以 Object 原型创建出来的，所以 null instanceof Object 返回 false。

## 作用域和闭包

- 作用域和自由变量
- 闭包
- this

### 作用域

- 全局作用域
- 函数作用域
- 块级作用域（ES6新增）

### 自由变量

- 一个变量在当前作用域没有定义，但被使用了
- 向上级作用域，一层一层依次寻找，直到找到为止
- 如果到全局作用域都没找到，则报错 xx is not defined

### 闭包

- 作用域应用的特殊情况，有两种表现：
- 函数作为参数被传递
- 函数作为返回值被返回

**注意：闭包，所有自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方！！**

### this

- 作为普通函数 - window

- 使用call apply bind

  ```js
  function fn1() {console.log(this)}
  fn1() // window
  fn1.call({x:100}) // {x: 100}
  const fn2 = fn1.bind({x: 200}) 
  fn2() // {x: 200}
  ```

  - bind需要重新返回一个新的函数
  - call、apply 直接使用

- 作为对象方法被调用 - this 指向当前对象

  ```js
  const aa = {
    name: 'aa',
    getName() {
      // this 即当前对象
      console.log(this)
    }
    wait() {
      setTimeout(function() {
        // this === window
        console.log(this)
      })
    },
    waitAgain() {
      setTimeout(() => {
        // this 即当前对象
        console.log(this)
      })
    }
  }
  ```

- 在class中被调用 - 指向实例

- 箭头函数 - 指向上级作用域

**this取什么值，是在函数执行的时候确定的，不是函数定义的时候确定的**

### 相关考题

- this 的不同应用场景，如何取值？

- 手写 bind 函数

  ```js
  Function.prototype.bind2 = function() {
      const args = Array.prototype.slice.call(arguments)
      const t = args.shift()
      return () => {
          return this.apply(t, args)
      }
  }
  ```

- 实际开发中闭包的应用场景，举例说明

  - 隐藏数据
  - 比如做一个简单的 cache 工具

- 创建 10 个 `<a>` 标签，点击的时候弹出来对应的序号

  ```js
  let a
  for(let i = 0; i < 10; i++) {
      a = document.createElement('a')
      a.innerHTML = i + '<br>'
      a.addEventListener('click', function(e) {
          e.preventDefault()
          alert(i)
      })
  
      document.body.appendChild(a)
  }
  ```

## 异步和单线程

### Content

- 单线程和异步
- 应用场景
- callback hell 和 Promise

#### 单线程和异步

- JS 是单线程语言，只能同时做一件事儿
- 浏览器和nodejs已支持JS启动进程，如Web Worker
- JS 和 DOM 渲染共用同一个进程，因为 JS 可修改DOM 结构
- 遇到等待（网络请求、定时任务）不能卡住
- 需要异步
- 回调callback 形式

```js
// 同步
console.log1(100)
alert(200)
console.log(300)

// 异步
console.log(100)
setTimeout(function() {
  console.log(200)
}, 1000)
console.log(300)
```

#### 异步和同步

- 基于JS 是单线程语言
- 异步不会阻塞代码执行
- 同步会阻塞代码执行

#### 应用场景

- 网络请求，如ajax 图片加载

  ```js
  // 图片加载
  console.log('start')
  let img = document.createElement('img')
  img.onload = function() {
    console.log('loaded')
  }
  img.src = 'xx.png'
  console.log('end')
  ```

- 定时任务，如setTimeout

#### Promise

> 解决 callback hell

### 相关题目

- 同步和异步的区别是什么？

  - 基于JS 是单线程语言
  - 异步不会阻塞代码执行
  - 同步会阻塞代码执行

- 手写用Promise 加载一张图片

  ```js
  function loadImg(src) {
      return new Promise(
          (resolve, reject) => {
              const img = document.createElement('img')
              img.onload = () => {
                  resolve(img)
              }
              img.onerror = () => {
                  reject(new Error(`图片加载失败 ${src}`))
              }
              img.src = src
          }
      )
  }
  ```

- 前端使用异步的场景有哪些？

- 场景题

  ```js
  // setTimeout 
  console.log(1)
  setTimeout(function() {
    console.log(2)
  }, 1000)
  console.log(3)
  setTimeout(function() {
    console.log(4)
  }, 0)
  console.log(5)
  // 1, 3, 5, 4, 2
  ```