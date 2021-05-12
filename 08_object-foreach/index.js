//遍历数组
var array = [1, 2, 3];

array.forEach(item => {
    console.log(item)
})

//建立独对象
let conf1 = {
    "q1": [1, 2, 3, 4, 5, 6],
    "q2": [7, 8]
}

let MC = {}
Object.keys(conf1).forEach((function (key) {
    if (!key) {
        return
    }
    conf1[key].forEach(item => {
        if (!item) {
            return
        }
        const k = ('m' + key.toString() + 'c' + item.toString()).trim()
        let v = {}
        v.m = key.toString()
        v.c = item.toString()
        MC[k] = v
    })
}))

let a = "123"
let b ="234"

console.log(a+b)


console.log(MC)