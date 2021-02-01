# HTTP

### topic

- http 常见的状态码有哪些
- http常见的header 有哪些
- 什么是Restful API
- 描述一下http 的缓存机制（重要）

## http 状态码

- 状态码分类
- 常见状态码
- 关于协议和规范

### 状态码分类

- 1xx 服务器收到请求
- 2xx 请求成功，如200
- 3xx 重定向，如 302
- 4xx 客户端错误，如404
- 5xx 服务端错误，如500



### 常见状态码

- 200 成功
- 301 永久重定向（配合 location ，浏览器自动处理）
- 302 临时重定向（配合 location ，浏览器自动处理）
- 304 资源未被修改（不属于重定向）比如说有缓存
- 403 没有权限
- 404 资源未找到
- 500 服务器错误
- 504 网关超时

### 关于协议和规范

- 就是一个约定
- 要求大家都跟着执行
- 不要违反规范，例如IE浏览器

## http methods

- 传统的methods
  - get 获取服务器的数据
  - post 向服务器提交数据
  - 简单的网页功能，就这两个操作
- 现在的methods
  - get 获取数据
  - post 新增数据
  - patch/put 更新数据
  - delete 删除数据
- Restful API
  - 一种新的API设计方法（早已推广使用）
  - 传统API设计：把每个 url 当作一个功能
  - restful API 设计：把每个 url 当做一个唯一的资源

#### 如何设计成一个资源？

- 尽量不用 url 参数
- 用 method 表示操作类型

#### 不使用url参数

- 传统API设计： /api/list?pageIndex =2
- Restful API 设计： /api/list

#### 用method表示操作类型

**传统API设计**

- post请求 /api/create-blog
- post请求 /api/update-blog?id=100
- get请求 /api/get-blog?id=100

**Restful API设计**

- post请求 /api/blog
- patch请求 /api/blog/100
- get请求 /api/blog/100

## http headers

- 常见的 Request Headers
- 常见的Response Headers

### Request Headers

- Accept 浏览器可接受的数据格式
- Accept-Encoding 浏览器可接收的压缩算法，如gzip
- Accept-Language 浏览器可接收的语言，如zh-CN
- Connection: keep-alive 一次TCP连接重复使用
- Cookie(浏览器会自动携带同域的cookie)
- Host
- User-Agent(简称UA)浏览器信息
- Content-Type 发送数据的格式，如application/json

### Response Headers

- Content-Type 返回数据的格式，如application/json
- Content-length 返回数据的大小，多少字节
- Content-Encoding 返回数据的压缩算法，如gzip
- Set-Cookie

### 自定义header

> axios-js.com/docs/#Request-Config

```
// `headers` are custom headers tobe sent
headers: {'X-Requested-with': 'XMLHttpRequest'},
```

### 缓存相关的headers

- Cache-Control Expires
- Last-Modified If-Modified-Since
- Etag If-None-Match

## http 缓存

- 关于缓存的介绍
- http 缓存策略（强制缓存+协商缓存）
- 刷新操作方式，对缓存的影响

### 关于缓存

**什么是缓存？**

**为什么需要缓存？**

- 让页面加载更快些

**哪些资源可以被缓存**

- 静态资源 （js css img）

## http 缓存 - 强制缓存

#### Cache-Control

- Response Headers 中
- 控制强制缓存的逻辑
- 例如Cache-Control: max-age=31536000(单位是秒， 一年)

[![image-20210131160829774](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131160829774.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/计算机网络/img/image-20210131160829774.png)

[![image-20210131161004001](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131161004001.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/计算机网络/img/image-20210131161004001.png)

#### Cache-control 的值

- max-age - 缓存时间
- no-cache - 不用强制缓存，去服务端请求，服务端怎么处理我们不管
- no-store - 不用本地缓存，也不用服务端的一些缓存措施（协商缓存....）,更彻底（每次拿最新的）
- private - 电脑、浏览器个人做缓存
- public - 中间路由做代理也可以做缓存

#### 关于Expires

- 同在 Response Headers 中
- 同为控制缓存过期
- 已被Cache-Control 代替

## http缓存 - 协商缓存（对比缓存）

- 服务端缓存策略
- 服务端判断客户端资源，是否和服务端资源一样
- 一致返回304，否则返回200和最新的资源

[![image-20210131162110067](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162110067.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/计算机网络/img/image-20210131162110067.png)

#### 资源标识

- 在Response Headers 中，有两种
- Last-modified 资源的最后修改时间
- Etag 资源的唯一标识（一个字符串，类似人类的指纹）

#### Last-Modified

[![image-20210131162429441](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162429441.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/计算机网络/img/image-20210131162429441.png)

#### Etag

[![image-20210131162805634](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162805634.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/计算机网络/img/image-20210131162805634.png)

#### Headers 示例

[![image-20210131162927822](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131162927822.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/计算机网络/img/image-20210131162927822.png)

##### 请求示例

[![image-20210131163005897](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131163005897.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/计算机网络/img/image-20210131163005897.png)

### Last-Modified 和 Etag 共存

- 会优先使用Etag
- Last-Modified 只能精确到秒级
- 如果资源被重复生成，而内容不变，则Etag 更精确

#### 缓存流程

[![image-20210131163411129](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/img/image-20210131163411129.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/计算机网络/img/image-20210131163411129.png)

## 刷新页面对缓存的影响

### 三种刷新操作

- 正常操作：地址栏输入 url ，跳转链接，前进后退等
- 手动刷新：F5，点击刷新按钮，点击菜单刷新 command + R
- 强制刷新：ctrl + F5 / command + shift + R

#### 不同刷新操作，不同的缓存策略

- 正常操作：强制缓存有效，协商缓存有效
- 手动刷新：强制缓存失效，协商缓存有效
- 强制刷新：强制缓存失效，协商缓存失效

<details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog" style="box-sizing: border-box; display: block;"><summary data-hotkey="l" aria-label="Jump to line" role="button" style="box-sizing: border-box; display: list-item; cursor: pointer; list-style: none;"></summary></details>