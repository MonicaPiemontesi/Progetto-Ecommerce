var swiper = new Swiper(".mySwiper", {
  direction: "orizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.onload=function(){
  var outerGifs = document.querySelectorAll('.jsFollow'),
      innerGifs = document.querySelectorAll('.jsFollow > .innerGif'),
      innerGifImages = document.querySelectorAll('.jsFollow > .innerGif > .image');
  window.onmousemove = rotateElems;
  function rotateElems(e) {
    var mouseX = e.pageX,
        mouseY = e.pageY;
    for(var i=0; i < innerGifs.length; i++) {
      var outerGif = outerGifs[i],
          innerGif = innerGifs[i],
          innerGifImage = innerGifImages[i],
          centerX = outerGif.offsetLeft + (outerGif.clientWidth / 2),
          centerY = outerGif.offsetTop + (outerGif.clientHeight / 2),
          degree = Math.atan2(mouseX - centerX, - (mouseY - centerY) )*(180/Math.PI);    
      innerGif.style.webkitTransform = "rotate(" + degree + "deg)";
      innerGif.style.transform = "rotate(" + degree + "deg)";
      degree = -degree;
      innerGifImage.style.webkitTransform = "rotate(" + degree + "deg)";
      innerGifImage.style.transform = "rotate(" + degree + "deg)";
    }
