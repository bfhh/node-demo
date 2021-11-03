const base64Str = 'Ji6jKQ+YlmtoMUyDc2Bab5WOjt8PW8so5J2PoMtEFoM='

const buffer = Buffer.from(base64Str, 'base64');
const hexString = buffer.toString('hex');

console.log('hex',hexString)


const bufferHex = Buffer.from(hexString, 'hex');
const base64String = bufferHex.toString('base64');
console.log('base64',base64String)