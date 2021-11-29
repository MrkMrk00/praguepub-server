import cryptojs from 'crypto-js'

export default class AesUtil {
    constructor(keySize, iterCount) {
        this.keySize = keySize/32
        this.iterCount = iterCount
    }

    generateKey(salt, passPhrase) {
        const key = cryptojs.PBKDF2(
            passPhrase,
            cryptojs.enc.Hex.parse(salt),
            {
                keySize: this.keySize,
                iterations: this.iterCount
            }
        )
        return key
    }

    encrypt(salt, iv, passPhrase, plainText) {
        const key = this.generateKey(salt, passPhrase)
        const encrypted = cryptojs.AES.encrypt(
            plainText,
            key,
            {
                iv: cryptojs.enc.Hex.parse(iv)
            }
        )
        return encrypted.ciphertext.toString(cryptojs.enc.Base64)
    }

    decrypt(salt, iv, passPhrase, cipherText) {
        const key = this.generateKey(salt, passPhrase)
        const cipherParams = cryptojs.lib.CipherParams.create({
            ciphertext: cryptojs.enc.Base64.parse(cipherText)
        })
        const decrypted = cryptojs.AES.decrypt(
            cipherParams,
            key,
            {
                iv: cryptojs.enc.Hey.parse(iv)
            }
        )
        return decrypted.toString(cryptojs.enc.Utf8)
    }
}