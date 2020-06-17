// Ajax contact form

function _ (id) {
  return document.getElementById(id);
}

function submitForm(){
	_("submit").disabled = true;
	var formdata = new FormData();
	formdata.append( "name", _("name").value );
	formdata.append( "email", _("email").value );
  formdata.append( "subject", _("subject").value );
	formdata.append( "message", _("message").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "contactform.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("submit").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}

// Fade-in on scroll

const fader = document.querySelectorAll('.fade-in');
const slideLeft = document.querySelectorAll('.slide-left');
const slideTop = document.querySelectorAll('.slide-top');

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
      entry.target.classList.add('appear-2');
      entry.target.classList.add('appear-3');
      fadeOnScroll.unobserve(entry.target);
    }
  });
  }, options);

  fader.forEach(fader => {
    fadeOnScroll.observe(fader);
  });
  slideLeft.forEach(slideLeft => {
    fadeOnScroll.observe(slideLeft);
  })
  slideTop.forEach(slideTop => {
    fadeOnScroll.observe(slideTop);
  })

// Mobile Nav

const topnavigation = document.querySelector('.top-navigation');
const navburger = document.querySelector('.nav-burger');
const navbar = document.querySelector('.nav-bar');
const exitNav = document.querySelector('.close-nav');

navburger.addEventListener('click', slideIn);
exitNav.addEventListener('click', slideOut);
function slideIn() {
   navbar.classList.add('nav-bar-fade');
}
function slideOut() {
 navbar.classList.remove('nav-bar-fade');
}

// Contact Form

var contactBackground = document.querySelector('.contact-background');
var contactWrapper = document.querySelector('.contact-wrapper');
var contactButton2 = document.querySelector('.contact-button-2');
//var contactButton = document.querySelector('.contact-button');
var getintouch = document.querySelector('.get-in-touch');
var letsconnect = document.querySelector('.connect');
var submitButton = document.querySelector('.submit');
var exitButton = document.querySelector('.exit-button');

contactButton2.addEventListener('click', loadContact);
//contactButton.addEventListener('click', loadContact);
if(letsconnect){
  letsconnect.addEventListener('click', loadContact);
}
if(getintouch) {
getintouch.addEventListener('click', loadContact);
}
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
