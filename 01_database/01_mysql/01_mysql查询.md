## nodejs 查询数据库查询不到结果如何判断
**查看返回数据类型**
```js
console.log(typeof(res))

```
返回的结果是个数组对象
**判断返回结果为空**
```js
if (res.length === 0) {
    
}
```