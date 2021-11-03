const Secp256k1 = require('secp256k1');
const Ripemd160 = require('ripemd160');
const Base58 = require('base-58');
const Crypto = require('crypto');
const EthCrypto = require('eth-crypto');

const genEthAddress = (private_key) => {
    let priv = Buffer.from(private_key, "hex");
    if (!Secp256k1.privateKeyVerify(priv)) {
        throw "invalid private key specified";
    }
    const public_key = Buffer.from(Secp256k1.publicKeyCreate(priv, false).buffer);
    const sha = Crypto.createHash('sha256').update(public_key).digest();
    const ripemd = new Ripemd160().update(sha).digest();
    console.log('0x' + Buffer.from(ripemd).toString('hex'))
    return '0x' + Buffer.from(ripemd).toString('hex');
}

genEthAddress(私钥)