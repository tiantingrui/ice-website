

# Nodejs的网络编程能力

#### 网络模型 OSI & TCP/IP

#### Socket? 套接字？ 快递盒？？？ 插座

- 实现底层通信，几乎所有的应用层都是通过 socket 进行通信
- 对 TCP/IP 协议进行封装，向应用层协议暴露接口调用
- TCP/IP协议族中，传输层存在两种协议：TCP、UDP
- 两种协议不同，因为不同的参数的socket 实现过程也不一样

#### Nodejs网络基础模块 - net/dgram

- net 模块是TCP/IP的Node实现，提供了一些用于底层的网络通信的小工具
- http.Server 继承自 net.Server
- http客户端与http服务端的通信均依赖于 socket (net.Socket)
  - net.Server: TCP server，内部通过socket来实现与客户端的通信
  - net.Socket: 本地socket 的 node 版实现，它实现了全双工的stream 接口

#### net.Socket

- net.Socket对象时TCP或UNIX Socket 的抽象
- net.Socket实例实现了一个双工流接口
- API归纳
  - 连接相关connect
  - 数据读写 write
  - 数据属性 bufferSize
  - 地址相关 address

#### 动手写一个案例感受一下

- 服务器A启动服务，等待连接
- 基于事件驱动，服务器B访问服务器A提供的服务
- 关闭数据请求，结束服务

#### Nodejs的网络编程-http/https/http2

- HTTP模块是Node的门脸，是编写 Web Server 最常见的模块
- Server 部分继承自net.Server，并对请求和响应数据进行了封装
- 也提供了request/get 的能力，允许向其他服务器端发起HTTP请求
- Node封装了HTTPS/HTTP2的实现，可以轻松创建HTTP服务