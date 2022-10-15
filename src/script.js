function reveal() {
  var reveals = document.querySelectorAll(".main-section-text");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 70;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function scroll() {
  let reveals = document.querySelectorAll(".scroll-animated-elem");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 300;
    if (elementTop < windowHeight) {
      reveals[i].style.left = `${(windowHeight - elementTop - elementVisible)}px`
      if (windowHeight - elementTop - elementVisible > 0) {
        reveals[i].style.left = '0px'
      }
    }
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", scroll);