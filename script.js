const container = document.querySelector('.slidesOverflow');
let slides = container.querySelectorAll('.slideContainer');
slides = Array.from(slides);
const leftSlideBtn = document.querySelector('.slidesLeftArrowBtn');
const rightSlideBtn = document.querySelector('.slidesRightArrowBtn');
let cont = 0;
let actualSlide = 0;
let playSlide;
container.style.gridTemplateColumns = `repeat(${slides.length}, 100%)`;

rightSlideBtn.addEventListener('click', nextSlide);
leftSlideBtn.addEventListener('click', prevSlide);
container.addEventListener('mouseover', pauseSlide);
container.addEventListener('mouseout', playAgain);

function nextSlide () {
	if(actualSlide !== slides.length -1) {
		cont -= 1;
		actualSlide +=1;
		console.log(`cont: ${cont}`);
		console.log(`actualSlide: ${actualSlide}`);
		slides.forEach( function(element) {
			element.style.transform = `translateX(${cont}00%)`;
		});
	} else {
		console.log('last slide');
		cont = 0;
		actualSlide = 0;
		console.log(`cont: ${cont}`);
		console.log(`actualSlide: ${actualSlide}`);
		slides.forEach( function(element) {
			element.style.transform = `translateX(${cont}00%)`;
		});
	}
};

function prevSlide () {
	if(actualSlide === 0) {
		actualSlide = 0;
		console.log('first slide')
		cont = slides.length -1;
		actualSlide = slides.length -1;
		console.log(`cont: ${cont}`);
		console.log(`actualSlide: ${actualSlide}`);
		slides.forEach( function(element) {
			element.style.transform = `translateX(-${cont}00%)`;
		});
	} else {
		cont +=1;
		actualSlide -= 1;
		let contNegativeConvert = (actualSlide)*(-1);
		console.log(`contNegativeConvert: ${contNegativeConvert}`);
		console.log(`cont: ${cont}`);
		console.log(`actualSlide: ${actualSlide}`);
		slides.forEach( function(element) {
			element.style.transform = `translateX(${contNegativeConvert}00%)`;
		});
	}
};

playSlide = setInterval(nextSlide, 6000);

function pauseSlide() {
	clearInterval(playSlide);
	console.log('paused');
};

function playAgain() {
	console.log('play again')
	playSlide = setInterval(nextSlide, 6000);	
};

console.log(slides);