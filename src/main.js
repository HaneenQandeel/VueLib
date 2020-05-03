import Vue from 'vue';
import App from './App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
 import 'sweetalert2/dist/sweetalert2.min.css';
import VueTheMask from 'vue-the-mask';
// Import any of available themes
import VueToast from 'vue-toast-notification';
import VueTour from 'vue-tour';
import SmartTable from 'vuejs-smart-table'
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
import FlagIcon from 'vue-flag-icon'
require('vue-tour/dist/vue-tour.css');
import 'vue-toast-notification/dist/index.css';

Vue.use(VueTour);
Vue.use(VueToast);
Vue.use(VueTheMask);
Vue.use(VueSweetalert2,options);
Vue.use(SmartTable);
Vue.use(FlagIcon);


const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
