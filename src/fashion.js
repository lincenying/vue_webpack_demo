var Vue = require("vue"),
    openApp = require("./module/openApp"),
    vueApp = require("./module/vueApp"),
    vueInfo = require("./module/vueInfo");

vueApp.methods.openApp = openApp;

Vue.component('my-info', vueInfo);
Vue.use(require("vue-resource"));
var vm = new Vue(vueApp);