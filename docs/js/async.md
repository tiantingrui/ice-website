# 异步和单线程

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

  