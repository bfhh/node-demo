const fs = require('fs')

const obj = {
    name: "科比",
    age: 41
}

fs.writeFileSync("hello1.txt", JSON.stringify(obj))

const obj2 = fs.readFileSync("hello1.txt").toString()

console.log('type', typeof (obj2), obj2)

const parseObj2 = JSON.parse(obj2)
console.log('type:',typeof(parseObj2),'value:',parseObj2)
