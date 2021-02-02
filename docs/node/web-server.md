# Nodejs 原生 Web Server 实战

node 更适合做IO密集型服务

## Web Server 的构成

#### 处理HTTP

对HTTP的动词（GET/POST/PUT）进行响应

#### 路由管理

分别吃力不同URL路径的请求，返回对应的网络资源

#### 静态文件托管

对网络请求的静态资源进行响应或使用模块动态响应请求

#### 文件数据存储

将请求携带的数据存储到文件或者数据库中

### Web Server 的基本架构

- 简单一点的

```
Client <==>(HTTP req && res) Web Server <==> DataBase
```

- 复杂一点的

```
Client <==>(HTTP req && res) Web Server <==> Application Server <==> DataBase
```



## node 作为 Web Server 的优势

#### 优势

- **并发性能优异**

  基于事件驱动的服务在响应请求的场景中有极高的并发性能表现

- **JavaScript同构**

  减少学习成本，使用最流行的Js或其他可编译/转换为Js的语言均可实现

- **生态活跃完善**

  npm 提供了数十万个可重用的工具包，提供了一流的依赖解决方案，可实现自动化工具链构建

- **代码可移植**

  兼容各种操作系统运行环境，一份代码可以运行在多种环境中

- **框架高度包容**

  Node以及Node的Web框架都拥有天然的包容性，易于拓展和维护

- **友好的社区氛围**

  丰富的生态诞生了大量的开源社区，聚集了众多的开发人员



## web server 最小系统

demo 示例

```js
onst http = require('http')

http.createServer(function(req, res) {
    res.write('hello node')
    res.end()
})
.listen(8080)
```



### Web server的构成

1. **处理HTTP**

   对HTTP的动词（GET、POST、PUT、DELETE）进行响应

2. **路由管理**

   分别处理不同URL路径的请求，返回对应的网络资源

3. **静态资源托管**

   对网络请求的静态资源进行响应或使用模板动态响应请求

4. **文件数据存储store**

   将请求携带的数据存储到文件或者数据库中

```js
const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const qs = require('querystring')

const notFound = (req, res) => {
    fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
        if (err) {
            res.write(404, 'not found')
        } else {
            res.writeHead(404, {
                "Content-Type": "text/html;charset='utf-8'"
            })
            res.write(data)
            res.end()
        }
    })
}

const writeDb = (chunk) => {
    fs.appendFile(path.join(__dirname, 'db'), chunk, err => {
        if (err) throw err
        console.log('db insert', chunk && chunk.toString())
    })
}

http.createServer((req, res) => {
    // 1. 路由处理
    // 2. 静态资源托管
    // 3. Http verb
    // 4. store

    let pathName = url.parse(req.url).pathname

    // /api => 
    if (pathName.startsWith('/api')) {
        const method = req.method
        if (method === 'GET') {
            const query = qs.parse(url.parse(req.url).query) // ?a=1&b=2 => {}
            const resData = {
                code: 200,
                msg: 'success',
                data: query
            }
            res.end(JSON.stringify(resData))
            return
        }
        if (method === 'POST') {
            const contentType = req.headers['content-type'];
            if (contentType === 'application/json') {
                let postData = ''
                req.on('data', chunk => {
                    postData += chunk
                    writeDb(chunk)
                })
                req.end('end', () => {
                    res.end(postData)
                })
            }
        }
    }

    if (pathName === '/') {
        pathName = path.join(__dirname, '/index.html')
    }

    const extName = path.extname(pathName)

    if (extName === '.html') {
        // index.html
        fs.readFile(pathName, (err, data) => {
            if (err) {
                // 404 => 404.html
                notFound(req, res)
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html;charset='utf-8'"
                })
                res.write(data)
                res.end()
            }
        })
    }

}).listen(7777)
```