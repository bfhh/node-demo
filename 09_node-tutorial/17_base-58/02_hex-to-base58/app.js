const Base58 = require('base-58');
const hexString = 'E1fF88112A470C383e680ba1492f59E6D4BE4C2e'
const bufferHex = Buffer.from(hexString, 'hex');
const address = Base58.encode(bufferHex)
console.log("address base58", address)
