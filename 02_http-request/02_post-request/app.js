const http = require('http')

const server = http.createServer((req, res) => {

    console.log("method ", req.method)
    if (req.method === 'POST') {
        let postData = ""
        req.on('data', chunk => {
            postData += chunk.toString()
        })

        req.on('end', () => {
            console.log(postData)
            res.end('hello world')
        })
    }
})

server.listen(8000)
console.log("server start")