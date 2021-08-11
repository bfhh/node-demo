let obj1 = {}

if (obj1) {
    console.log("obj1 init")
}

let obj2
if (obj2) {
    console.log("obj2 init")
}


if (obj1 && obj1.hasOwnProperty("a")) {
    console.log("before",obj1.a)
}

obj1.a = "hello"

if (obj1 && obj1.hasOwnProperty('a')) {
    console.log("after",obj1.a)
}