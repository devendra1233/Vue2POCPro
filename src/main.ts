import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret , faBicycle , faCoffee ,faFeather,   } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret,faBicycle,faCoffee,faFeather)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
