const print = (name) => {
    console.log(name)
}

obj = {
    add: print
}

let add = 'add'
let p = obj[add]

p(123)