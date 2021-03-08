const http = require('http')
const querystring = require('querystring')


// const server = http.createServer((req, res) => {
//     console.log('method ',req.method);
//     const url = req.url;
//     console.log("url ", url);
//     req.query = querystring.parse(url.split('?')[1])
//     console.log('query: ',req.query)
//     res.end(
//         JSON.stringify(req.query)
//     )
// })


/*
* 增加post请求数据
* */

// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         console.log('req content-type', req.headers['content-type'])
//         let postData = ''
//         req.on("data", chunk => {
//             postData += chunk.toString()
//         })
//         req.on('end', () => {
//             console.log('postData: ', postData)
//             res.end(postData)
//         })
//     }
// })


/*
* 返回路由
* */
// const server = http.createServer((req, res) => {
//     const url = req.url
//     const path = url.split('?')[0]
//     res.end(path);
// })


/*
* 综合起来
* */
const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    //设置返回格式为JSON
    res.setHeader('Content-type', 'application/json')

    //返回数据设置
    const resData = {
        method,
        url,
        path,
        query,
    }
    //返回
    if (method === 'GET') {
        res.end(
            JSON.stringify(resData)
        )
    }

    //是一个异步的
    if (method === 'POST') {
        let postData = ''
        req.on("data", chunk => {
            postData += chunk.toString()
        })
        req.on("end", () => {
            resData.postData = postData
            res.end(JSON.stringify(resData))
        })
    }
})


server.listen(8000)
console.log("listen ok")