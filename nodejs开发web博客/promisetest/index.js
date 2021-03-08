const fs = require('fs')
const path = require('path')


/*
正常异步方式获取文件内容
function getFileContent(fileName, callback) {
    //拼接成一个绝对路径
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        callback(
            //这里变为一个对象
            JSON.parse(data.toString())
        )
    })

}

callback-hell回调地狱，层数太多
getFileContent("a.json", (adata) => {
    console.log("a data", adata)
    getFileContent(adata.next,(bdata)=>{
        console.log("b  data",bdata)
        getFileContent(bdata.next,(cdata)=>{
            console.log("c data",cdata)
        })
    })
})
*/



/*
//用promise获取文件内容
function getFileContent(fileName) {
    const promise = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', fileName)
        fs.readFile(fullFileName, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(
                //这里变为一个对象
                JSON.parse(data.toString())
            )
        })
    })
    return promise
}


//promise打印三个文件
getFileContent('a.json').then(adata=>{
    console.log('a data',adata)
    return getFileContent('a.json')
}).then(bdata=>{
    console.log('b data',bdata)
    return getFileContent('b.json')
}).then(cdata=>{
    console.log('c data',cdata)
})*/
