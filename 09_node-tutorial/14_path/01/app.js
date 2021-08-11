const  path = require('path')
const  fs = require('fs')

//获取路径 __diename
//拼接 path.resolve

console.log(path.resolve(__dirname, 'settings.json'))

console.log(path.resolve(__dirname,'../', 'settings.json'))
