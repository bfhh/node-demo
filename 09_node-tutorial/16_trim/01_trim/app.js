//Remove the first and last strings
let str = "0x1234"

str = str.replace(/^(\s|)+$/g,'')

console.log(str)