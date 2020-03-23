# vue-typescript-cli

> vue-typescript-cli集成了常用的工具，适合大部分前端业务开发的Web端脚手架。

---

## 主要集成

- [axios](https://github.com/axios/axios) 基于 promise 的 HTTP 库
- [element-ui](https://github.com/ElemeFE/element) Web端UI框架
- [Less.js](https://github.com/less/less.js) CSS 预处理语言
- [Lodash](https://github.com/lodash/lodash) 工具库
- [Mock.js](https://github.com/nuysoft/Mock) 拦截 Ajax 请求，模拟返回请求数据
- [TSLint](https://github.com/palantir/tslint) 代码检查
- [TypeScript](https://github.com/microsoft/TypeScript)
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) 组件装饰器
- [vue-router](https://github.com/vuejs/vue-router)
- [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators) Vuex装饰器
- 环境变量配置

## 目录结构

```bash
├── build
│   │── environment.js						# 环境变量配置
├── src														# 源代码
│   ├── assets										# 资源文件
│   ├── mock											# 模拟请求
│   ├── router                 		# router
│   ├── service                		# http服务
│   ├── store                  		# vuex
│   ├── views                  		# views
│   ├── global.d.ts								# TS全局声明
├── tsconfig.json              		# typescript 配置
└── vue.config.js              		# vue-cli 配置
```

## 启动项目

### 安装依赖

```bash
npm install
```

### 启动本地开发环境

```bash
npm run dev-[环境变量]
eg: npm run dev-dev
```

### 构建生产环境

```bash
npm run build-[环境变量]
eg: npm run build-dev
```

## 自定义 Vue 配置

请看 [Configuration Reference](https://cli.vuejs.org/config/).



## 浏览器支持

| IE / Edge                 | Firefox         | Chrome          | Safari          |
| ------------------------- | --------------- | --------------- | --------------- |
| IE10 (待测试), IE11, Edge | last 2 versions | last 2 versions | last 2 versions |
