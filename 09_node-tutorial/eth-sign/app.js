//很方便的产生私钥，公钥，地址

const EthCrypto = require('eth-crypto');

const identity = EthCrypto.createIdentity();
console.log('privateKey', identity.privateKey)
console.log('publikey', identity.publicKey)
console.log('address', identity.address)

// privateKey 0x8a5b4fd0ada3c38451c222c64db4277e62f655330e7f7bfc20f98f3b4a7208e3
// publikey 082788d6a283ce2d879eaab17b89843da747637e646ff95325a2dbb39b13c832f3dc685
// 41ca97de88e008afe672517c431bb063d8200f9281e4e557b5bd9c216
// address 0x647AF71c0274deB7dffA9e2B225d669b7Cea2c29

const privateKey = '0x8a5b4fd0ada3c38451c222c64db4277e62f655330e7f7bfc20f98f3b4a7208e3'
const address = '0x647AF71c0274deB7dffA9e2B225d669b7Cea2c29'

//
// const rawTx = {
//     from: address,
//     to: '0x0F91A3304c48FC6887A31242cE5d2B148F3E07FA',
//     value: 100000000000000000,
//     gasPrice: 5000000000,
//     nonce: 0,
//     gasLimit: 21000,
//     chainId:20
// };
//
// const signedTx = EthCrypto.signTransaction(
//     rawTx,
//     privateKey
// );
//
// console.log(signedTx);
