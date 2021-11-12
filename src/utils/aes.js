import CryptoJS from 'crypto-js'

export default {
    // 加密
    encrypt(message, keyStr) {
        try {
            let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(message), keyStr, {
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            })
            return encrypted
        } catch(e) {
            return `error: ${e}`
        }
    },
    // 解密
    decrypt(ciphertext, keyStr) {
        try {
            let decrypted = CryptoJS.AES.decrypt(ciphertext, keyStr).toString(CryptoJS.enc.Utf8)
            return decrypted
        } catch(e) {
            return `error: ${e}`
        }
    }
}
