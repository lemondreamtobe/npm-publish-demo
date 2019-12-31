
## 如果想用webpack打包并发布关于react组件的npm包 这里适合你
> if you want to create a npm project of react in webpack, this library maybe is suitable for you

#### 发布要求

- 源代码采用 ES6 写，但发布到 Npm 仓库的需要是 ES5 的，并且遵守 CommonJS 模块化规范。如果发布到 Npm 上去的 ES5 代码是经过转换的，请同时提供 Source Map 以方便调试
- 该 UI 组件依赖的其它资源文件例如 CSS 文件也需要包含在发布的模块里
- 尽量减少冗余代码，减少发布出去的组件的代码文件大小
- 发布出去的组件的代码中不能含有其依赖的模块的代码，而是让用户可选择性的去安装。例如不能内嵌 React 库的代码，这样做的目的是在其它组件也依赖 React 库时，防止 React 库的代码被重复打包

#### 工程目录
```javascript
node_modules/hello-webpack
├── lib
│   ├── index.css (组件所有依赖的 CSS 都在这个文件中)
│   ├── index.css.map
│   ├── index.js (符合 CommonJS 模块化规范的 ES5 代码)
│   └── index.js.map
├── src (ES6 源码)
│   ├── index.less
│   └── index.tsx
└── package.json (模块描述文件)console.log("Hello world!");
}
```

#### webpack构建

- 使用 babel-loader 把 ES6 代码转换成 ES5 的代码
- 通过开启 devtool: 'source-map' 输出 Source Map 以发布调试
- 设置 output.libraryTarget='commonjs2' 使输出的代码符合CommonJS2 模块化规范，以供给其它模块导入使用
- 需要通过 less-loader 和 MiniCssExtractPlugin 解决样式引入的资源 
- 需要注意的是 Babel 在把 ES6 代码转换成 ES5 代码时会注入一些辅助函数

> 本例子仅支持tsx+less的组件编写方式 如果需要扩展或者更改请修改webpack配置 均有相应的注释