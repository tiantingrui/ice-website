# 实现bind



```js
Function.prototype.bind2 = function() {
  const args = [].slice(arguments)
  const t = args.shift()
  return () =< {
    return this.apply(t, args)
  }
}
```

