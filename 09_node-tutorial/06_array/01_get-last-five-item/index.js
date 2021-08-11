const MAX_DATE = 5

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


const getLastThirty = (arr = []) => {
    if (arr.length < MAX_DATE) {
        return arr
    }
    let start = arr.length - MAX_DATE
    return (arr.slice(start, arr.length))

}

console.log("all arr", arr)

let sliceArr = getLastThirty(arr)
console.log("arr slice", sliceArr)
