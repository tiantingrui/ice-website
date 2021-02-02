# async/await

- 异步回调 callback hell
- Promise then catch 链式回调，但也是基于回调函数
- async/await 是**同步语法**，彻底消灭回调函数

### async/await 和 promise 的关系

- async/await 是消灭异步回调的终极武器

- 但和 promise 并不互斥

- 反而，两者**相辅相成**

- 执行async函数，返回的是一个**Promise对象**

- await相当于Promise的

  then

  - 注意这里**不会接收 rejected**
  - 要做好 try catch

- try……catch 可捕获异常，代替了Promise 的catch



### 异步的本质

- async/await 是消灭异步回调的终极武器
- JS 还是单线程，还得是有异步，还得是基于 event loop
- async/await 只是一个语法糖，很香！

```js
async function async1() {
    console.log('async1 start') // 2
    await async2()
    console.log('async end') // 5
}

async function async2() {
    console.log('async2') // 3
}

console.log('script start') // 1
async1()
console.log('script end') // 4
```

### for of

- for in 以及（forEach for ) 是常规的同步遍历
- for of 常用于异步的遍历

### 总结 async / await 总结

- async/await 解决了异步回调，是一个很香的语法糖
- async/await 和 Promise 的关系，重要
- for ... of 的使用

