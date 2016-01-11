module.exports = function(event){
    var dom = event.currentTarget;
        isMobile = require('./isMobile')(),
        ua = isMobile.sys,
        wx = isMobile.wx,
        href = dom.getAttribute("data-href");
    if (wx) {
        require("./openWeixin")(ua);
    } else {
        href = href || (ua == "Android" ? "app://app/openApp/" : "app://");
        window.location.href = href;
        setTimeout(function() {
            window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.qzone";
        }, 1000);
    }
};