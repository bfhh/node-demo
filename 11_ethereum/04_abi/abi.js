const abi = [
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
]

// The contract is an object, each object in the abi array can be seen in the corresponding function name and input parameters return results,
// so that the corresponding mapping can get the results
// this[abi[i].name] = function 根据具体的参数才知道具体调用合约的那个函数，
// 以及利用  Web3Abi.encodeFunctionCall Web3Abi.decodeParameters根据对应的input和output才可以正确截出来结果
const setupMethods = (abi)=> {
    for(let i = 0; i < abi.length; ++i) {
        if(abi[i].type == 'function') {
            this[abi[i].name] = function(...args) {
                const amount = args[args.length - 3];
                const fee = args[args.length - 2];
                const cb = args[args.length - 1];
                let spread = [...args].slice(0, args.length - 3);
                const encoded = Web3Abi.encodeFunctionCall(abi[i], spread);
                const tx = new Likelib.Tx({
                    from: this._account.getAddress(),
                    to: this._address,
                    amount: amount,
                    fee: fee,
                    data: Buffer.from(encoded.replace('0x', ''), 'hex').toString('base64')
                });
                this._account.sign(tx);
                const hex_hash = tx.getHash();
                this._lk.pushTransaction(tx, function(err, reply) {
                    if(err) {
                        cb(err);
                    }
                    else if(reply.status_code != Likelib.Tx.Status.Pending && reply.status_code != Likelib.Tx.Status.Success) {
                        cb("Call failed with status " + reply.status_code);
                    }
                    else if(reply.status_code == Likelib.Tx.Status.Success) {
                        if(reply.message) {
                            let hex_reply = Buffer.from(reply.message, 'base64').toString('hex');
                            hex_reply = hex_reply.slice(8, hex_reply.length)
                            const decoded = Web3Abi.decodeParameters(abi[i].outputs, hex_reply);
                            cb(null, decoded, hex_hash);
                        }
                        else {
                            cb(null, hex_hash);
                        }
                    }
                })
            }
        }
    }
}

