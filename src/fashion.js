var Vue = require("vue"),
    openApp = require("./module/openApp"),
    vueApp = require("./module/vueApp"),
    vueInfo = require("./module/vueInfo");
var vueResource = require('vue-resource');

vueApp.methods.openApp = openApp;
Vue.component('my-info', vueInfo);
Vue.use(vueResource);

Vue.partial('weixin', require("./module/weixin.html"));
var weixin = Vue.partial('weixin');
document.body.insertAdjacentHTML("beforeEnd", weixin);

var vm = new Vue(vueApp);
