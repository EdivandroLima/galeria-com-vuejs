import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/routes'
import VueMeta from 'vue-meta'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
