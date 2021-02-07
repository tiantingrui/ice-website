# css

+ css 布局
+ css 定位
+ css 图文样式
+ css 响应式



## css - 布局



#### 1. 盒子模型的宽度如何计算？

- offsetWidth = (内容宽度+ 内边距 + 边框)，无外边距
- box-sizing: border-box(就是让内边距和边框也在整个width中)

#### 2. margin 纵向重叠的问题

```
<!--如下代码，AAA 和 BBB 之间的距离是多少？-->
<style>
    p {
        font-size: 16px;
        line-height: 1;
        margin-top: 10px;
        margin-bottom: 15px;
    }
</style>

<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```

- 相邻元素的 margin-top 和margin-bottom 会发生重叠

- 空白内容的

  

  也会重叠

- 答案是：15px

#### 3. margin 负值的问题

- 对margin的top left right bottom 设置负值，有何效果？

1. margin-top 和 margin-left 负值，元素向上，向左移动
2. margin-right 负值，右侧元素左移，自身不受影响
3. margin-bottom 负值，下方元素上移，自身不受影响

#### 4. BFC理解和应用

- **什么是BFC?如何应用？**

1. Block format context，块级格式化上下文
2. 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素

- **形成BFC的常见条件**

1. float 不是 none
2. position 是 absolute 或 fixed
3. overflow 不是 visible
4. display 是 flex inline-block 等

- BFC的常见应用
  - 清除浮动

```
<style>
        .container {
            background-color: #f1f1f1;
        }
        .left {
            float: left;
        }
        .bfc {
            /* 触发元素 BFC */
            overflow: hidden; 
        }
    </style>
</head>
<body>
    <div class="containe bfc">
        <img src="https://www.imooc.com/static/img/index/logo2020.png" alt="" style="margin-right: 10px;" class="float">
        <p class="bfc">hello ice_sweet</p>
    </div>
</body>
```

#### 5. float 布局的问题，以及 clearfix

**如何使用圣杯布局和双飞翼布局**

圣杯布局和双飞翼布局的目的：

1. 三栏布局，中间一栏最先加载和渲染（内容最重要）
2. 两侧内容固定，中间内容随着宽度自适应
3. 一般用于PC网页

**圣杯布局和双飞翼布局的技术总结**

- 使用float布局
- 两侧使用 margin 负值，以便和中间内容横向重叠
- 防止中间内容被两侧覆盖，一个用padding一个用margin
- **手写clearfix**

```
.clearfix:after {
    content: '';
    display: table;
    clear: both
}
/* 加在盒子上 */
```

#### 6. flex 布局的问题

- flex实现一个 三点的色子

```
.box{
    display: flex;
    justify-content: space-between;
}
.item {
    /* 基本样式 */ 
}
.item:nth-child(2) {
    align-self: center;
}
.item:nth-child(3) {
    align-self: flex-end;
}
```

flex 常用语法回顾

- flex-direction
- justify-content
- align-items
- flex-wrap
- align-self



## css - 定位

#### 1. absolute 和 relative 分别依据什么定位？

- relative 依据自身定位
- absolute 依据最近一层的定位元素定位

**定位元素**

- absolute relative fixed
- body

#### 2. 居中对齐有哪些实现方式？

- 水平居中
- 垂直居中

##### 水平居中

- inline 元素： text-align：center
- block 元素：margin: auto
- absolute 元素： left: 50% + margin-left 负值(width的一半)

##### 垂直居中

- inline元素：line-height 的值等于 height值
- absolute 元素： top: 50% + margin-top 负值（height的一半）
- absolute元素：transform(-50%, -50%)
- absolute元素：top,left,bottom,right = 0 + margin: auto

## css - 图文样式

#### 1. line-height 如何继承

```
<style>
    body {
        font-size: 20px;
        line-height: 200%
    }
    p{
        font-size: 16px
    }
</style>
<body>
	<p>KKK<p>
</body>
```

上面代码中， p 标签的行高将会是多少？

**40px**

- 写具体数值，如30px, 则继承该值
- 写比例，如 2 、1.5，则继承比例
- 写百分比，如200%，则继承计算出来的值

## css - 响应式

#### 1. rem 是什么？

rem是一个长度单位

- px - 绝对长度单位，最常用
- em - 相对长度单位，相对于父元素，不常用
- rem - 相对长度单位，相对于根元素，常用于响应式布局
  - 设置根元素的 font-size： 100px （设置一个标准值）

#### 2. 响应式布局的常见方案？

- media-query，根据不同的屏幕宽度设置根元素 font-size
- rem，基于根元素的相对单位

#### 3. vw/vh

- rem 的弊端
- 网页视口尺寸
- vw/vh

##### rem的弊端：“阶梯”性

```
@media only screen and (max-width: 374px) {
    html {font-size: 86px}
}
@media only screen and (min-width: 375px) and (max-width: 413px){
    html {font-size: 100px}
}
@media only screen and (max-width: 414px) {
    html {font-size: 110px}
}
```

##### 网页视口尺寸

- window.screen.height // 屏幕高度
- window.innnerHeight // 网页视口高度
- document.body.clientHeight // body 高度

##### vw/vh

- vh 网页视口高度的 1/100
- vw 网页视口宽度的 1/100
- vmax 取两者最大值
- vmin 取两者最小值