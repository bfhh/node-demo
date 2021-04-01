




const EthCrypto = require('eth-crypto');
// const identity = EthCrypto.createIdentity();
//
// console.log(identity)

/*
{
    address: '0x613b46045092F60e2E6b918656DC29e91fc24068',
   privateKey: '0x3bff116db74f0269b1f4a6a57a60c69b0b314731a1d92ccb46dfa7d23164735b',
    publicKey: '69b68e7d7495545fc696fd5bba4552fe9206971266453452f26e96f4c00249e4d9
    69c008e8c79aebd40092a83d5c413ee34ac141a4f0a858a9be177eed25aeb8'
}
c*/

const privateKeyToAddr = (privateKey) => {
    let priKey = ('0x' + privateKey)
    let publicKey = EthCrypto.publicKeyByPrivateKey(priKey);
    let address = EthCrypto.publicKey.toAddress(publicKey);
    return address
}




let prikey = '8a5b4fd0ada3c38451c222c64db4277e62f655330e7f7bfc20f98f3b4a7208e3'

console.log(privateKeyToAddr(prikey))

// const publicKey = EthCrypto.publicKeyByPrivateKey(
//     prikey
// );
// console.log(publicKey)
//
// const address = EthCrypto.publicKey.toAddress(
//     publicKey
// );
// console.log('address',address)
// > '0x3f243FdacE01Cfd9719f7359c94BA11361f32471'