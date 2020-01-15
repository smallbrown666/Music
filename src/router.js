import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const getComponent = (name) => () => import(`./views/${name}.vue`); //路由懒加载
//这个getComponent函数配合下面routes使用 实现路由懒加载
export default new Router({
    mode: 'hash',  //打包上线需要换成hash模式 避免出现空白页面
    routes: [{
        path: '/playlist/detail',
        component: getComponent('PlayListPage') //歌单页面
    }, {
        path: '/',
        component: getComponent('HomePage') //主界面
    }]
})