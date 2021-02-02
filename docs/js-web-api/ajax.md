# ajax

- XMLHttpRequest
- 状态码
- 跨域：同源策略，跨域解决方案

## XMLHttpRequest

##### xhr.readyState

[![image-20210126101453322](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/javascript/img/image-20210126101453322.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/javascript/img/image-20210126101453322.png)

##### xhr.status

- 2xx - 表示成功处理请求， 200
- 3xx - 需要重定向 浏览器直接跳转，如301， 302， 304
- 4xx - 客户端请求错误， 403， 404
- 5xx - 服务器端错误



## 跨域

- 什么是跨域（同源策略）
- JSONP
- CORS（服务端支持）

#### 同源策略

- ajax 请求时，浏览器要求当前网页和 server 必须同源（安全）
- 同源：协议、域名、端口，三者必须一致

##### 加载图片 css js 可无视同源策略

[![image-20210126102136055](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/javascript/img/image-20210126102136055.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/javascript/img/image-20210126102136055.png)

- 可用于统计打点，可使用第三方统计服务

- <script> 可使用 CDN ,CDN 一般是外域

- <script> 可实现JSONP

#### 跨域

- 所有的跨域，都必须经过 server 端允许和配合
- 未经 server 端允许就实现跨域，说明浏览器有漏洞，危险信号

#### JSONP

- 访问 [https://www.baidu.com](https://www.baidu.com/) ，服务端一定返回一个 html 文件吗？
- 服务器可以任意动态拼接数据返回
- 所以，<script> 就可以获得跨域的数据，只要服务端愿意返回

```htm;
<script>
        window.callback = functiion (data){
            console.log(data)
        }
</script>
<script src="http://xxx.xxx/api.js" /> 
```



##### jQuery 实现 jsonp

[![image-20210126103041038](https://github.com/tiantingrui/up_2021/raw/main/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/javascript/img/image-20210126103041038.png)](https://github.com/tiantingrui/up_2021/blob/main/前端面试题/javascript/img/image-20210126103041038.png)

#### CORS - 服务器设置 http header

```js
// 允许跨域, 不建议直接写 *
res.setHeader("Access-Control-Allow-Origin", "*"); 
res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

// 允许跨域cookie
res.setHeader("Access-Control-Allow-Credentials","true")
```



### 常见的ajax 库

- $.ajax()
- fetch()
- axios

### topic

- 手写一个ajax

```js
// ajax
const xhr = new XMLHttpRequest()

xhr.open('GET', "/api", true)

xhr.onreadystatechange = function() {
    // 这里的函数异步执行
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            alert(xhr.responseText)
        }
    }
}

xhr.send(null)

xhr.open('POST', '/login', true) // true 是否异步

const postData = {
    username: 'terry',
    password: '123'
}

xhr.send(JSON.stringify(postData))
```

- promise 实现

```js
// promise 实现 ajax
function ajax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else if (xhr.status = 404) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
}
const url = '/data/test.json'
ajax(url)
.then(res => console.log(res))
.catch(e => console.error(e))
```

- 跨域的常用实现方式

  - JSONP

  - CORS（server）
  - 代理

## 