const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

//因为post请求是一个异步的请求，所以推荐使用promise
const getPostData  = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            //判断数据是否为空
            if (!postData) {

            }
            req.postData = postData
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}



const serverHandle = (req,res) =>{
    //设置返回的格式
    res.setHeader('Content-Type','application/json')

    //获取path
    const url = req.url
    req.path = url.split('?')[0]

    //解析query
    req.query = querystring.parse(url.split('?')[1])

    //处理post请求
    getPostData(req).then(postData=>{
        req.body = postData

        //处理blog路由
        const blogData = handleBlogRouter(req,res)
        if (blogData) {
            res.end(
                //讲对象转化为字符串
                JSON.stringify(blogData)
            )
            return
        }

        //处理登录路由
        const userData= handleUserRouter(req,res)
        if (userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }

        //未命中路由
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.write("not found")
        res.end()
    })

}

module.exports = serverHandle