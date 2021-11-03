const ethWallet = require('ethereumjs-wallet')

const privateKey = "28194fbe95fa7befe1b7870c818e04e6ccfa10c6ab3987c812e52ffbbc9673d1"
let addressData = ethWallet.fromPrivateKey(buffer.fro)
console.log(`private key = , ${addressData.getPrivateKeyString()}`)
console.log(`address = , ${addressData.getAddressString()}`)