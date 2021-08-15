import './index.scss';
import App from './vue/App.vue';
import Vue from 'vue';
import Router from './router.js';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

new Vue({
    components: { App },
    el: '#app',
    router: Router,
    template: '<App></App>'
});