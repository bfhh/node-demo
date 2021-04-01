const axios = require('axios')
const {privateKeyToAddr} = require('../tools/tools')

//发送原生交易
const tokenViewPost = (signRawTxHex) => {
    let params = []
    params.push('0x' + signRawTxHex.trim())
    console.log('params',params)
    return axios
        .post('https://services.tokenview.com/vipapi/onchainwallet/etc?apikey=hhMhinzMZjtP2OmKwNuq', {
                "jsonrpc": "2.0",
                "id": "viewtoken",
                "method": "eth_sendRawTransaction",
                "params": params
            }
        )
        .then(res => {
            return {
                "success": true,
                "res": res
            }
        })
        .catch(error => {
            return {
                "success": false,
                "res": error
            }
        })
}

//获取地址最大nonce
const getTransactionCount = (privateKey) => {
    let address = privateKeyToAddr(privateKey)
    let addressArr = []
    addressArr[0] = address
    return axios
        .post('https://services.tokenview.com/vipapi/onchainwallet/eth?apikey=hhMhinzMZjtP2OmKwNuq', {
            "jsonrpc": "2.0",
            "id": "viewtoken",
            "method": "eth_getTransactionCount",
            "params": addressArr
        })
        .then(res => {
            return {
                "success": true,
                "data": res.data
            }
        })
        .catch(error => {
            return {
                "success": false,
                "data": error
            }
        })
}

module.exports = {
    tokenViewPost,
    getTransactionCount
}




