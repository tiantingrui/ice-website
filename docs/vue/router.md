# 前端路由原理

- 稍微复杂一点的SPA，都需要路由
- vue-router也是vue全家桶的标配之一
- 属于 “和日常使用相关联的原理”，面试常考

### vue-router的路由模式

- hash `#`
- H5 history `/`

## hash

### hash 的特点

- hash 变化会触发网页跳转，即浏览器的前进、后退
- hash 变化不会刷新页面，SPA 必需的特点
- hash 永远不会提交到 server 端（前端控制）

### 用 JS 实现 hash 路由

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hash Router</title>
</head>
<body>
    <p>hash test</p>
    <button id=btn1> 修改 hash </button>
</body>

<script>
    // hash 变化，包括：
    // a. JS 修改 URL
    // b. 手动修改 url 的 hash
    // c. 浏览器前进、后退
    window.onhashchange = (event) => {
        console.log('old url', event.oldURl)
        console.log('new url', event.newURl)

        consoel.log('hash: ', location.hash)
    }

    // 页面初次加载，获取 hash
    document.addEventListener('DOMContentLoaded', () => {
        console.log('hash: ', localtion.hash)
    })

    // JS 修改 URL
    document.getElementById('btn1').addEventListener('click', () => {
        location.href = '#/user'
    })
</script>
</html>
```

## H5 history

- 用url规范的路由，但跳转时不刷新页面
- history.pushState
- window.onpopstate

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>H5 history Router</title>
</head>
<body>
    <p>history API test</p>
    <button id=btn1> 修改 hash </button>
</body>
<script>
    // 页面初次加载，获取hash
    document.addEventListener('DOMContentLoaded', () => {
        console.log('load', location.pathname)
    })

    // 打开一个新的路由
    // 注意：用 pushState方式，浏览器不会刷新页面
    document.getElementById('btn1').addEventListener('click', () => {
        const state = {name : 'page1'}
        console.log('切换路由到', 'page1')
        history.pushState(state, '', 'page1')
    })

    // 监听浏览器前进、后退
    window.onpopstate = (event) => {
        console.log('onpopstate', event.state, location.pathname)
    }
</script>
</html>
```

### 总结

- hash - window.onhashchange
- H5 history - history.pushState 和 window.onpopstate
- H5 history 需要后端支持

### 两者的选择

- toB的系统推荐用，简单易用，对url 规范不敏感
- toC 的系统，可以考虑选择 H5 history，但需要服务端支持
- 能选择简单的，就别用复杂的，要考虑成本和收益