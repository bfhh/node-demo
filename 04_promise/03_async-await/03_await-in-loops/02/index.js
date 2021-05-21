const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const names2 = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
const getData = (name) => {
    return new Promise((resolve, reject) => {
        console.log('getData name',name)
        resolve(name)
    })
}

async function getDataById(id) {
    const response = await getData(id)
    return await response
}


const showColumnInfo = async (names=[]) => {
    const promises = names.map(x => getDataById(x));
    for (const promise of promises) {
        const column = await promise
        console.log(`Name: ${column}`)
    }
    return 'success'

};


showColumnInfo(names).then(data=>{
    console.log('showColumnInfo then data',data)
        showColumnInfo(names2)
})

