## 初始化项目

```bash
$ mkdir project & cd project
$ npm init
```

## 安装nodemon,cross-env

```bash
$ npm i nodemon cross-env --save-dev --registry=https://registry.npm.taobao.org
```

- nodemon： 修改代码后自动重启
- crsss-env：设置开发环境和线上环境

## 创建node运行入口

```bash
$ cd project
$ mkdir bin & touch www.js
```

`www.js`作为服务启动的入口

## 创建app.js

`app.js`是处理逻辑的入口，大量的逻辑代码本来是都放在app.js里面的，但是为了结构更加清晰，所以将具体的处理逻辑分开

```bash
$ cd 根目录
$ touch app.js
```

## 创建src 

`src`存储项目具体的逻辑代码

```bash
$ cd 跟目录
$ mkdir src 
$ cd src 
$ mkdir router 
$ touch user.js & touch blog.js  
```



## 路由处理

`user.js`是处理用户相关逻辑

`blog.js`处理博客相关请求

两个路由处理函数如果命中，就返回对应的数据，没有任何路由命中返回401

```js
  res.writeHead(404, {"Content-Type": "text/plain"})
  res.write("404 Not Found\n")
  res.end()
```

因为前面设置的返回`json`格式的字符串，这里覆盖设置成返回纯文本格式的字符串

`res.write`就是要返回的内容

## 创建一个数据模型
为了统一返回的数据格式
## 创建controller
处理返回数据的逻辑

## 数据分层
- `bin/www.js` 服务相关；
- `app.js` 处理逻辑相关，逻辑处理入口，在此处可以处理所有的处理器都需要的信息；
- `src/router` 命中路由相关，并返回路由命中后的数据数据；
- `controller` 返回路由需要的数据



## promsie使用

因为`POST`请求获取数据是通过异步处理的，所以这里需要使用`promsie`更方便处理,所以需要修改`POST`请求的监听事件，把数据处理放在`promise`中

这样所有的POST数据都在这个PROMISE之后可以获取，那么所有的POST路由处理可以直接放在这个PROMISE.then里面执行

```js
//处理POST请求数据
    getPostData(req).then(postData=>{
        req.body = postData
        
        const blogData = handleBlogRouter(req, res)
        if (blogData) {
            res.end(JSON.stringify(blogData))
            return
        }

        const userData = handleUserRouter(req, res)
        if (userData) {
            res.end(JSON.stringify(userData))
            return
        }

        res.writeHead(404, {"Content-type": "text/plain"})
        res.write("404 Not Found\n")
        res.end()
    })

```

## 新建博客

所有的POST数据封装到req,body里，处理新建博客的逻辑

```
const newBlog = (blogData = {}) => {
    return {
        "id": 4
    }
}
```

`(blogData = {})` 是ES6的新语法，如果没有话吗，默认给一个空对象

## 更新博客

更新博客需要传递一个博客ID,以及新的博客内容，博客iD是URL中query获取的，内容是POST数据提交的



## 删除博客

逻辑更新博客几乎一样，只不过只需要传递博客id



## 登录



## mysql创建表

**创建数据库myblob**

```
create database myblob;
```



**用户表**

```
create table `myblog`.`users` (
	`id` int not null AUTO_INCREMENT,
	`username` VARCHAR(20) not null,
	`password` varchar(20) not null,	
	`realname` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`id`));
)
```

**博客表**

```
create table `myblog`.`blogs` (
	`id` int not null AUTO_INCREMENT,
	`title` VARCHAR(50) not null,
	`content` LONGTEXT not null,	
	`createtime`  BIGINT(20) NOT NULL,
	`author` VARCHAR(20) not NUll,
	PRIMARY KEY (`id`));

```



​                 

