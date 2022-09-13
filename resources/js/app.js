require('./bootstrap');

import Vue from 'vue'
import App from './vue/app'
//font awesome for vue 2
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    library.add(faPlusSquare, faTrash)
    Vue.component('font-awesome-icon', FontAwesomeIcon)
//font awesome for vue 2 #



const app = new Vue({
    el: '#app',
    components: {App}
});

