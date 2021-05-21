let CMObject = {
    "cm11": {
        "c": "cm1",
        "m": "cm1"
    },
    "cm22": {
        "c": "cm2",
        "m": "m2"
    },
    "cm33": {
        "c": "cm3",
        "m": "m3"
    },
    "cm44": {
        "c": "cm4",
        "m": "m4"
    },
    "cm55": {
        "c": "cm5",
        "m": "m5"
    },
    "cm66": {
        "c": "cm6",
        "m": "m6"
    },
    "cm77": {
        "c": "cm7",
        "m": "m7"
    },
    "cm88": {
        "c": "cm8",
        "m": "m8"
    },

}


let CMArray = []

for (const i in CMObject) {
    console.log("i", i)
    CMArray.push(i)
}



async function addPowerDataToChain() {
    for (const item of CMArray) {
        console.log(item)
         await printCM(item);
    }
}

const printCM = (item) => {
    return new Promise((resolve, reject) => {
        console.log("item",item)
        sleep()
        resolve(item)
    })
}

addPowerDataToChain()

function sleep() {
    let delay = 10000
    delay += new Date().getTime();
    while (new Date() < delay) {
    }
}
