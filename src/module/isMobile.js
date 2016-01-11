module.exports = function() {
    var userAgentInfo = navigator.userAgent;
    var flag = false,
        wx = false;
    if (userAgentInfo.indexOf('Android') > -1 || userAgentInfo.indexOf('Linux') > -1) {
        flag = "Android";
    } else if (userAgentInfo.indexOf('iPhone') > -1) {
        flag = "iPhone";
    } else if (userAgentInfo.indexOf('iPad') > -1) {
        flag = "iPhone";
    }
    if (userAgentInfo.indexOf('MicroMessenger') > -1) {
        wx = true;
    }
    return {
        "sys": flag,
        "wx": wx
    };
}
