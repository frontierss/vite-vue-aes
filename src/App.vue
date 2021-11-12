<template lang="pug">
div(class="m-auto text-center")
    div(class="mb-5 text-2xl") 測試
    textarea(v-model="message" placeholder="輸出轉換內容" class="border border-indigo-600")
    div(mx-auto my-5)
        button(
            @click="encrypt"
            class="mx-1 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        ) 轉換AES
        button(
            @click="decrypt"
            class="mx-1 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        ) 轉換字串
    div(class="border-t border-gray-400 mt-2")
        div(class="w-[60%] mx-auto my-4 whitespace-pre-wrap break-words") {{ convertedMessage }}
</template>

<script>
import { ref } from 'vue'
import AES from '@utils/aes.js'

export default {
    setup () {
        let message = ref('')
        let convertedMessage = ref('')
        const keyStr = '123456'

        // 加密
        const encrypt = () => {
            let conver = AES.encrypt(message.value, keyStr)
            convertedMessage.value = conver
        }

        // 解密
        const decrypt = () => {
            let conver = AES.decrypt(message.value, keyStr)
            convertedMessage.value = conver
        }

        return {
            message, convertedMessage, encrypt, decrypt
        }
    }
}
</script>