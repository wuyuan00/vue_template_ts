import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TDesign from 'tdesign-vue-next'
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css'

const app = createApp(App)
app.use(TDesign)
app.use(store)
app.use(router)
app.mount('#app')
