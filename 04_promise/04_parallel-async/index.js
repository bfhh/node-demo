function sleep(time) {
    let delay = time
    delay += new Date().getTime();
    while (new Date() < delay) {
    }
}

const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// const names2 = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
const getData = (name) => {
    return new Promise((resolve, reject) => {
        console.log('getData name', name)
        sleep()
        resolve(name)
    })
}

async function getDataById(id) {
    const response = await getData(id)
    return await response
}

const showColumnInfo = async (names = []) => {
    const promises = names.map(x => getDataById(x));
    console.log(await Promise.all(promises));

    // for (const promise of promises) {
    //     const column = await promise
    //     console.log(`Name: ${column}`)
    // }
    // return 'success'

};

showColumnInfo(names)

