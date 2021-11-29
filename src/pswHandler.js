import AesUtil from './AesUtil'
import cryptojs from 'crypto-js'

export function encrypt(dbUserPassword, userPassword) {
    const iv = cryptojs.lib.WordArray.random(128/8).toString(cryptojs.enc.Hex)
    const salt = cryptojs.lib.WordArray.random(128/8).toString(cryptojs.enc.Hex)

    const aesUtil = new AesUtil(128, 1000)
    const cipherText = aesUtil.encrypt(salt, iv, userPassword, dbUserPassword)

    return iv + '::' + salt + '::' + cipherText
}

export function fillTo16Chars(password) {
    const pswLength = password.length
    let paddedPsw = ''

    if (pswLength >= 16) paddedPsw = password.slice(0, 16)
    else {
        for (let i = 0; i < 16; i++) {
            if (i < pswLength) paddedPsw += password.charAt(i)
            else paddedPsw += 0
        }
    }
    return paddedPsw
}