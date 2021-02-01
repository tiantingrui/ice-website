# babel

- 环境搭建 & 基本配置
- babel-polyfill
- babel-runtime

## Babel 环境配置和基本配置

- 环境配置
- `.babelrc`配置
- presets 和 plugins

**presets**: 可以作为 babel 插件的组合 （es6,es7,es8）

```
{
  "presets": ["@babel/preset-env"],
  "plugins": []
}
```

## babel-polyfill 是什么

- 什么是 babel-polyfill
- corejs & regenerator
- babel-即两者的集合

**babel-polyfill 现在已被启用**

- Babel 7.4 之后启用 babel-polyfill
- 推荐直接使用 core-js 和regenerator
- 但并不影响面试会考察它

## babel-polyfill 如何按需引入

babel 不处理模块化

babel-polyfill 其实就是补丁

- babel-polyfill 文件较大
- 只有一部分功能，无需全部引入
- 配置按需引入

```
{
  "presets": [ // 预设
        [
            "@babel/preset-env", // 一堆plugin 的集合
            {
                "useBuiltIns": "usage",
                "corejs": 3 // 3 是版本
            }
        ]
    ],
}
```

## babel-polyfill 问题

- 会影响全局环境
- 如果做一个独立的web系统，则没问题
- 如果做第三方的包，则会影响

**解决方法：babel-runtime**

## babel-runtime （重新取一个变量名，不会污染全局环境）

```
{
  "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": 3,
                "helpers": true,
                "regenerator": true,
                "useESModules": false
            }
        ]
    ]
}
```

## babel 总结

- 环境配置 & 基本配置
- babel-polyfill
- babel-runtime