# 深拷贝

```js
function deepCLone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let rst = Array.isArrsy(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 保证key 不是原型的属性
      rst[key] = deepClone(obj[key])
    }
  }
  return rst
}
```

