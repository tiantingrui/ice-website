# Promise 进阶

> 对 callback hell 的解决方案

- 三种状态
- 状态的表现和变化
- then 和 catch 对状态的影响

#### 三种状态

- pending resolved rejected
- Pending -> resolved 或者 pending -> rejected
- 变化不可逆

#### 状态的表现

- pending状态，不会触发 then 和 catch
- resolved 状态，会触发后续的then 回调函数
- rejected 状态，会触发后续的catch 回调函数

#### then 和 catch 改变状态

- then 正常返回resolved，里面有报错则返回rejected
- catch 正常返回resolved，里面有报错则返回rejected

