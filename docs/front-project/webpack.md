# webpack

- 基础必备
- 高级配置
- Webpack 优化

## 基础必备

- **merge 拆分**

  - 分 base 、dev 、prod 三个文件

- **热更新**

  - webpack-dev-server

- **ES6 语法处理**

  1. 安装 `npm i babel-loader @babel/core @babel/preset-env -D`

  2. 配置文件

     ```
     module: {
       rules: [
         {
                     test: /\.js?$/,
                     exclude: /(node_modules)/,
                     loader: 'babel-loader', // 如果遇到es6 用babel-loader 转化为 es5
                 },
       ]
     }
     ```

  3. `.babelrc`

     ```
     {
         "presets": [
             ["@babel/preset-env"]
         ],
         "plugins": []
     }
     ```

- **处理样式**

  ```
  {
                  test: /\.css$/,
                  // loader 的执行顺序是：从后往前
                  loader: ['style-loader', 'css-loader', 'postcss-loader'] // 加了 postcss，处理兼容性
              },
              {
                  test: /\.less$/,
                  // 增加 'less-loader' ，注意顺序
                  loader: ['style-loader', 'css-loader', 'less-loader']
              }
  ```

  注意：同时配置postcss.config.js

  ```
  module.exports = {
      plugins: [require('autoprefixer')]
  }
  ```

- **图片处理**

  - dev（正常处理）

    ```
    // 直接引入图片 url
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: 'file-loader'
                }
    ```

  - prod（base 64）

    ```
    // 图片 - 考虑 base64 编码的情况
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            // 小于 5kb 的图片用 base64 格式产出
                            // 否则，依然延用 file-loader 的形式，产出 url 格式
                            limit: 5 * 1024,
    
                            // 打包到 img 目录下
                            outputPath: '/img1/',
    
                            // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
                            // publicPath: 'http://cdn.abc.com'
                        }
                    }
                },
    ```

## 高级配置

- **多入口**

  base 中 配置入口

  ```
  entry: {
          index: path.join(srcPath, 'index.js'),
          other: path.join(srcPath, 'other.js'),
      },
        
  plugins: [
          // 多入口 - 生成 index.html
          new HtmlWebpackPlugin({
              template: path.join(srcPath, 'index.html'),
              filename: 'index.html',
              // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
              chunks: ['index'] // 只引用 index.js
          }),
          // 多入口 - 生成 other.html
          new HtmlWebpackPlugin({
              template: path.join(srcPath, 'other.html'),
              filename: 'other.html',
              // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
              chunks: ['other'] // 只引用 other.js
          }),
      ]
  ```

  prod 中 配置出口

  ```
  output: {
          // filename: 'bundle.[contentHash.8].js',
          filename: '[name].[contentHash.8].js', // name 即多入口时 entry 的 key
          path: distPath
      },
  ```

- **抽离压缩 css 文件**

  1. 抽离：安装 `mini-css-extract-plugin`，在 prod 中

  ```
  // 抽离 css
              {
                  test: /\.css$/,
                  loader: [
                      MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
                      'css-loader',
                      'postcss-loader'
                  ]
              },
              // 抽离 less --> css
              {
                  test: /\.less$/,
                  loader: [
                      MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
                      'css-loader',
                      'less-loader',
                      'postcss-loader'
                  ]
              }
  plugins: [
    // 抽离 css 文件
          new MiniCssExtractPlugin({
              filename: 'css/main.[contentHash:8].css'
          })
  ]
  ```

  1. 压缩：

  ```
  optimization: {
          // 压缩 css
          minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      }
  ```

- **抽离公共代码和第三方代码**

  1. 在 prod 中：

  ```
  optimization: {
         
          // 分割代码块
          splitChunks: {
              chunks: 'all',
              /**
               * initial 入口 chunk，对于异步导入的文件不处理
                  async 异步 chunk，只对异步导入的文件处理
                  all 全部 chunk
               */
  
              // 缓存分组
              cacheGroups: {
                  // 第三方模块
                  vendor: {
                      name: 'vendor', // chunk 名称
                      priority: 1, // 权限更高，优先抽离，重要！！！
                      test: /node_modules/,
                      minSize: 0,  // 大小限制
                      minChunks: 1  // 最少复用过几次
                  },
  
                  // 公共的模块
                  common: {
                      name: 'common', // chunk 名称
                      priority: 0, // 优先级
                      minSize: 0,  // 公共模块的大小限制
                      minChunks: 2  // 公共模块最少复用过几次
                  }
              }
          }
      },
  ```

  1. 在 base 中，入口文件写明对应的 chunk

  ```
  // 多入口 - 生成 index.html
          new HtmlWebpackPlugin({
              template: path.join(srcPath, 'index.html'),
              filename: 'index.html',
              // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
              chunks: ['index', 'vendor', 'common']  // 要考虑代码分割
          }),
          // 多入口 - 生成 other.html
          new HtmlWebpackPlugin({
              template: path.join(srcPath, 'other.html'),
              filename: 'other.html',
              chunks: ['other', 'common']  // 考虑代码分割
          })
  ```

