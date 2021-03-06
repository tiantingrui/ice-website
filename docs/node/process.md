# Node.js的进程管理

### 操作系统的进程和线程

- 运行任务的程序叫做“进程”，一个进程只能执行一个任务
- 进程并发：以多进程形式，允许多个任务同时运行
- 线程并发：以多线程形式，允许单个任务分成不同的部分运行
- 操作系统是提供协调机制，防止冲突，共享资源
- JavaScript是单线程语言，所以多个任务只能排队进行

### 多进程vs多线程

| 维度       | 多进程                                          | 多线程                                   | 比较       |
| ---------- | ----------------------------------------------- | ---------------------------------------- | ---------- |
| 数据共享   | 数据共享复杂，需要用IPC；数据是分开的，同步简单 | 因为共享进程数据，数据共享简单，同步复杂 | 各有千秋   |
| 资源利用   | 占用内存多，切换复杂，CPU利用率低               | 占用内存少，切换简单，CPU利用率高        | 多线程更好 |
| 性能开销   | 创建销毁，切换复杂，速度慢                      | 创建销毁，切换简单，速度很快             | 多线程更好 |
| 编码实践   | 编码简单、调式方便                              | 编码、调试复杂                           | 多进程更好 |
| 可靠性     | 进程独立运行，不会相互影响                      | 线程同呼吸共命运                         | 多进程更好 |
| 分布式支持 | 可用于多机多核分布式，易于拓展                  | 只能用于多核分布式                       | 多进程更好 |

### Event Loop

- JavaScript 通过EventLoop 的形式解决单线程任务调度问题
- EventLoop 是一个程序结构，用于等待和发送消息和事件
- 浏览器的EventLoop和Node的EventLoop是两个概念

#### 浏览器的 EventLoop

#### Nodejs的 EventLoop

### Nodejs 进程 - process

- process 是一个全局对象，无需require 直接使用，提供进程描述
- process对象是 EventEmiter 的实例，暴露了进程事件的钩子
  - exit 监听进程退出
  - uncaughtException 监听异常
- 提供标准流输出，对应的是进程的 I/O 操作
  - node 版本的 console 底层是由 stdio 实现的
  - 数据流与其他双工数据流不同，同步写会阻塞进程导致性能开销

### Nodejs 进程创建 - child_process/cluster

- child_process 是 Node.js 的内置模块
  - spawn：适用于返回大量数据，例如图像处理，二进制数据处理
  - exec：适用于小量数据，maxBuffer 默认值为 200 * 1024 超出奔溃
  - fork：衍生新的进程，进程 之间是仙湖独立的，每个进程独立
- cluster 是 Node.js的内置模块
  - Worker 对象包含了关于工作进程的所有的公共的信息和方法
  - fork：衍生新的进程，进程之间是相互独立的，每个进程独立
  - 使用主从模型轮询处理服务的负载任务，通过IPC通信

### 进程守护

- 最佳实践说：该挂就挂，挂了怎么自启动？
- 进程并发：以多进程形式，允许多个任务同时运行
- 线程并发：以多线程形式，允许单个任务分成不同的部分运行
- 操作系统提供协调机制，防止冲突，共享资源
- JavaScript是单线程语言，所以多个任务只能排队进行

**使用工具实现进程守护 pm2 forever**