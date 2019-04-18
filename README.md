# 版本
```
"@babel/core": "^7.4.3",
"rollup": "^1.8.0",
```

# 使用

## 初始化项目
```
> npm i

// 实时监听
> npm run dev
// 打包
> npm run build
//打包版本--压缩混淆
> npm run release
```

## 编辑项目
以vs code为例
1. 安装vscode 插件，对文档进行检验
`eslint` 
`Prettier - Code formatter`
2. 编辑时格式化代码
组合键 `shift+ctrl+p`输入`format document`回车

# 关于插件
## 为什么选择terser
terser是一个Javascript代码的压缩和美化工具，选择terser的原因有两点：

uglify-es不再维护，而uglify-js不支持 ES6+，这一点在上一篇教程中我们已经看到了，rollup-plugin-uglify就是基于uglify-js，所以它不能够支持ES6语法；
terser是uglify-es的一个分支，它保持了与uglify-es和uglify-js@3的API及CLI的兼容。
