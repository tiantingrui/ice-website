# Nodejs 的文件操作能力

####  1. os

- os模块提供了与操作系统相关的实用方法和属性
- 通过兼容的方式调用不同平台的底层命令，形成系统快照

```
cpus、platform、type、uptime、userInfo
```

- 定义操作系统级别的枚举常量

```
信号常量 SIG* 、 错误常量E* 、Windows特有WSA* 、 优先级PRIORITY*
```

#### 2. fs

- fs 模块模拟linux环境，提供了用于与文件系统进行交互的API
- 所有的文件系统操作都具有同步和异步的姓氏
- URI作为特殊的文件也可以被fs模块使用
- 操作文件夹
  - mkdir/rmdir
- 操作文件
  - chmod/open/read/write