import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(axios)
Vue.prototype.$axios = axios
axios.defaults.baseUrl = '/api'

Vue.config.productionTip = false
import './style/common.scss';

//图片懒加载
import VueLazyload from 'vue-lazyload';

var userAgent = window.navigator.userAgent;
if (userAgent.indexOf('NET') != -1) {
    //ie浏览器不兼容懒加载组件处理
    Vue.directive('lazy', function(el, binding) {
        el.src = binding.value
    })
} else {
    //实现图片懒加载
    Vue.use(VueLazyload, { preLoad: 1.3 })
}

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')