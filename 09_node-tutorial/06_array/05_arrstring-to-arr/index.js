const qs = require('qs')

const arr = `[1,2,3,4]`
console.log("before",typeof(arr),arr)


const arr2 = eval(arr)
console.log("after",typeof(arr2),arr2)



