# Node-Vue-Moba


## 前言

该项目为前后端分离项目的前端部分，后端项目为server文件夹。前端项目分为web展示端和admin可视化数据管理端。

## 项目介绍

`Node-Vue-Moba`是一个面向广大王者荣耀玩家的全栈项目，基于Vue+Element实现。后台管理端主要包括分类管理，新闻管理，英雄管理，视频管理，运营管理等。采用了通用的CRUD接口，便于管理员对数据进行修改，符合开闭原则。前端展示界面与后台管理端所调用的接口分离，实现高内聚，低耦合，方便进行修改及扩展字段。

### 项目演示

项目在线演示地址：[暂未发布至服务器，仅可下载后本地查看]()  

![]()

### 技术选型

技术 | 说明 | 官网
----|----|----
Vue | 前端框架 | [https://vuejs.org/](https://vuejs.org/)
Vue-router | 路由框架 | [https://router.vuejs.org/](https://router.vuejs.org/)
Vuex | 全局状态管理框架 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
Element | 前端UI框架 | [https://element.eleme.io/](https://element.eleme.io/)
Axios | 前端HTTP框架 | [https://github.com/axios/axios](https://github.com/axios/axios)
v-charts | 基于Echarts的图表框架 | [https://v-charts.js.org/](https://v-charts.js.org/)
Js-cookie | cookie管理工具 | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)
nprogress | 进度条控件 | [https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)
vue-element-admin | 项目脚手架参考 | [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

### 项目布局

``` lua
web
├── plugins
├── public
├── src -- 源码目录
    ├── assets -- 静态图片资源文件
    ├── components -- 通用组件封装
    ├── router -- vue-router路由配置
    ├── store -- vuex的状态管理
    ├── utils -- 工具类
    └── views -- 前端页面
        ├── Home -- 首页
        ├── Article
        ├── GameCenter
        ├── Hero
        ├── Strategy
 
```

## 搭建步骤
- 下载node并安装：[https://nodejs.org/dist/v8.9.4/node-v8.9.4-x64.msi](https://nodejs.org/dist/v8.9.4/node-v8.9.4-x64.msi);
- 该项目为前后端分离项目，访问本地访问接口需搭建后台环境;
- 访问在线接口无需搭建后台环境，只需将config/dev.env.js文件中的BASE_API改为[http://120.27.63.9:8080](http://120.27.63.9:8080)即可;
- 克隆源代码到本地，使用VSCODE(凭个人喜好)打开，并完成编译;
- 在VSCODE命令行中运行命令：npm install,下载相关依赖;
- 在VSCODE命令行中运行命令：npm run serve,运行项目;
- 访问地址：[http://localhost:8080](http://localhost:8080) 即可打开后台管理系统页面;
- 如果遇到无法运行该命令，需要配置npm的环境变量，如在path变量中添加：C:\Users\zhenghong\AppData\Roaming\npm。

## 第三方库使用
- cors ：配置跨域
- inflection： inflection第三方包，转换categories => Category
- multer：上传文件  
- bcrypt: 密码加密
- jsonwebtoken : 生成token返回给客户端
- http-assert: 服务端报错返回状态码及json信息

## 许可证

[Apache License 2.0](https://github.com/macrozheng/mall-admin-web/blob/master/LICENSE)

Copyright (c) 2018-2019 macrozheng
