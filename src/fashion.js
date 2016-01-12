var Vue = require("vue"),
    openApp = require("./module/openApp"),
    vueApp = require("./module/vueApp"),
    comInfo = require("./component/info");
var vueResource = require('vue-resource');

Vue.component('my-info', comInfo);

Vue.partial('weixin', require("./tpl/weixin.html"));
var weixin = Vue.partial('weixin');
document.body.insertAdjacentHTML("beforeEnd", weixin);

Vue.use(vueResource);

vueApp.methods.openApp = openApp;
var vm = new Vue(vueApp);
