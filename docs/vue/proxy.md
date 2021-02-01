# Vue3 - Proxy 实现响应式

- 对比Object.defineProperty
- Proxy实现响应式
- 两者对比

## Object.defineProperty

```
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

## Proxy 实现响应式

- 基本使用
- Reflect

### Proxy 基本使用

```
const data = {
    name: 'terry',
    age: 25
}

// const data = ['a', 'b', 'c']

const proxyData = new Proxy(data, {
    get(target, key, receiver) {
        // 只处理本身（非原型）的属性
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
            console.log('get', key)
        }
        const result = Reflect.get(target, key, receiver)
        console.log('get', key)
        return result // 返回结果
    },
    set(target, key, val, receiver) {
        // 重复的数据不处理
        const oldVal = target[key]
        if (val === oldVal) {
            return true
        }
        const result = Reflect.set(target, key, val, receiver)
        console.log('set', key, val)
        console.log('result', result)
        return result // 是否式设置成功
    },
    deleteProperty(target, key) {
        const result = Reflect.deleteProperty(target, key)
        console.log('delete property', key)
        console.log('result', result)
        return result // 是否删除成功
    }
})
```

### Reflect 作用

- 和Proxy能力一一对应
- 规范化、标准化、函数式
- 替代掉 Object 上的工具函数，让Object 更纯净

### Proxy 实现响应式

- 深度监听，性能更好
- 可监听 新增/删除 属性
- 可监听数组变化（原生支持数组变化）

## 总结

- Proxy 能 规避掉Object.defineProperty 的问题
- Proxy 无法兼容所有浏览器，无法polyfill