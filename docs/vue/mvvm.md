

# 什么是MVVM

这里先补充一下关于组件化相关的内容。



### 组件化基础

+ 很早以前就有了组件化
  + asp jsp php 已经有组件化了
  + nodejs 中也有类似的组件化
+ 数据驱动视图（MVVM, setState）



### 数据驱动视图

+ 传统组件，只是静态渲染，更新还要依赖于操作DOM
+ 数据驱动视图 -- Vue MVVM
+ 数据驱动视图 -- React setState



### Vue MVVM

![img](https://img-blog.csdnimg.cn/20190303230732102.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21wNjI0MTgzNzY4,size_16,color_FFFFFF,t_70)

MVVM，对比上图我们这样看

+ M - Model 存放vue 中的data , vuex
+ V - View 就是我们看到的 视图
+ VM - ViewModel  事件处理， watch监听等