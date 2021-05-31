
arr = [[1,2],[3,4]]


const printCM = (item) => {
    return new Promise((resolve, reject) => {
        console.log("item",item)
        resolve(item[0])
    })
}

async function getZhihuColumn(id) {
    return await printCM(id);
}

const showColumnInfo = async () => {
    const promises = arr.map(x =>getZhihuColumn(x));
    for (const promise of promises) {
        const column = await promise;
        console.log(`column: ${column}`,JSON.stringify(column));
    }
};

// showColumnInfo()
//
//
// console.log("123")

let a = []

arr = [1,2]
a.push(arr)

console.log(a)