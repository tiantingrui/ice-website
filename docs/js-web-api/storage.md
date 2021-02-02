# 存储

+ cookie
+ sessionStorage
+ localStorage



> cookie

- 本事用于客户端和服务器端通信
- 但是他有本地存储的功能，浴室就被借用
- 使用document.cookie = ... 获取集合修改即可
- 存数量太小 只有4kb
- 所有http请求都带着会影响获取资源的效率
- API简单 需要封装才能使用 只能存字符串

> locationSorage 和 sessionStorage

- HTML5专门为存储而设计 最大容量5M
- API简单易用
- localStorage.setItem(key,value);localStorage.getItem(key,value)
- IOS safari隐藏模式下会报错
- session生命周期在本标签页或当前窗口内 关闭会被清空



### 三者区别

+ 容量区别： 4k vs 5M
+ API易用性
+ 是否跟随 http 请求发送出去