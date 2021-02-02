# 作用域和闭包

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

