const EthereumTx = require('ethereumjs-tx')

const signRawTx = (rawTx = {}) => {
    const privateKey = Buffer.from(
        rawTx.privateKey,
        'hex',
    )
    const txParams = {
        nonce: rawTx.nonce,
        gasPrice: rawTx.gasPrice,
        gasLimit: rawTx.gasLimit,
        to: rawTx.to,
        value: rawTx.value,
        // data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
    }

// The second parameter is not necessary if these values are used
// const tx = new EthereumTx(txParams, { chain: 'mainnet', hardfork: 'petersburg' })


    console.log("nonce",txParams.nonce)
    console.log("gasPrice",txParams.gasPrice)
    console.log("gasLimit",txParams.gasLimit)
    console.log("to",txParams.to)
    console.log("value",txParams.value)


    const tx = new EthereumTx(txParams)
    tx.sign(privateKey)
    const serializedTx = tx.serialize()
    return (serializedTx.toString('hex'))
}


module.exports = {
    signRawTx
}




