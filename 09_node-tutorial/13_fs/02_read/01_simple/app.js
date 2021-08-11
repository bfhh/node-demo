var fs = require("fs")

fs.readFile("hello3.txt",function (err,data) {
   if(!err) {
       console.log(data.toString())
   }
})



console.log(fs.readFileSync("hello3.txt").toString())

