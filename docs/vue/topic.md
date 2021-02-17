# Vue 总结



#### 列表进入详情页传参问题

vue 路由传参方式：query、params + 动态路由传参

说下两者的区别：

1. query 通过 path 切换路由，params 通过name 切换路由

```vue
// query 通过 path 切换路由
<router-link :to="{path: 'Detail', query: {id: 1}}"> 前往Detail页面 </router-link>
// params 通过 name 切换路由
<router-link :to="{name: 'Detail', params: {id: 1}}"> 前往Detail页面 </router-link>
```

2. query通过`this.$route.query`来接收参数，params通过this.$route.params来接收参数

```vue
// query通过this.$route.query接收参数
created () {
    const id = this.$route.query.id;
}

// params通过this.$route.params来接收参数
created () {
    const id = this.$route.params.id;
}
```

3. query传参的url展现方式：/detail?id=1&user=123&identity=1&更多参数

   params＋动态路由的url方式：/detail/123

4. params动态路由传参，一定要在路由中定义参数，然后在路由跳转的时候必须要加上参数，否则就是空白页面：

```vue
{      
    path: '/detail/:id',      
    name: 'Detail',      
    component: Detail    
},
```

**注意**，params传参时，如果没有在路由中定义参数，也是可以传过去的，同时也能接收到，但是一旦刷新页面，这个参数就不存在了。这对于需要依赖参数进行某些操作的行为是行不通的，因为你总不可能要求用户不能刷新页面吧。例如：

 ```vue
// 定义的路由中，只定义一个id参数
{
    path: 'detail/:id',
    name: 'Detail',
    components: Detail
}

// template中的路由传参，
// 传了一个id参数和一个token参数
// id是在路由中已经定义的参数，而token没有定义
<router-link :to="{name: 'Detail', params: { id: 1, token: '123456' }}">前往Detail页面</router-link>

// 在详情页接收
created () {
    // 以下都可以正常获取到
    // 但是页面刷新后，id依然可以获取，而token此时就不存在了
    const id = this.$route.params.id;
    const token = this.$route.params.token;
}
 ```





#### 定时器问题

我在a页面写一个定时，让他每秒钟打印一个1，然后跳转到b页面，此时可以看到，定时器依然在执行。这样是非常消耗性能的。

**解决方案**

+ 在beforeDestroy()生命周期内清除定时器：

```js
beforeDestroy() {
    clearInterval(this.timer);        
    this.timer = null;
}
```

这里有一些不太优雅的地方

1. 它需要在这个组件实例中保存这个 `timer`，如果可以的话最好只有生命周期钩子可以访问到它。这并不算严重的问题，但是它可以被视为杂物。
2. 我们的建立代码独立于我们的清理代码，这使得我们比较难于程序化的清理我们建立的所有东西

+ **$once**(推荐)

```js
const timer = setInterval(() =>{                    
    // 某些定时器操作                
}, 500);            
// 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
this.$once('hook:beforeDestroy', () => {            
    clearInterval(timer);                                    
})
```

**拓展：**$once\ $on $off 的使用





#### **rem文件的导入问题：**

我们在做手机端时，适配是必须要处理的一个问题。例如，我们处理适配的方案就是通过写一个rem.js，原理很简单，就是根据网页尺寸计算html的font-size大小，基本上小伙伴们都知道，这里直接附上代码，不多做介绍。

```js
;(function(c,d){var e=document.documentElement||document.body,a="orientationchange" in window?"orientationchange":"resize",b=function(){var f=e.clientWidth;e.style.fontSize=(f>=750)?"100px":100*(f/750)+"px"};b();c.addEventListener(a,b,false)})(window);复制代码
```

这里说下怎么引入的问题，很简单。在main.js中，直接`import './config/rem'`导入即可。import的路径根据你的文件路径去填写。