const base64Str = 'gzChPWgZo4Q+sqxB6LJ/aYssJePrV/FgZQtrffsr7EE='

const buffer = Buffer.from(base64Str, 'base64');
const hexString = buffer.toString('hex');

console.log('hex',hexString)


const bufferHex = Buffer.from(hexString, 'hex');
const base64String = bufferHex.toString('base64');
console.log('base64',base64String)