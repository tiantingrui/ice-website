# Node的模块机制以及原理

#### CommonJS

- 模块引用

通过require(module)来引入module

- 模块定义

通过挂载在module.exports对象上实现定义

- 模块标识

通过路径标识引入的是哪个模块

#### Nodejs的模块机制 - Node的实现

路径分析 -> 文件定位 -> 编译执行 -> 加入缓存

#### 路径分析

- 内置模块
  - 在Node进程开始的时候就开始预加载了
  - 加载的是二进制文件，无需定位和编译
- 文件模块
  - 通过NPM安装到第三方模块
  - 本地模块
- 模块内容
  - 函数、对象或者属性，如函数、数组甚至任意类型的JS对象

#### 模块加载的优先级

1. 已缓存模块
2. 内置模块
3. 文件模块
4. 文件目录模块
5. node_modules模块

#### 模块文件定位

1. 拓展名判断
   1. .js文件
   2. .json文件
   3. .node文件
2. 解析package.json
   1. 解析为对象
   2. 读取main指定的路径
3. 查找入口文件
   1. 将 index 作为默认值
   2. 查看index.js
   3. index.json
   4. index.node
4. 进入下一个模块路径
   1. 在父目录中重复以上步骤
   2. 轮询后依旧失败则报错

#### 模块编译执行

- .js 文件
- 通过fs模块同步读取后编译执行，未识别类型也会当做js处理
- .json文件：
- 通过fs模块同步读取后，用JSON.parse() 解析并返回结果
- .node文件：
- 这是用 C/C++ 写的拓展文件，通过process.dlopen 方法加载最后编译生成的

#### 模块js文件的编译

- 注入全局变量
  - 以参数形式，注入module/exports/require 方法
  - 同时注入注入路径解析时得到的 __filename/ __dirname
- 构建上下文环境
  - 闭包产生作用域，通过 runInThisContext() 执行
  - 将function 对象挂载到exports 对象上，并导出

#### 加入缓存以及清除缓存

- 核心模块
  - 登记在 NativeModule._cache 上
- 文件模块
  - 封装后的方法以字符串形式存储，等待调用
- 清除缓存
  - 通过delete require.cache[require.resolve(module)]

#### require vs import

- import
  - ES6的规范
  - 静态加载模块
  - 编译的时候执行代码
  - 缓存执行结果
  - 按需引入，节省内存
- require
  - commonJS规范
  - 动态加载模块
  - 调用的时候加载源码
  - 加载全部代码

## 