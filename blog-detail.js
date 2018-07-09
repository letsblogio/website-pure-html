var aside = document.getElementsByClassName("outline")[0];
var aside_sticky_offset_top = aside.offsetTop;
window.onscroll = function() {
    if(window.pageYOffset > aside_sticky_offset_top) {
        aside.classList.add("aside-sticky");
    } else {
        aside.classList.remove("aside-sticky");
    }
}