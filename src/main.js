import Vue from 'vue'
import App from './App.vue'
//import Router from './routes/'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import MagicGrid from 'vue-magic-grid'
import VueFullpage from 'fullpage-vue'


Vue.use(VueFullpage)
Vue.use(MagicGrid)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),

}).$mount('#app')