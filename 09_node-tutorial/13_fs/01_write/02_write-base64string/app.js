
const fs = require('fs')

const obj = {
    name : "科比",
    age : 41
}

const Base64Str = (Buffer.from(JSON.stringify(obj)).toString('base64'));
fs.writeFileSync("hello1.txt",Base64Str)

const  str = fs.readFileSync("hello1.txt").toString()

console.log('readFileSync',str)

const strObj  = Buffer.from(str, 'base64').toString().replace(/\\n/g, '').replace(/\\/g, '')
console.log('strObj',strObj)