- **webpack 如何实现异步加载**（懒加载）

  Webpack 不需要配置（支持异步写法，在js中用 import 即可）

  引入动态数据 - 懒加载

  ```
  setTimeout(() => {
    import('./aa,js').then(res => {
      console.log(res.data)
    })
  })
  ```

- **moudle chunk bundle 的区别**

  ```
  module - 各个源码文件，webpack 中一切皆模块
  chunk - 多模块合并成的，如 entry import() splitChunk
  bundle - 最终的输出文件
  ```

## webpack 性能优化

- 重点 & 社区热议话题
- 优化打包构建速度 - 开发体验和效率
- 优化产出代码 - 产品性能

### webpack 优化打包构建速度

------

- 优化 babel-loader
- IgnorePlugin - 避免哪些插件
- noParse - 不管哪些
- happyPack - 多进程打包工具
- ParallelUglifyPlugin - 开启多进程进行代码压缩
- 自动刷新
- 热更新（自动刷新升级版）
- DllPlugin

#### 优化 babel-loader

```
{
                test: /\.js?$/,
  							loader: ['babel-loader?cacheDirectory'], // 开启缓存
                exclude: /(node_modules)/, // 排除范围，include exclude 选一个就好
  							include: path.join(__dirname, 'src')
            },
```

#### IgnorePlugin

```
// prod
// 忽略 moment 下的 /locale 目录
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
```

#### noParse

#### happyPack 多进程打包

- JS 单线程，开启多进程打包
- 提高构建速度（特别是多核CPU）

```
// prod
{
  	test: /\.js$/,
    // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
    use: ['happypack/loader?id=babel'],
    	  include: srcPath,
        // exclude: /node_modules/
},
              
  
// happyPack 开启多进程打包
        new HappyPack({
            // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
            id: 'babel',
            // 如何处理 .js 文件，用法和 Loader 配置中一样
            loaders: ['babel-loader?cacheDirectory']
        }),
```

#### ParallelUglifyPlugin 多进程压缩JS

- Webpack 内置 Uglify 工具压缩 JS
- JS 单线程，开启多进程压缩更快
- 和 happyPack 原理一样

```
// 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS 的参数
            // （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）
            uglifyJS: {
                output: {
                    beautify: false, // 最紧凑的输出
                    comments: false, // 删除所有的注释
                },
                compress: {
                    // 删除所有的 `console` 语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            }
```

**关于开启多进程**

- 项目较大，打包较慢，开启多进程能提高速度
- 项目较小，打包很快，开启多进程会降低速度（进程开销）
- 按需使用

#### webpack 如何配置热更新

##### 自动刷新

```
module.exports = {
  watch: true, // 开启监听，默认为 false
    watchOptions: {
        ignored: /node_modules/, // 忽略哪些
        // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
        // 默认为 300ms
        aggregateTimeout: 300,
        // 判断文件是否发生变化是通过不停的去询问系统指定文件有没有变化实现的
        // 默认每隔1000毫秒询问一次
        poll: 1000
    }
}
```

##### 热更新

- 自动刷新：整个网页全部刷新，速度较慢
- 自动刷新：整个网页全部刷新，状态会丢失
- 热更新：新代码生效，网页不刷新，状态不丢失

```
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

module.exports = {
   entry: {
        // index: path.join(srcPath, 'index.js'),
        index: [
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/dev-server',
            path.join(srcPath, 'index.js')
        ],
        other: path.join(srcPath, 'other.js')
    },
  plugins: [
     new HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true
  }
}

// index.js  - 热更新有成本，需要我们再开发环境下去注册哪些需要更新
// 增加，开启热更新之后的代码逻辑
if (module.hot) {
    module.hot.accept(['./math'], () => {
        const sumRes = sum(10, 30)
        console.log('sumRes in hot', sumRes)
    })
}
```

#### DllPlugin 动态链接库插件

- 前端框架如vue \ React ，体积大，构建慢
- 较稳定，不常升级版本
- 同一个版本只构建一次即可，不用每次都重新构建

**使用过程**

