# 实现 instanceof



#### instanceof

我们 new 一个对象，那么这个新对象就是它原型链继承上面的对象了，通过 instanceof 我们能判断这个对象是否是之前那个构造函数生成的对象，这样就基本可以判断出这个新对象的数据类型。

这里先对比一下关于 typeof 和 instanceof 的**区别**

1. instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型

2. typeof 可以判读 基础数据类型（null 除外），但是引用数据类型中，出了 function 类型意外，其他的也无法判断

   

我们来手动实现一个**instanceof**

```js
function myInstanceof(left, right) {
  // 这里先用typeof 来判断是否是基础数据类型，如果是，直接返回 false
  if (typeof left !== 'object' || left === null) return false
  // getPrototypeof 能够拿到参数的原型对象
  let proto = Object.getPrototypeof(left)
  // 循环往下寻找，知道找到相同的原型对象
  while(true) {
    if (proto === null) return false
    if (proto === right.prototype) return true // 找到相同原型对象，返回true
    // 没找到，沿着原型链往上一层拿原型对象
    proto = Object.getPrototypeof(proto)
  }
}


// 验证一下自己实现的myInstanceof是否OK
console.log(myInstanceof(new Number(123), Number));    // true
console.log(myInstanceof(123, Number));                // false
```



总之，不管单独用 typeof 还是 instanceof，都不能满足所有场景的需求，而只能通过二者混写的方式来判断。但是这种方式判断出来的其实也只是大多数情况，并且写起来也比较难受，你也可以试着写一下。



拓展一下：如何更好的解决**数据类型检测问题**



#### Object.prototype.toString

toString() 是 Object 的原型方法，调用该方法，可以统一返回格式为 “[object Xxx]” 的字符串，其中 Xxx 就是对象的类型。对于 Object 对象，直接调用 toString() 就能返回 [object Object]；而对于其他对象，则需要通过 call 来调用，才能返回正确的类型信息。我们来看一下代码

```js
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"
```

从上面这段代码可以看出，Object.prototype.toString.call() 可以很好地判断引用类型，甚至可以把 document 和 window 都区分开来。

但是在写判断条件的时候一定要注意，使用这个方法最后返回统一字符串格式为 "[object Xxx]" ，而这里字符串里面的 "Xxx" ，**第一个首字母要大写**（注意：使用 typeof 返回的是小写），这里需要多加留意。

这里我们也来实现一个全局通用的数据类型判断方法，来加深理解。

```js
function getType(obj) {
  let type = typeof obj
  // 先进行 typeof 判断，如果是基础数据类型，直接返回
  if (type !== 'object') {
    return type 
  }
  return Object.prototype.toString.call(obj).replac[e(/^\[object (\S+)\]$/, '$1') // 注意正则中有个空格
}

/* 代码验证，需要注意大小写，哪些是typeof判断，哪些是toString判断？思考下 */
getType([])     // "Array" typeof []是object，因此toString返回
getType('123')  // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "undefined" typeof 直接返回
getType()            // "undefined" typeof 直接返回
getType(function(){}) // "function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回
```



