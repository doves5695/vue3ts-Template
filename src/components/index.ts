// 自定义插件暴露
import svgIcon from './SvgIcon/index.vue'

// 把全局组件放入一个对象当中
const allGlobalComponent: any = {svgIcon}
export default {
    install(app: any) {
        // 注册全部组件通过keys方法把对象转化成数组进行遍历
        Object.keys(allGlobalComponent).forEach(key => {
            app.component(key, allGlobalComponent[key])
        })
    }
}