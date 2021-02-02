# Node.js 数据类型

### 1. Buffer

+ 流式数据（非一次性加载完成的数据）由于产生和使用不一定同速，所以需要缓存区

- 寸尺需要临时占用大量内存的数据，内存中开辟的一片区域，用于存放二进制数据
- 流的生产者于消费者之间的速度通常是不一致的，因此需要buffer来暂存一些数据
- buffer大小通过highWaterMark参数指定，默认情况是16kB

#### 创建Buffer

```js
1. Buffer.from(buffer|array|string) 使用 堆外内存 新增buffer
2. Buffer.from(arrayBuffer) 浅拷贝 arrayBuffer, 共享内存
1. Buffer.alloc(size) 分配一个指定大小的 Buffer, 默认填0，使用UTF-8编码
2. Buffer.allocUnsafe(size) 分配一个未初始化的Buffer
1. 流式数据会 自动创建 Buffer, 手动创建 Buffer 需谨慎
```

#### 创建Buffer - 坑

```
1. 预分配一个内部大小为Buffer.poolSize(8K)的 Buffer 实例，作为快速分配的内存池
2. 如果allocUnsafe/from(array) 的 size 小于4K，则从预分配的池子中分配
1. 绕开V8回收机制，使用专用回收机制，提高性能和内存使用效率
2. 但这种玩法会导致未初始化的数据块投入使用，造成数据泄露风险
```

#### 使用buffer

- 转换格式
  - 字符串：编码Buffer.from(string)，解码buf.toString()
  - JSON：buf.toJSON()
- 剪裁和拼接
  - 剪裁：Buffer.slice() 表现与 Array.slice() 不同，返回Buffer 与原buf 共享内存
  - 拼接：buf.copy/buf.concat 返回新的Buffer
- 比较和遍历索引
  - 判断相等：buf1.equals(buf2) 比较的是二进制的值
  - 索引：使用buf[index]形式进行索引，for...of/indexOf/includes 等Array方法也可以使用

### 

### 2. Stream

+ Stream 模块提供的是**抽象接口**，有很多模块实现了这个接口

- Stream 就是解决生产者和消费者问题的 一种方式， **解决异步IO问题**
- Stream 模块对于流的使用者而言无需关心 **readableSrc.pipe(writableDest)**





### 3. Event/EventEmitter



```
 EventEmitters --> Event (会进行event loop) --> Event Handlers
```



### 4. Error

#### **错误种类**

- 标准的JavaScript错误，比如：**SyntaxError / ReferenceError**
- 底层操作触发的系统错误，比如：**文件读写**
- 用户自定义错误
- 异常逻辑触发的AssertionError，通常来自assert模块

#### **错误冒泡和捕获**

- 所有通过Node.js或JavaScript运行时抛出的异常都是Error实例
- 大多数的异步方法都接受一个callback函数，该函数会接收一个Error对象传入作为第一个参数

**好好读一下Node.js内置的错误信息，通常是见文知意，例如：ERR_ARG_NOT_ITERABLE**



### 5. URL

- 弃用urlObjects，改用WHATWGURL
- 使用URLSearchParams操作参数

```js
Object.fromEntries(new URLSearchParams('foo=bar & baz = qux'))
// {foo: 'bar', baz: 'qux'}

url.path(req.url).pathname
url.parse(req.url).query
Querystring.parse(url.parse(req.url).query)['params2']
```

### 

### 6. 全局变量 - global

- **看上去像是全局变量的 存在，实际上仅存在于模块的作用域中**
  - __dirname
  - __filename
  - exports
  - module
  - require()
- **从JavaScript继承而来的全局变量**
  - console
  - timer 全家桶
  - global (容器)
- **Node.js特有的全局变量**
  - Buffer
  - process
  - URL
  - WebAssembly

