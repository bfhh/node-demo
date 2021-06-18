function sleep(time) {
    let delay = time
    delay += new Date().getTime();
    while (new Date() < delay) {
    }
}

const names = [
    {
        "name": 1,
        "time": 5000
    },
    {
        "name": 2,
        "time": 1000
    },
    {
        "name": 3,
        "time": 1000
    },
]

const getData = (x) => {
    return new Promise((resolve, reject) => {
        sleep(x.time)
        console.log('getData name', x.name)
        resolve(x.name)
    })
}

async function getDataById(id) {
    const response = await getData(id)
    return response;
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

