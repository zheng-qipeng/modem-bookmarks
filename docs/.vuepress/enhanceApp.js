import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import copy from './public/js/copy' //复制

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(Element)
  setTimeout(() => {
    try {
      document && (() => { //对document的判断是防止编译的时候报错
        copy()
      })()
    } catch (e) {
      console.error(e.message)
    }
  }, 500)
}