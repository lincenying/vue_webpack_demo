module.exports = function(system) {
    var imgsrc = system == "iPhone" ? 'forios.png' : 'forandroid.png';
    document.querySelector(".weixin > img").setAttribute("src", "images/" + imgsrc);
    document.querySelector(".weixin").style.display = "block";
    document.querySelector(".weixin").addEventListener("click", function() {
        var b = document.querySelector(".weixin");
        b.style.display = "none";
    }, false);
};
