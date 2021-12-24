
const genWalletWithAmount = (amount) => {
    let keyObj = genWallet()
    let txData = {}
    txData.amount = amount
    txData.to = keyObj.address
    keyObj.balance = amount
    return new Promise((resolve, reject) => {


        // 如果 transfer 内部 reject 一个错误出来，这里面不加catch 这个错误不会别外面捕捉到，因为这是相当于  new Promise
        // 这个 transfer 不一定会返回结果，所以需要transfer 函数内部加一个超时机制 主动reject 一个超时
        // 然后在这里捕捉到 reject 暴露出去
        // 正常来时候一个 promise 里面不应该写 嵌套异步，
        // 一个 promise 里面写一个异步程序
        // 一个大函数按照顺序依次处理所有的异步（return 一个异步函数）01 文件夹那个例子一样，
        // 但是因为 01 那个例子中有回调函数，可以 resolve reject 函数处理
        // 所以这里要加上一个 then 去 resolve reject 但是一层就好
        // catch 是为了捕捉 transfer 函数 reject 的错误，因为这是在整个一个 promise 函数内部，在这个函数返回的外面去
        // catch 不到


        transfer(txData).then(hash => {
            if (hash) {
                resolve(keyObj)
            } else {
                reject('')
            }
        }).catch(err => {
            console.log("genWalletWithAmount err", err)
            reject('genWalletWithAmount err:' + err)
        })
    })
}