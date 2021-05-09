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

## JSON.stringfy

```js
res.end(
    JSON.stringify(resData)
)
```

res.end需要返回一个字符串，但是resData是一个对象，`JSON.stringify(resData)`就是讲一个对象转化为一个jSON格式的字符串，

注意所有返回的数据都是字符串只不过字符串的格式有很多种