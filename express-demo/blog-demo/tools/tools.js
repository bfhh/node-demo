const EthCrypto = require('eth-crypto');

const decimalToHex = (to, value, nonce,privateKey, gasLimit, gasPrice) => {
    let rawTxObj = {}
    rawTxObj.to = to
    rawTxObj.value = ('0x' + Number(value).toString(16))
    rawTxObj.nonce = ('0x' + Number(nonce).toString(16))
    rawTxObj.gasPrice = ('0x' + Number(gasPrice).toString(16))
    rawTxObj.gasLimit = ('0x' + Number(gasLimit).toString(16))
    rawTxObj.privateKey = privateKey
    return rawTxObj
}

const privateKeyToAddr = (privateKey) => {
    let priKey = ('0x' + privateKey.trim())
    let publicKey = EthCrypto.publicKeyByPrivateKey(priKey);
    let address = EthCrypto.publicKey.toAddress(publicKey);
    return address
}


module.exports = {
    decimalToHex,
    privateKeyToAddr
}