const abi = `[
    {
        "inputs": [],
        "name": "retrieve",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "num",
                "type": "uint256"
            }
        ],
        "name": "store",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]`

console.log("before abi", typeof (abi))

const abiBase64Str = (Buffer.from(abi).toString('base64'));
const str = Buffer.from(abiBase64Str, 'base64').toString().replace(/\\n/g, '').replace(/\\/g, '')
console.log(typeof (eval(str)))
console.log(eval(str))