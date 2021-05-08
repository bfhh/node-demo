## POST

POST请求主要向服务器传递数据

## 处理POST请求

post请求数据一都比较大，一次性获取所有的数据不合适，所以采用流式获取所有数据

处理请求的函数在req对象上绑定一个监听数据的函数

```js
let postData = ""
req.on('data', chunk => {
	postData += chunk.toString()
})
```

监听数据传递完毕函数

```
req.on('end', () => {
     res.end('hello world')
})
```

这两个