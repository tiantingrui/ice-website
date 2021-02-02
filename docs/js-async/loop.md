# Event Loop

- js 是 单线程运行的
- 异步要基于回调来实现
- event loop 就是异步回调的实现原理

```js
console.log('hi')
setTimeout(function cb1() {
  console.log('cb1')
})
console.log('Bye')
```

**总结 Event loop 过程**

- 同步代码，一行一行放在 Call Stack 执行
- 遇到异步，会先“记录下”，等待时机（定时、网络请求等）
- 时机到了，就移动到 Callback Queue
- 如果 CallStack 为空（即同步代码执行完毕），eventloop 开始工作
- 轮询查找callback Queue，如有则移动到Call Stack 执行
- 然后继续轮询查找（就像永动机一样）

### DOM事件和event loop

```js
<button id="btn1">提交</button>

<Script>
  console.log('hi')
  $('#btn1').click(function(e) {
    console.log('button clicked')
    
  })
  console.log('bye')
  </script>
```

- JS 是单线程的
- 异步（setTimeout,ajax 等使用回调），基于eventloop
- DOM 事件也使用回调，基于 Event loop
  - **DOM事件不是异步**

