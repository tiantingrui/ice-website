# 微任务和宏任务

- 什么是宏任务和微任务
- event loop 和 DOM 渲染
- 宏任务和微任务的区别

### 宏任务和微任务

- Macro task: setTimeout、setInterval、ajax、DOM事件
- Micro task：Promise async/await
- 微任务执行时机要比宏任务执行时机早

### event loop 和 DOM 渲染

- JS 是单线层的。而且和DOM渲染共用一个线程
- JS执行的时候，得留一些时机供DOM渲染

[![image-20210125153018960](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/javascript/img/image-20210125153018960.png)(opens new window)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/javascript/img/image-20210125153018960.png)

1. 每次Call Stack 清空（即每次轮询结束），即同步任务执行完
2. 都是DOM重新渲染的机会，DOM结构如有改变则重新渲染
3. 然后再去触发下一次Eventloop

### 宏任务和微任务的区别

- 宏任务：DOM渲染后触发，如setTimeout
- 微任务：DOM渲染前触发，如Promise

### 从event loop 解释，为何微任务执行更早

- 微任务是ES6语法规定的， 微任务不会走 web api
- 宏任务是由浏览器规定的

[![image-20210125161510224](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/javascript/img/image-20210125161510224.png)(opens new window)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/javascript/img/image-20210125161510224.png)

Event loop执行顺序

1. Call stack 清空
2. 执行当前的微任务 - micro task queue
3. 尝试DOM渲染
4. 触发 Event Loop(轮询查找callback Queue，如有则移动到Call Stack 执行)

### 总结 - 宏任务和微任务

- 宏任务和微任务有哪些？微任务触发时机更早
- 微任务、宏任务和DOM渲染的关系
- 微任务、宏任务和DOM渲染，在event loop 的过程

### topic

- 请描述 event loop(事件循环/事件轮询)的机制，可画图

- 什么是微任务/宏任务，两者有什么区别？

  - 微任务（DOM渲染之前）执行时机比宏任务（DOM渲染之后）要早

- promise有哪三种状态，如何变化

- 场景题 - promise then 和 catch 的连接

  ```js
  Promise.resolve().then(() => {
    console.log(1)
  }).catch(() => {
    console.log(2)
  }).then(() => console.log(3))
  // 1 3
  
  
  Promise.resolve().then(() => {
    console.log(1)
    throw new Error('error1')
  }).catch(() => {
    console.log(2) // 返回了一个 resolved 的 promise 后面也会执行 then
  }).then(() => console.log(3))
  // 1 2 3
  
  
  Promise.resolve().then(() => {
    console.log(1)
    throw new Error('error1')
  }).catch(() => {
    console.log(2)
  }).catch(() => console.log(3)) // 这里是catch
  // 1 2
  ```

- 场景题 - async/await 语法

  ```js
  async function fn() {
    return 100
  }
  (async function() {
    const a = fn() // ?? Promise
    const b = await fn() // ?? 100
  }
  )()
  
  
  // 第二题
  (async function(
  	console.log('start') // 1
    const a = await 100
    console.log('a', a) // 100
    const b = await Promise.reslove(200)
    console.log('b', b) // 200
    const c = await Promise.reject(300) // 会报错 ，await相当于 then, 后面不会打印，用try catch 处理
    console.log('c', c)
    console.log('end')
  ) {})() // 打印出哪些内容？
  ```

- 场景题 - promise 和 setTimeout 的顺序

  ```js
  console.log(100)
  setTimeout(() => {
    console.log(200)
  })
  Promise.resolve().then(() => {
    cnsole.log(300)
  })
  console.log(400)
  ```

- async/await 的顺序问题

  ```js
  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }
  async function async2() {
    console.log('async2')
  }
  console.log('script start')
  
  setTimeout(function() {
    console.log('setTimeout')
  }, 0)
  
  async1()
  
  // 初始化 promise 时，传入的函数会立刻被执行
  new Promise(function (resolve) {
    console.log('promise1')
    resolve()
  }).then(function() {
    console.log('promise2')
  })
  
  console.log('script end')
  ```