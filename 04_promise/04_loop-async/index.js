function sleep(time) {
    let delay = time
    delay += new Date().getTime();
    while (new Date() < delay) {
    }
}

const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// const names2 = ['11', '12_id', '13', '14', '15', '16', '17', '18', '19', '20']
const getData = (name) => {
    return new Promise((resolve, reject) => {
        console.log('getData name', name)
        // sleep()
        resolve(name)
    })
}

async function getDataById(id) {
    const response = await getData(id)
    return await response
}

const showColumnInfo = async (names = []) => {
    const promises = names.map(x => getDataById(x));
    return await Promise.all(promises)
};

showColumnInfo(names).then(data=>{
    console.log("data",data)
    }
)
console.log(1)

