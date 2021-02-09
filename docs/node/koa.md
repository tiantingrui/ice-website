# koa

Nodejs Web 框架对比

| 框架名称       | 特性                             | 评价                                                         |
| -------------- | -------------------------------- | ------------------------------------------------------------ |
| Express        | 简单、实用，路由中间件等五脏俱全 | 最著名的Web 框架                                             |
| Hapi & Restify | 面向API & 微服务                 | 移动互联网时代API的作用被放大，故而独立分类，尤其对微服务开发更是利器 |
| ThinkJS        | 面向新特性                       | 借鉴ThinkPHP，并慢慢走出自己的一条路，长于新特性支持，新版三元整是基于Koa v2.0 作为内核的 |
| Koa            | 专注于异步流程改进               | 下一代Web 框架                                               |
| Egg            | 基于Koa，在开发上有极大便利      | 企业级Web 开发框架                                           |

## Koa 概览

- Express 很简洁，Koa更简洁
- Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的
- 内置优雅的底层中间件处理内容协商，缓存清理，代理支持和重定向等常见任务的方法，开箱即用



**洋葱模型**



**Koa 常用插件**

- koa-static
  - 处理静态资源
- koa-router
  - 处理路由
- koa-session
  - 保持网络请求状态
- koa-bodyparser
  - 处理请求体
- koa-compress
  - 压缩响应数据
- koa-logger
  - 输出服务日志
- koa-error
  - 处理响应错误





#### Koa 与 Express 的异同

| Koa                                   | Express                          |
| ------------------------------------- | -------------------------------- |
| 更优雅的编程体验                      | Node.js至今最流行框架            |
| 核心轻量，插件生态庞大                | 提供了Web 中间件的标准           |
| 内置异步流控制                        | 简单快捷可拓展                   |
| 与Express生态不兼容，有自己的开发生态 | 维护成本高。对系统设计能力要求高 |
| 入手简单，便于企业级实践              | 学习曲线低，入手简单             |

### 



## Koa 源码概览

#### 项目概览

- application.js
- context.js
- request.js
- response.js

#### 项目核心依赖

- accepts
  - 网络请求 类型管理
- cache-content-type
  - 可缓存的ContentType管理器
- only
  - 属性筛选器
- delegates
  - JavaScript委托库
- koa-compose
  - 中间件组合器
- koa-convert
  - 1.x转换器
- http-assert
  - 网络请求断言库
- statuses
  - 语义化HTTP响应码

#### 目录结构

- benchmark性能基准测试
- docs文档目录
- libs核心文件
  - application主应用
  - context上下文
  - request 请求
  - response 响应
- test 单测

#### 源码架构



## 构造一个可用运行的Server

#### Application 源码解析

- 模块依赖
  - 原生依赖 events.Emitter util stream http
  - 第三方工具依赖
    - koa-compose http-errors statuses
    - koa-convert is-generator-function
    - depd only debug on-finished
  - 内置模块依赖 request response context
- **核心类Application 初始化配置**

#### Koa-compose

- 基于Promise 的流程控制方式，对异步流程同步化，解决链式耦合
- 将输入数组中的函数一次调用
- 提供一个数组函数公用的上下文 ctx
- 提供一个数组函数之间串联的 next 指针
- **核心代码逻辑为：递归遍历数组**

#### 实战

```
//koa.js
//* const app = new Koa()
//* app.use()
//* app.listen()
const http = require('http')

class Koa {
    middleware = () => {}

    constructor() {}

    listen(port, cb) {
        const server = http.createServer((req, res) => {
            this.middleware(req, res)
        });
        server.listen(port, cb)
    }

    use(middleware) {
        this.middleware = middleware
        return this
    }
}

module.exports = Koa
//app.js
const Koa = require('./koa')

const app = new Koa()

app.use((req, res) => {
    res.writeHead(200)
    res.end('hello Koa')
})

app.listen(3000, () => {
    console.log('Server is running on 3000')
})
```

### 编写最小系统（TS写法）

```
// koa.ts
const http = require('http')

class Koa {
    private middleware: middlewareFn = () => {};
    
    constructor() {}

    listen(port: number, cb: noop) {
        const server = http.createServer((req, res) => {
            this.middleware(req, res)
        })
        return server.listen(port, cb)
    }
    
    use(middlewareFn: middlewareFn) {
        this.middleware = this.middleware
        return this
    }
}
```

#### 编写测试

```
import Koa from './koa'

const app = new Koa()

app.use((req, res) => {
    res.writeHead(200)
    res.end('A request come in')
})

app.listen(3000, () => {
    console.log('Server listen on port 3000')
})
```

### 