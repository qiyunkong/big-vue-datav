# big-vue-datav

> 一个基于 Vue、Datav、Echart 框架的 " **数据大屏项目** "，通过 Vue 组件实现数据动态刷新渲染，内部图表可实现自由替换。部分图表使用 DataV 自带组件，可进行更改，详情请点击下方 DataV 文档。



## 


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 相关依赖

``` bash
#  http://datav.jiaminghi.com/
npm install @jiaminghi/data-view
npm install echarts
npm install echarts-gl
npm install vue-router
```


## 功能需求
1.2D图表展示
2.布局适配,图表适配
3.echarts动画配置
4.echartsGL配置

## 处理BUG
1.[echarts重绘 &setOption第二个参数的含义]( https://blog.csdn.net/mrhaoxiaojun/article/details/96491327)
2.[Vue中对watch的理解（尤其是immediate和deep属性）](https://blog.csdn.net/qq_40323256/article/details/101907326)



## 处理警告
```bash
geo3D exists.
[Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive. 
See https://www.chromestatus.com/feature/5745543795965952
[Violation] Added non-passive event listener to a scroll-blocking 'wheel' event. Consider marking event handler as 'passive' to make the page more responsive.
See https://www.chromestatus.com/feature/5745543795965952
rose1 series not exists. Legend data should be same with series name or data name.
```

## Vue 脚手架

1.脚手架版本问题
2.utils 封装API
3.ESlint 配置
4.webpack 配置




## git步骤

``` bash
# 初始本地仓库
git init

# 查看当前状态 
git status 

# 看所有用户
git config --list

# 查看所有的分支 
git branch -a 

# 创建分支必须切换分支
git checkout -b main 

# 基于当前分支创建开发分支
git branch develop

```
## git 命令

``` bash
#  和最后一个快照的合并
git commit —amend

```

## 组件结构设计
   Echart--->components--->echart-Page
## 