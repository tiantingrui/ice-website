# DOM



前言

+ vue 和 react 框架应用广泛，封装了DOM操作
+ 但DOM操作一直都是前端工程师的基础，必备知识
+ 只会vue 而不懂 DOM 操作的前端，不会长久

**注重基础**



### DOM操作（Document Object Model）

+ DOM本质
+ DOM节点操作
+ DOM结构操作
+ DOM性能



## DOM本质

类似XML HTML

DOM 本质是一颗树



## DOM节点操作

+ 获取DOM节点

```js
const div1 = document.getElementById('div1') // 元素
const divList = document.getElementByTagName('div') // 集合
console.log(diconsole.log()
console.log(divList[0])
const containerList = document.getElementByClassName('.container') // 集合
const pList = document.querySelectorAll('p') // 集合
```

+ DOM节点的attribute: 修改html 属性，会改变html结构

```js
const pList = document.querySelectorAll('p')
const p = pList[0]
p.getAttribute('data-name')
p.setAttribute('data-name', 'aa')
p.getAttribute('style')
p.setAttribute('style', 'font-size: 40px;')
```

+ DOM节点的property：修改对象属性，不会体现到html结构中

```js
const pList = document.querySelectorAll('p')
const p = pList[0]
console.log(p.style.width) // 获取样式
p.style.width = '100px' // 修改样式
console.log(p.className) // 获取class
p.className = 'p1' // 修改 class

// 获取nodeName 和 nodeType
console.log(p.nodeName)
console.log(p.nodeType)
```



##### attribute VS property

+ attribute：修改 html 属性，会改变 html 结构
+ property：修改对象属性，不会体现到 html 结构
+ 两者都有可能引起DOM重新渲染



## DOM结构操作

+ 新增/插入节点

```js
const div1 = document.getElementById('div1')
// 添加新节点
const p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
div1.appendChild(p1) // 添加新创建的元素
// 移动已有节点，注意是移动！！！
const p2 = document.getElementById('p2')
div1.appendChild(p2)
```

+ 获取子元素列表，获取父元素

```js
// 获取子元素列表
const div1 = document.getELementById('div1')
const child = div1.childNodes

// 获取父元素
const div1 = document.getELementById('div1')
const parent = div1.parentNode
```

+ 删除节点

```js
const div1 = document.getELementById('div1')
const child = div1.childNodes

div1.removeChild(cjild[0])
```



## DOM频繁操作性能优化

### DOM 性能

+ DOM操作非常昂贵，避免频繁的DOM操作
+ 对DOM查询做缓存
+ 将频繁操作改为一次性操作





#### DOM 查询做缓存

```js
// 不缓存DOM 查询结果
for (let i = 0; i < document.getELementByTagName('p').length; i++) {
  // 每次循环，都会计算length,频繁进行 DOM 查询
}

// 缓存 DOM 查询结果
const pList = document.egtElementByTagName('p')
const len = pList.length
for (let i = 0; i < len; i++) {
  // 缓存length , 只进行一次DOM 查询
}
```





#### 将频繁操作改为一次性操作

```js
const listNode = docuemnt.egtElementById('list')

// 创建一个文本片段，此时还没有插入到DOM树中
const frag = document.createDocumentFragment()

// 执行插入
for (let x = 0; x < 10; x++) {
  const li = document.createElement('li')
  li.innerHYML = 'List item' + x
  frag.appendChild(li)
}

// 都完成之后，再插入到DOM数中
listNode.appendChild(frag)
```

