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

## mysql创建表

**创建数据库myblob**

```
create database myblog;
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

**用户表插入数据**

```mysql
insert into users(username,`password`,`realname`)	values('zhangsan','123','张三');

insert into users(username,`password`,`realname`)	values('lisi','1234','李四');
```

**博客表插入数据**

```mysql
insert into  blogs(title,content,createtime,author)	values('标题A','内容A',1620607965476,'zhangsan');

insert into  blogs(title,content,createtime,author)	values('标题B','内容B',1620608004165,'lisi');
```

## 初始化数据库配置

首先根据`PACKAGE.JSON`中使用process判断当前的执行环境，线上还是测试

```
const env = process.env.NODE_ENV
```



```
cd 根目录
mkdir conf &  touch db.js
```

线上环境和本地测试环境配置可能不一样，也有可能有一些其他的配置，所以选择向外暴露mysql配置信息

## 封装数据库操作

```
cd 根目录
mkdir db && cd db && touch db.js
```

根据数据库初始化配置初始化`mysql`连接,因为这里的exec执行数据库操作是异步的，可以引入`promise`向外暴露一个`promise`来解决,向外暴露一个接受sql执行的数据操作的函数

```

```

 这里是`mysq`l的一个单例模式的操作，不能关闭mysql连接，否则后续无法操作数据库                



## 修改接口处理数据库返回的promsie

之前的接口数据都是模拟的，现在需要到数据库查询，修改`controller`中的查询数据库的接口，以`getList`为例

以为`getLIST`返回的是一个`promise`路由处理

```js
 const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
```

这里`.then`返回的也是`promise`，在下面的 `1handleBlogRouter`接收

```js
const blogResult = handleBlogRouter(req, res)  //
if (blogResult) {
    blogResult.then(blogData => {
    res.end(JSON.stringify(blogData))
    })
    ret  urn
}
```

**获取详情**

修改根据ID获取,注意查询exec执行返回的是一个数组，这里因为根据iD查询返回的结果只有一个，所以直接把他从数组中取出来，返回一个对象,

```
return exec(sql).then(rows=>{
     return rows[0]
})
```

最终返回的也是一个promise

**更新博客**

更新博客标题和内容

**删除博客**

注意sql函数返回不再是`exec()`执行后的结果

```js
 return exec(sql).then(deleteData => {
      
        if (deleteData.affectedRows > 0) {
            return true
        }
        return false
   })
```

## 用户登录路由

登录使用POST

- 安全
- 防止跨域的一些问题

因为根据用户名和密码查询返回一个数据，所以直接从数组中取回来，没有直接返回一个空的对象

```js
 return exec(sql).then(rows=>{
 	return rows[0] || {}
 })
```

获取用户名和密码使用ES6的解析析构的方法

```js
const {username, password} = req.body
```

## server获取cookie操作cookie

 判断`cookie`中是否有`username`来判断用户是否登录

**server端获取cookie**

`cookie`默认的形式为  // `k1=v1;k2=v2;k3=v3`,将键值对转化为对象的`key value`

将客户端传过来的`cookie`添加到`req`的`cookie`属性

```js
req.cookie = {}
const cookieStr = req.headers.cookie || '' //k1=v1;k2=v2
cookieStr.split(';').forEach(item => {
	if (!item) {
		return
	}
	const arr = item.split('=')
	const key = arr[0]
	const val = arr[1]
	req.cookie[key] = val
})
```

设置`cookie`

```
res.setHeader('Set-Cookie', `username=${userData.username}; path=/`)
```

默认path是路由 如`localhost:8000/api/user/login`,这里不设置为根目录，那么默认的就是 `/api/user/login`

但是`cookie`前端可以更改，比如张三已经登录了，然后后端返回一个`cookie`，后面通过cookie判断用户身份的时候，如果前端修改`cookie`,将`username`改为张三，伪造张三身份，所以`server`端限制前端`cookie`

```
res.setHeader('Set-Cookie', `username=${userData.username}; path=/;httpOnly`)
```

前端虽然可以改，但是后面的会覆盖

**httpOnly生效**

![](./jpg/cookie)

查看cookie

![](./jpg/cookie2)

操作cookie

![](./jpg/cookie3)



## session 

cookie暴露用户名很危险，这样可以不存储用户名而是存储id，后端可以对应用户名和密码，这样就用到session了

session就是用户登录后会给用户返回一个cookie，这个cookie包含一个sessionid,第一次用户登录成功后将用户信息赋值给这个sesssionID

以后每次登录根据这个sessionID来判断用户身份

具体逻辑如下：

- 服务器需要给用户返回一个sessioniD随机生成
- 这个sessionID对应着用户的信息，真正的用户信息保存在服务端
- 用户第一次登录时需要设置sessionID
- 用户之后登录时需要根据sessionID找打用户的session信息
- 判断用户登录可以通过res.session判断



## redis

`session`问题是存在在内存中,

`redis` 和`mysq`l

- `APP.JS`访问及其频繁，对性能要求极高
- `session`也可以不考虑断电数据丢失的问题
- `session`一般不会太大
`session`问题是存在在内存中



## 操作redis

- redis数据库配置

- 封装如何操作redis数据库的函数

`redis`的`key`和`val`都必须是字符串

**set函数**

做如下处理，如果是一个对象，那么默认会做onject.tostring()处理，所以这里转化为json格式的字符串

```
if (typeof val === 'object') {
        val = JSON.parse(val)
    }
```

**get函数**

是一个异步操作，必须返回`promsie`

  ```js
  try {
  	resolve(JSON.parse(val))
  } catch (ex) {
  	resolve(val)
  }
  ```

如果能解析成对象就返回对象，不是的话直接返回

  

