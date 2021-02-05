# 防抖和节流



#### 防抖

```js
function debounce(fn, delay) {
  let timer
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}
```



#### 节流

```js
function throttle(fn, delay) {
  let timer
  return () => {
    if (timer) return
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}
```

