// Smooth scrolling

$(function() {
  $('a[href^="#"]').stop().click(function() {
     if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
       var UD_HASH = this.hash;
       var UD_ZIEL = $(this.hash);
       if(UD_ZIEL.length) {
         var UD_ABSTAND_TOP = UD_ZIEL.offset().top;

         $('html, body').animate({scrollTop: UD_ABSTAND_TOP},600,function(){
            window.location.hash = UD_HASH;
         });
         return false;
       }

     }
  });
});

// Fade-in on scroll

const fader = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px"
};

const fadeOnScroll = new IntersectionObserver(function(
  entries, fadeOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      fadeOnScroll.unobserve(entry.target);
    }
  });
  }, options);

  fader.forEach(fader => {
    fadeOnScroll.observe(fader);
  })

// Homepage SVG

const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}



const navburger = document.querySelector('.nav-burger');
const navbar = document.querySelector('.nav-bar');
const exitNav = document.querySelector('.close-nav');

navburger.addEventListener('click', slideIn);
exitNav.addEventListener('click', slideOut);

function slideIn() {
   navbar.style.display = 'block';
}
function slideOut() {
 navbar.style.display = 'none';
}

// Contact Form

var contactBackground = document.querySelector('.contact-background');
var contactWrapper = document.querySelector('.contact-wrapper');
var contactButton2 = document.querySelector('.contact-button-2');
var contactButton = document.querySelector('.contact-button');
var submitButton = document.querySelector('.submit');
var exitButton = document.querySelector('.exit-button');

contactButton2.addEventListener('click', loadContact);
contactButton.addEventListener('click', loadContact);
submitButton.addEventListener('click', submitContact);
exitButton.addEventListener('click', closeContact);

function loadContact() {
  contactBackground.style.display = 'block';
  contactWrapper.style.display = 'block';
}
function closeContact() {
  contactBackground.style.display = 'none';
  contactWrapper.style.display = 'none';
}
function submitContact() {
  contactBackground.style.display = 'none';
  contactWrapper.style.display = 'none';
  alert('Form was submitted');
}

// Scroll Effect
EachAnim('leftfade');

$(window).scroll(function(){
  EachAnim('leftfade');
});

function EachAnim(name) {
  $('.' + name).each(function() {
    switch (name) {
      case 'leftfade': AddClass(this, 'fade-left');
        break;
    }
  });
};

function AddClass(object, name) {
  if(IsVisible(object)) {
    $(object).addClass(name);
  }
}

function IsVisible(object) {
  var viewport = $(window).scrollTop() + $(window).height();
  var border = $(object).offset();
  border.bottom = border.top + $(object).outerHeight();
  return (!(viewport < (border.top + 250) || $(window).scrollTop() > (border.bottom)));
}

// Image Slider

var leftSlide = document.querySelector('.image-wrapper');
var rightSlide = document.querySelector('.image-wrapper-2');
var Slides = document.querySelector('.Image-slider').children;
var allSlide = Slides.length - 1;
var index = 1;

leftSlide.addEventListener('click', SlideLeft);
rightSlide.addEventListener('click', SlideRight);

function SlideLeft() {
   nextSlide("left")
}

function SlideRight() {
   nextSlide("right")
}

function nextSlide(direction) {
  if(direction == "right") {
    index++;
    if(index==allSlide) {
      index=1;
    }
  } else {
    if(index==1) {
      index=allSlide;
    }
    index--;
  }
  for(i = 0; i < Slides.length; i++) {
     Slides[i].classList.remove('active');
  }
  Slides[index].classList.add('active');
}
