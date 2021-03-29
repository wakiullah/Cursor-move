let slide = document.querySelector('.slide');

window.onmousemove = function(e) {
    var x = e.clientX;
    slide.style.left = x + 'px';
}