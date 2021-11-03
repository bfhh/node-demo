const fs = require('fs')
const path = require('path')

function getFileContent(fileName) {
    return new Promise((resolve, reject) => {
        const fullName = path.resolve(__dirname, 'file2s', fileName)
        fs.readFile(fullName, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(JSON.parse(data.toString()))
        })
    })
}

getFileContent('a.json').then(aData => {
        console.log('aData', aData)
        return getFileContent(aData.next)
    }
).then(bData => {
    console.log('bData', bData)
    return getFileContent(bData.next)
}).then(cData => {
    console.log('cData', cData)
}).catch(err => {
        console.log(typeof (err))
        console.log("err", err)
    }
)