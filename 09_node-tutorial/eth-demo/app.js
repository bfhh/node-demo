const EthereumTx = require('ethereumjs-tx')
const privateKey = Buffer.from(
    '8a5b4fd0ada3c38451c222c64db4277e62f655330e7f7bfc20f98f3b4a7208e3',
    'hex',
)

// const txParams = {
//     nonce: '0x00',
//     // gasPrice: '0x100',
//     // gasLimit: '0x271000',
//     gasPrice: '0x01',
//     gasLimit: '0x271000',
//     to: '0x0F91A3304c48FC6887A31242cE5d2B148F3E07FA',
//     value: '0x10',
//     // data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
// }


// gas limit 一般21000
// gas price 单位是wei 一般1-40GWEI 10进制也就是1Gwei后面是9个0
// nonce可以不填，系统会帮你设置，当然你也可以手动设置nonce,获取你账户的nonce值
// value表示wei  输入10000 0000 0000 0000 00 表示转账1eth


const txParams = {
    // nonce: '0x01',
    // gasPrice: '0x100',
    // gasLimit: '0x271000',
    gasPrice: '0xb2d05e00',
    gasLimit: '0x5208',
    to: '0x0F91A3304c48FC6887A31242cE5d2B148F3E07FA',
    value: '0x9184e72a000',
    // data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
}

// The second parameter is not necessary if these values are used
// const tx = new EthereumTx(txParams, { chain: 'mainnet', hardfork: 'petersburg' })
const tx = new EthereumTx(txParams)
tx.sign(privateKey)
const serializedTx = tx.serialize()
console.log(serializedTx.toString('hex'))

