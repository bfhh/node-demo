const NodeRSA = require('node-rsa');

const _pubKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgYPMgk3sik2AAeQUt5hjR7qP8SxL40cQVBj+wxYGedbE6EVTm5PA4Y3E0a/W481hY/j8rndZbyjjrs40hpZ8T8h2OegtdVlb6Re0Hu/1F6W4CziySYxSDtQAmJoMD+yd0H1H1EhjBn6Ku/Q+IgoiAoH72VYeHBzDsIBkD9+zgRQIDAQAB
-----END PUBLIC KEY-----`;

var publicKey = new NodeRSA(_pubKey);
var encrypted = publicKey.encrypt(12345, 'base64');
console.log(encrypted);

// const code = 'WlN0G1jFW0mo8NU8nX4zA7Gn2N+yhpkvsPwvyfIoYCXIoK+RLZ1fyvPcDrOjiUcaARjCxnkOncrVqj9gZlh8jg==';
//
// var privateKey = new NodeRSA(_priKey);
// decrypted = privateKey.decrypt(code, 'utf8');
// console.log(decrypted);