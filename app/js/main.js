'use strict';
let diamondWrapper = document.querySelector('.diamond__wrapper'),
	diamond = document.querySelector('.diamond'),
	slideInterval,
	bg = document.querySelector('.diamond__wr'),
	currentSlide = 0,
	slides = document.querySelectorAll('.diamond__slide');

diamondWrapper.addEventListener('mouseover' , function() {
	 bg.classList.add('active');
	 diamond.classList.add('active');
 });

 diamondWrapper.addEventListener('mouseout' , function() {
	 bg.classList.remove('active');
	 diamond.classList.remove('active');
 });


diamondWrapper.addEventListener('click' , function() {
	slideInterval = setInterval(nextSlide,500);
	setTimeout(() => {clearInterval(slideInterval); }, 2000);
 });
 
function nextSlide() {
    slides[currentSlide].className = 'diamond__slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.add('active');
}
