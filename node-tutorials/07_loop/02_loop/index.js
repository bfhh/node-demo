let arr = [{
    "startTime":1,
    "endTime":2
},
    {
        "startTime":3,
        "endTime":4
    },
]


for (let key in arr) {
    console.log(key, arr[key].startTime)
}