import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import UUID from "vue-uuid";
// import cors from 'cors';
import router from "./router/index.js";
import axios from "axios";
import VueAxios from 'vue-axios';
import axiosPlugins from 'vue-axios-cors'

Vue.use(VueAxios,axios);
Vue.use(UUID);
Vue.use(axiosPlugins);



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#black')
