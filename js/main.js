
let i = 0;
let images = [];
const slider = document.querySelector('#slider');
let playing = true;
let timer;
timeOut();


images[0] = 'img/bird.jpg';
images[1] = 'img/windows.jpeg';
images[2] = 'img/tree.jpeg';


function slideImgNext() {
	slider.src = images[i];

	if (i < images.length - 1){
		i = i + 1; 
	} else {
		i = 0;
	}
	console.log(slider.src);
}

function slideImgPrevious() {
	slider.src = images[i];

	if (i > 0){
		i = i - 1; 
	} else {
		i = images.length -1;
	}
	console.log(slider.src);
}

function timeOut() {
	clearInterval(timer);	
	timer = setInterval(slideImgNext, 2000);
}
	
const left = document.querySelector('#previous');
const right = document.querySelector('#next');
left.addEventListener('click', (event) => {	
		console.log('previous');
		timeOut();
		slideImgPrevious();
});

right.addEventListener('click', (event) => {
		console.log('next');
		timeOut();
		slideImgNext();
});

document.addEventListener('keydown', (event) => {
	if (event.keyCode == 37 || event.keyCode == 65) {
		slideImgNext();
		console.log('right');
	}
	else if (event.keyCode == 39 || event.keyCode == 68 ) {
		slideImgPrevious()
		console.log('left');
	}
	
});
const pause = document.querySelector('#pause');
pause.addEventListener('click', (event) => {
		if (playing) {
			console.log('pause');
			playing = false;
			clearInterval(timer);
			pause.innerHTML = "Play";
		} else {
			console.log('play');
			playing = true;
			timeOut();
			pause.innerHTML = "Pause";
		}	
	console.log(pause);
});
window.onload = slideImgNext();