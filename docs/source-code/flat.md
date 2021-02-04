# 实现数组扁平化

前言：

1. 怎样用最普通的方式解决数组扁平化问题？
2. ES6里面是否有一些高级的方法能直接实现它呢？



#### 扁平化的实现

数组的扁平化其实就是将一个嵌套多层的数组 array（嵌套可以是任何层数）转换为只有一层的数组。举个简单的例子，假设有个名为 flatten 的函数可以做到数组扁平化，效果如下面这段代码所示。

```js
var arr = [1, [2, [3, 4，5]]];
console.log(flatten(arr)); // [1, 2, 3, 4，5]
```

其实就是把多维的数组“拍平”，输出最后的一维数组。那么你知道了效果是什么样的了，下面就尝试着写一个 flatten 函数吧。实现方式有下述几种。



##### 方法一：普通的递归实现

```js
var arr = [1, [2, [3, 4，5]]];
function flatten(arr) {
  // 如果是一维数组，直接返回
  const flag = arr.some(item => Array.isArray(item))
  if (!flag) {
    return arr
  }
  // [].concat(arr)
  const rst = Array.prototype.concat.apply([], arr)
  return flat(rst) // 递归
}
console.log(flatten(arr)) //  [1, 2, 3, 4，5]
```



##### 方法二：利用reduce函数迭代

```js
var arr = [1, [2, [3, 4，5]]];
function flatten(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}
console.log(flatten(arr)) //  [1, 2, 3, 4，5]
```



##### 方法三：拓展运算符的实现

```js
var arr = [1, [2, [3, 4，5]]];
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten(arr)) //  [1, 2, 3, 4，5]
```



##### 方法四：split和toString 共同处理

```js
// 方法4
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.toString().split(',');
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]
```



##### 方法五：调用 ES6 中的 flat

我们还可以直接调用 ES6 中的 flat 方法，可以直接实现数组扁平化。先来看下 flat 方法的语法：

> arr.flat([depth])

其中 depth 是 flat 的参数，depth 是可以传递数组的展开深度（默认不填、数值是 1），即展开一层数组。那么如果多层的该怎么处理呢？参数也可以传进 Infinity，代表不论多少层都要展开。那么我们来看下，用 flat 方法怎么实现，请看下面的代码。

```js
// 方法5
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]
```

可以看出，一个嵌套了两层的数组，通过将 flat 方法的参数设置为 Infinity，达到了我们预期的效果。其实同样也可以设置成 2，也能实现这样的效果。

因此，你在编程过程中，发现对数组的嵌套层数不确定的时候，最好直接使用 Infinity，可以达到扁平化。下面我们再来看最后一种场景。

##### 方法六：正则和 JSON 方法共同处理

```js
let arr = [1, [2, [3, [4, 5]]], 6];
function flatten(arr) {
  let str = JSON.stringify(arr);
  str = str.replace(/(\[|\])/g, '');
  str = '[' + str + ']';
  return JSON.parse(str); 
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]
```

