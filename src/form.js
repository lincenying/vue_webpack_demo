var Vue = require("vue");
var vueResource = require('vue-resource');
var vueForm = require("./module/vueForm");

Vue.use(vueResource);
var vm = new Vue(vueForm);
