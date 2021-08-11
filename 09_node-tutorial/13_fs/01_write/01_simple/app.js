var fs = require("fs");

//异步写入
fs.writeFile("hello1","123",function (err) {
    if (!err) {
        console.log("写入成功！")
    }
})

//options选项可以省略
fs.writeFile("hello4.txt","123",{flag:"w"},function (err) {
    if (!err) {
        console.log("写入成功！")
    }else{
        console.log(err)
    }
})

fs.writeFileSync("hello1.txt","123",)