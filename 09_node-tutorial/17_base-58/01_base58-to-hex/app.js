const Base58 = require('base-58');
let buffer = Base58.decode('S3m76m6W7HigbZoQwHvz2BYmCKe')
const buff = new Buffer.from(buffer);
console.log(buff.toString('hex'))