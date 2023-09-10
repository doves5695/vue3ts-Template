import { createApp } from 'vue'
// 引入Element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 国际化中文
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'

import svgIcon from '@/components/SvgIcon/index.vue'

// 获取应用实例对象
const app = createApp(App)

app.component('SvgIcon', svgIcon)


// 安装element-plus插件
app.use(ElementPlus)
// 安装国际化
app.use(ElementPlus, {
  locale: zhCn,
})
// 引入一个全局组件
import globalComponent from '@/components'
// 引入全局样式
import '@/styles/index.scss'




// 测试
import axios from 'axios'
axios({
  url: '/api/user/login',
  method: 'POST',
  data: {
    username: 'admin',
    password: '1112111'
  }
})





// 安装全局组件
app.use(globalComponent)
// 将应用挂载到挂载点上
app.mount('#app')
