var Vue = require("vue")
openApp = require("./module/openApp"),
    vueApp = require("./module/vueApp"),
    vueInfo = require("./module/vueInfo");
var vueResource = require('vue-resource');

vueApp.methods.openApp = openApp;
Vue.component('my-info', vueInfo);
Vue.use(vueResource);
var vm = new Vue(vueApp);
