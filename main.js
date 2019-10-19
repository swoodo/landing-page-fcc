// Mobile Menu
let icon = document.getElementById('hamburger');
let navSmall = document.getElementById('nav-small');

icon.addEventListener('click', mobileMenuReveal);

let iconClicks = 1;

function mobileMenuReveal(e) {
  iconClicks++;
  if (iconClicks % 2 == 0) {
    navSmall.style.top='7em';
    icon.style.transform='rotate(90deg)'
  } else {
    navSmall.style.top='-12em';
    icon.style.transform='rotate(0deg)'
  }
}

// run shoe gif on page refresh
let shoeImage = document.getElementById('shoe-gif');
shoeImage.src = "";   
shoeImage.src = 'images/shoe-loop.gif?'+new Date().getTime();
// load HQ shoe image after gif animation
window.setTimeout(function(){shoeImage.src = 'images/top-banner-shoe.png'},1300);



// Scroll to top button
window.addEventListener("scroll", scrollNav);


let scrollBtn = document.getElementById("scroll-button");
function scrollNav() {
	// show scroll button
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.bottom = '1em';
      scrollBtn.style.opacity = '1';
    } else {
    // hide scroll button
      scrollBtn.style.bottom = '-10em';
      scrollBtn.style.opacity = '0';
    }
}

// Shoe Rollover
let boots = document.getElementsByClassName('collection-item');

for(let i = 0; i < boots.length; i++) {
  boots[i].addEventListener('mouseenter', showBoot);
  boots[i].addEventListener('mouseleave', hideBoot);
}

function showBoot(e) {
  let image = e.target.querySelector('img');
  let itemName = e.target.querySelector('span');

  if (e.target.id === 'boot-1') {
    image.src = 'images/1460-2.jpg';
    itemName.className += 'highlight';
    console.log(itemName);
  } 
  else if (e.target.id === 'boot-2') {
    image.src = 'images/1461-2.jpg';
    itemName.className += 'highlight';
  } 
  else if (e.target.id === 'boot-3') {
    image.src = 'images/1490-2.jpg';
    itemName.className += 'highlight';
  } 
}

function hideBoot(e) {
  let image = e.target.querySelector('img');
  let itemName = e.target.querySelector('span');

  if (e.target.id === 'boot-1') {
    image.src = 'images/1460-1.jpg';
    itemName.className = '';
  } 
  else if (e.target.id === 'boot-2') {
    image.src = 'images/1461-1.jpg';
    itemName.className = '';
  } 
  else if (e.target.id === 'boot-3') {
    image.src = 'images/1490-1.jpg';
    itemName.className = '';
  } 
}

// Click boot to reveal description
let bootImages = document.getElementsByClassName('collection-item-img');

for(let i = 0; i < bootImages.length; i++) {
  bootImages[i].addEventListener('click', revealDescription);
}
let clicks = 1;

function revealDescription(e) {
  clicks++;
  let description = e.target.parentNode.querySelector('.collection-item-description');

  if (clicks % 2 == 0) {
    description.style.display = 'none';
  } else {
    description.style.display = 'flex';
  }
}