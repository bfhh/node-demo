## promise

`promise`通常的格式如下

```js
function getFileContent(fileName) {
    const promise = new Promise((resolve, reject) => {
        //逻辑处理
        if (逻辑处理失败) {
            reject(err)
            return 
        }
        resolve(
            逻辑处理成功后的数据
        )
    })
    return promise
}

```

具体调用形式如下

```js
getFileContent('a.json').then(aData => {
        console.log('aData', aData)
        return getFileContent(aData.next())
    }
).then(bData => {
    console.log('bData', bData)
    return getFileContent(bData.next())
}).then(cData => {
    console.log('cData', cData)
})
```

每个`return` 返回的来的都是一个新的`promise`,所以可以直接`then`使用

## promise的作用

实际使用中，`promise`通常是因为一些一步操作使用，正常来说，一个数据如果是异步产生的，那么这时候如果不使用`promise`,直接在改代码下方处理数据，因为异步，所以是拿不到数据的，这时候就可以把这个异步操作放到`promsie`中处理，返回一个`promise`,接着直接使用`promise.then`进行处理

