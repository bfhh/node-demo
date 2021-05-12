## express安装

安装脚手架express-generator

```
npm install express-generator -g
```

## **项目初始化**

```
express express-blog
```

执行

```
$ cd express-blog
$ npm install & npm start
```

**安装自动重启工具**

```
$ npm i nodemon cross-env --save-dev --registry=https://registry.npm.taobao.org
```

## 路由中间件

- get请求的话

- app.use没有函数都执行

- app.get（'子路由'，处理函数）处理函数有next

- app.get('全路由'，处理函数)

## 初始化环境- 

- `mysql controller resModel`可以直接复用

- 安装`msyql`  `XSS`
- 初始化路由



## 登录

使用`express-session` 和 `connect-redis`

```
npm install redis express-sessionb connect-redis --save
```

## `windows`关闭某个端口

```
 netstat -ano       
 taskkill -pid 17652 -f
```

