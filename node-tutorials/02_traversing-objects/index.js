const obj = {
    'person1': {
        "name": "kobe",
        "age": 29
    },
    'person2': {
        "name": "kobe2",
        "age": 30
    },
    'person3': {
        "name": "kobe3",
        "age": 31
    }
};

//method1
for (const i in obj) {
    console.log("i", i)
    console.log("i content", obj[i])
}

//method2
Object.keys(obj).forEach(function (key) {
    console.log('obj foreach',key, obj[key])
})


