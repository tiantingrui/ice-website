# 原型和原型链

- class 和 继承
- 类型判断 instanceof
- 原型和原型链

### class

> class 实际上就是构造函数的语法糖，本质还是函数

- constructor
- 属性
- 方法

#### 继承

- extends
- super
- 扩展和重写方法

### 类型判断 - instanceof

```js
[] instanceof Array // true
[] instanceof Object // true
{} instanceof Object // true
```

### 原型

- 构造函数的prototype (显示原型)
- 实例的`__proto__ `（隐式原型）

#### 基于原型的执行规则

- 现在自身属性和方法寻找
- 如果找不到则自动去 `__proto__` 中查找

### 原型链

instanceof 是基于原型链实现的

看一个易错点

```js
[typeof null, null instanceof Object]
// ['object', false]
```

instanceof 运算符是用来测试一个对象在其原型链构造函数上是否具有 prototype 属性，null 值并不是以 Object 原型创建出来的，所以 null instanceof Object 返回 false。