## GET请求

通常是客户端向服务器索取什么信息

## 引入相应的模块

queryString可以帮助处理URL的字符串
```
const http = require('http')
const queryString = require('querystring')
```

## 获取 req 请求信息
`req`本身是一个对象,使用`req.query`为该对象加一个`query`属性,将完整的`URL`通过`？`进行切割，然后将第二部分解析为对象,

```js
req.query = queryString.parse(url.split('?')[1])
```
完整的URL意思如下
```
http://localhost:8000/blog/list   
url为/blog/list 
```

```
http://localhost:8000/blog/list?name=zhangsa&password=123
url为/blog/list?name=zhangsa&password=123
```

解析后的对象如下

```
req.url    /blog/list?name=zhangsa&password=123
req.query  { name: 'zhangsa', password: '123' }
```



##   favicon

这是浏览器的默认行为,主要用于请求`web`图标

![](./jpg/favicon_2021-05-08_17-27-49.jpg)



## res.end

`res.end`传一个字符串，使用`JSON.stringify`将对象转化为`string`

```
res.end(JSON.stringify(req.query))
```

