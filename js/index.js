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

const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

const navburger = document.querySelector('.nav-burger');
const navbar = document.querySelector('.nav-bar');

navburger.addEventListener('click', slideIn);

function slideIn() {
   navbar.style.display = 'block';
}

// Contact Form

const contactBtn = document.querySelector('.contact');
const container = document.querySelector('.container');
const black = document.querySelector('.fade-in');

contactBtn.addEventListener('click', form);

function form() {
    container.style.display = 'block';
    black.style.display = 'block';
}
