# 变量类型和计算

### 变量类型

- 值类型和引用类型
- typeof 运算符
- 深拷贝

### 变量计算 - 类型转换

- 字符串拼接
- == 运算符

```js
100 = '100' // true
0 == '' // true
0 == false // true
false == '' // true
null == undefined // true
```

- if 语句和逻辑运算

**truly 变量**：!!a === true 的变量

**falsely变量**：!!a === false 的变量

```js
// 以下是 falsely 变量。除此之外都是 truth变量
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false
```

#### 常见考点

- typeof 能判断哪些类型

  - 识别所有值类型
  - 识别函数
  - 判断是否是引用类型（不可细分）

- 何时使用 === ，何时使用 ==

  - 除了 == null 之外，其他都一律用 ===

- 值类型和引用类型的区别

  - 值类型 - 栈内存
  - 引用类型 - 堆内存

- 手写深拷贝

  - 注意判断值类型和引用类型
  - 注意判断是数组还是对象
  - 递归

  ```js
  function deepCLone(obj = {}) {
      if (typeof obj !== 'object' || obj == null) {
          return obj
      }
      // let newObj = obj instanceof Array ? [] : {}
      let newObj = Array.isArray(obj) ? [] : {}
      for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
              // 保证key 不是原型的属性
              newObj[key] = deepClone(obj[key])
          }
      }
      return newObj
  }
  ```

