import Vue from 'vue';
import App from './App.vue';
import router from './routes';
new Vue({
    el: '#app',
    router: router,
    render: function (h) { return h(App); }
});
