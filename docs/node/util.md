# Nodejs 工具库

#### 1. util

**本是内置模块开发时的公共工具集，现已开放给开发者使用**

- 风格转换

promisify <=> callbackify

TextEncoder <=> TextDecoder

- 测试工具

debuglog 、inspect、format、getSystemErrorName

- 类型判断

types.isDate(value)

#### 2. assert

**内置断言库，需要配合测试框架使用，住的抛出AssertionError 错误**

- 断言真假

assert(value, msg)，match(string, reg)

- 断言等价

strickEqual/deepStrickEqual 以及相反操作 equal/deepEqual 弃用

- 断言成功失败

fail/throws/doesNotThrow/ifError/rejects

#### 3. querystring

**官方提供的解析和格式化URL查询字符串的实用工具**

- 查询字符串键值对 querystring.parse(str[],sep[,eq[,options]])
- 键值对转查询字符串 querystring.stringify(obj)

