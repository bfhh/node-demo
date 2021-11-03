// const Crypto = require('crypto');
const Secp256k1 = require('secp256k1');
const Ripemd160 = require('ripemd160');
const Crypto = require('crypto');


// 私钥生成以太坊地址
const genEthAddress = (private_key) => {
    let priv = Buffer.from(private_key, "hex");
    if (!Secp256k1.privateKeyVerify(priv)) {
        throw "invalid private key specified";
    }
    const public_key = Buffer.from(Secp256k1.publicKeyCreate(priv, false).buffer);
    const sha = Crypto.createHash('sha256').update(public_key).digest();
    const ripemd = new Ripemd160().update(sha).digest();
    return `0x` + Buffer.from(ripemd).toString('hex');
}

console.log("address", genEthAddress("814891e59de1443b735902e2df6957c66ffdacb064a9ad43a1cbc59177c8bc74"))


