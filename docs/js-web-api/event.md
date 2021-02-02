# 事件

- 事件绑定
- 事件冒泡
- 事件代理

#### 事件绑定

```js
const byn = document.getElementById('btn1')
btn.addEventListener('click', event => {
  console.log('clicked')
})
```

##### 通用的绑定函数

```js
function bindEvent(elem, type, fn) {
    elem.addEventLister(type, fn)
}
const a = document.getElementById('link1')
bindEvent(a, 'click', (e) => {
    e.preventDefault() // 阻止默认行为
    alert('clicked')
})
```

#### 事件冒泡

[![image-20210126095220086](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/javascript/img/image-20210126095220086.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/javascript/img/image-20210126095220086.png)

#### 事件代理

> 场景：瀑布流

[![image-20210126095337915](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/javascript/img/image-20210126095337915.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/javascript/img/image-20210126095337915.png)

- 代码简洁
- 减少浏览器内存占用

```js
function bindEventProxy(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            // 代理
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}
```

### topic

- 编写一个通用的事件监听函数

  ```js
  function bindEventProxy(elem, type, selector, fn) {
      if (fn == null) {
          fn = selector
          selector = null
      }
      elem.addEventListener(type, event => {
          const target = event.target
          if (selector) {
              // 代理
              if (target.matches(selector)) {
                  fn.call(target, event)
              }
          } else {
              // 普通绑定
              fn.call(target, event)
          }
      })
  }
  ```

- 描述事件冒泡的流程

  - 基于DOM树形结构
  - 事件会顺着触发元素向上冒泡
  - 应用场景：代理

- 无线下拉的图片列表，如何监听每个图片的点击？

  - 事件代理
  - 用 e.target 获取触发元素
  - 用matches 来判断是否是触发元素