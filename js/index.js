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
var submitButton = document.querySelector('.submit');
var exitButton = document.querySelector('.exit-button');

contactButton2.addEventListener('click', loadContact);
submitButton.addEventListener('click', closeContact);
exitButton.addEventListener('click', closeContact);

function loadContact() {
  contactBackground.style.display = 'block';
  contactWrapper.style.display = 'block';
}
function closeContact() {
  contactBackground.style.display = 'none';
  contactWrapper.style.display = 'none';
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
