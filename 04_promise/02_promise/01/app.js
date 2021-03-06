const fs = require('fs')
const path = require('path')

function getFileContent(fileName) {

    const promise = new Promise((resolve, reject) => {
        const fullName = path.resolve(__dirname, 'files', fileName)
        fs.readFile(fullName, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(JSON.parse(data.toString()))
        })
    })
    return promise
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
})
