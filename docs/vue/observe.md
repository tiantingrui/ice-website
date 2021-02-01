# Vue 响应式原理



+ 监听data的数据一旦变化，立刻触发视图的更新
+ 实现数据驱动视图的第一步





### 监听data变化的核心API

+ **Object.defineProperty**
+ 如何实现响应式
+ Object.defineProperty的一些缺点（Vue3 改为 Proxy）



#### Proxy 有兼容性问题

+ Proxy 兼容性不好（IE11）, 且无法 polyfill
+ 现状：Vue2.x 生态完善，还会存在一段时间，官方表明还会继续维护 Vue2 18个月



#### Object.defineProperty 基本用法

```js
const data = {}
const name = 'terry'
Object.defineProperty(data, 'name', {
  get() {
    console.log('get')
    return name
  },
  set(newVal) {
    console.log('set')
    name = newVal
  }
})

// test
console.log(data.name) // get terry
data.name = 'zmn' // set
```



#### Object.defineProperty 实现响应式

+ 监听对象、监听数组
+ 复杂对象，深度监听
+ 几个缺点



##### 深度监听

```js
// 触发更新视图
function updateView() {
    console.log('视图更新')
}

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
    // 深度监听，就是说如果value 是 个对象
    observer(value)

    // 核心API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newVal) {
            if (newVal !== value) {
                // 深度监听， 万一set 的值是一个 object，下次更新之后就会监听到
                observe(newVal)

                // 设置新值
                // 注意， value 一直在闭包中，此处设置完之后，在get 时也是会获取最新的值
                value = newVal

                // 触发更新视图
                updateView()
            }
        }
    })
}

// 监听对象属性
function observer(target) {
    if (typeof target !== 'object' || target === null) {
        // 不是对象或者数组
        return target
    }
    // 重新定义各个属性（for in 也可以遍历数组）
    for (let key in target) {
        defineReactive(target, key, target[key])
    }
}

// 准备数据
const data = {
    name: 'terry',
    age: 25,
    // info: {
    //     base: '杭州'
    // },
    // list: [10, 20, 30]
}

// 监听数据
observer(data)

// 测试
data.name = 'zmn'
data.age = 24
data.x = '100' // 新增属性，监听不到 -- 所以有 Vue.set
delete data.name // 删除属性，监听不到 -- 所以有 Vue.delete
data.info.base = '北京' // 深度监听
// data.list.push(40) // 监听数组
```

##### 监听数组

```js
// 触发更新视图
function updateView() {
    console.log('视图更新')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype
// 创建新对象，原型指向 oldArrayProperty，再拓展新的方法不会影响原型，这样做避免污染全局原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift'].forEach(methodName => {
    arrProto[methodName] = function() {
        updateView() // 触发视图更新
        oldArrayProperty[methodName].call(this, ...arguments)
        // Array.prototype[methodName].call(this, ...arguments)
    }
})
// 重新定义属性，监听起来
function defineReactive(target, key, value) {
    // 深度监听，就是说如果value 是 个对象
    observer(value)

    // 核心API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newVal) {
            if (newVal !== value) {
                // 深度监听， 万一set 的值是一个 object，下次更新之后就会监听到
                observe(newVal)

                // 设置新值
                // 注意， value 一直在闭包中，此处设置完之后，在get 时也是会获取最新的值
                value = newVal

                // 触发更新视图
                updateView()
            }
        }
    })
}

// 监听对象属性
function observer(target) {
    if (typeof target !== 'object' || target === null) {
        // 不是对象或者数组
        return target
    }

    if (Array.isArray(target)) {
        target.__proto__ = arrProto
    }

    // 重新定义各个属性（for in 也可以遍历数组）
    for (let key in target) {
        defineReactive(target, key, target[key])
    }
}

// 准备数据
const data = {
    name: 'terry',
    age: 25,
    info: {
        base: '杭州'
    },
    list: [10, 20, 30]
}

// 监听数据
observer(data)

// 测试
data.name = 'zmn'
data.age = 24
data.x = '100' // 新增属性，监听不到 -- 所以有 Vue.set
delete data.name // 删除属性，监听不到 -- 所以有 Vue.delete
data.info.base = '北京' // 深度监听
data.list.push(40) // 监听数组
```

### Object.defineProperty 的缺点

- 深度监听，需要递归到底，一次性计算量大
- 无法监听新增属性/删除属性（Vue.set Vue.delete）
- 无法原生监听数组，需要特殊处理