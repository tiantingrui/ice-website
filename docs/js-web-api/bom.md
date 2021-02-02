# BOM



BOM操作（Browser Object Model）

+ navigator

+ screen

+ location

+ history



### navigator & screen

```js
// navigator
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(isChrome)

// screen
console.log(screen.width)
console.log(screen.height)
```

 

### location & history

```js
// location
location.href
location.protocol // http https
location.pathname // /learn/199
location.search
location.hash

// history
history.back() // 后退
history.forward() // 前进
```





#### 如何识别浏览器的类型

```js
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```





#### 分别拆解 url 多个部分

```js
location.href
location.protocol // http https
location.pathname // /learn/199
location.search
location.hash
```

