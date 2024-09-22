// plugins/antd.ts
import { defineNuxtPlugin } from '#app'
import Antd from 'ant-design-vue'
import 'ant-design-vue/es/style'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.use(Antd)
  }
})