- Webpack 已内置DllPlugin 支持
- DllPlugin - 打包出 dll 文件
- DllReferencePlugin - 使用 dll 文件

```
// webpack.dll.js
const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
  mode: 'development',
  // JS 执行入口文件
  entry: {
    // 把 React 相关模块的放到一个单独的动态链接库
    react: ['react', 'react-dom']
  },
  output: {
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，
    // 也就是 entry 中配置的 react 和 polyfill
    filename: '[name].dll.js',
    // 输出的文件都放到 dist 目录下
    path: distPath,
    // 存放动态链接库的全局变量名称，例如对应 react 来说就是 _dll_react
    // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
    library: '_dll_[name]',
  },
  plugins: [
    // 接入 DllPlugin
    new DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 react.manifest.json 中就有 "name": "_dll_react"
      name: '_dll_[name]',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(distPath, '[name].manifest.json'),
    }),
  ],
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>

    <script src="./react.dll.js"></script> // 引用dll打包出来的文件
</body>
</html>
// webpack.dev.js

// 第一，引入 DllReferencePlugin
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: srcPath,
                exclude: /node_modules/ // 第二，不要再转换 node_modules 的代码
            },
        ]
    },

plugins: [
  // 第三，告诉 Webpack 使用了哪些动态链接库
        new DllReferencePlugin({
            // 描述 react 动态链接库的文件内容
            manifest: require(path.join(distPath, 'react.manifest.json')),
        }),
]
```

## webpack 优化构建速度 - 总结

**（可用于生产环境）**

- 优化 babel - loader
- IgnorePlugin
- noParse
- happyPack
- ParallelUglifyPlugin(必须用于生产环境)

**（不用于生产环境）**

- 自动刷新
- 热更新
- DllPlugin

## webpack 性能优化 - 产出代码

- 体积更小（就会加载更快）
- 合理分包，不重复加载
- 速度更快，内存使用更少

#### 小图片base编码

```
// 图片 - 考虑 base64 编码的情况
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 小于 5kb 的图片用 base64 格式产出
                        // 否则，依然延用 file-loader 的形式，产出 url 格式
                        limit: 5 * 1024,

                        // 打包到 img 目录下
                        outputPath: '/img1/',

                        // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
                        // publicPath: 'http://cdn.abc.com'
                    }
                }
            },
```

#### bundle加hash

构建中如果没变化，就会命中缓存，加载更快，避免重新加载

#### 懒加载 - import

#### 提取公共代码

```
// 分割代码块
        splitChunks: {
            chunks: 'all',
            /**
             * initial 入口chunk，对于异步导入的文件不处理
                async 异步chunk，只对异步导入的文件处理
                all 全部chunk
             */

            // 缓存分组
            cacheGroups: {
                // 第三方模块
                vendor: {
                    name: 'vendor', // chunk 名称
                    priority: 1, // 权限更高，优先抽离，重要！！！
                    test: /node_modules/,
                    minSize: 0,  // 大小限制
                    minChunks: 1  // 最少复用过几次
                },

                // 公共的模块
                common: {
                    name: 'common', // chunk 名称
                    priority: 0, // 优先级
                    minSize: 0,  // 公共模块的大小限制
                    minChunks: 2  // 公共模块最少复用过几次
                }
            }
        }
```

#### IgnorePlugin

#### 使用CDN加速

#### 使用production

- 自动开启代码压缩
- Vue React 等会自动删掉调试代码（如开发环境的warning）
- 启动 Tree-Shaking
  - ES6 Module 才能让tree-shaking 生效
  - commonjs 就不行

##### ES6 Module 和 Commonjs 区别

- ES6 Module 静态引入，编译时引入
- CommonJS 动态引入，执行时引入
- 只有ES6 Module 才能静态分析，实现 Tree-Shaking

#### Scope Hosting

改变打包之后的作用域，内存占用更少

- 代码体积更小
- 创建函数作用域更少
- 代码可读性更好

```
const MoudleConcatenationPlugin = require('webpack/lib/optimize/MoudleConcatenationPlugin')

module.exports = {
  resolve: {
    // 针对 npm 中 的第三方模块有限采用 jsnext:main 中指向的 ES6 模块化语法的文件
    mainFielfds: ['jsnext:main', 'browser', 'main']
  },
  plugins: [
    // 开启 Scope Hosting
    new MoudleConcatenationPlugin()
  ]
}
```

## webpack 性能优化 - 产出代码

- 小图片 base64 编码
- bundle 加 hash
- 懒加载
- 提取公共代码
- 使用 CDN加速
- 使用production
- Scope Hosting