'use strict';

var i = 0;
var images = [];
var slider = document.querySelector('#slider');
var playing = true;
var timer;
var images = new Array();
timeOut();


images[0] ='../img/bird.jpg';
images[1] = '../img/windows.jpeg';
images[2] = '../img/tree.jpeg';


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
   
function nextImg() {
    i = i + 1; 
   i = i % images.length;
}

function prevImg() {
   if (i === 0) { 
        i = images.length; 
    }
    i = i - 2; 
}

var right = document.querySelector('button--previous');
var left = document.querySelector('button--next');
var pause = document.querySelector('button--pause');

document.addEventListener('click', function(event){
   if(event.target.className.includes('button--previous')){
      console.log('previous');
      timeOut();
      slideImgPrevious();
   }
});

document.addEventListener('click', function(event){
   if(event.target.className.includes('button--next')){
      console.log('next');
      timeOut();
      slideImgNext();
   }
});

document.addEventListener('keydown', function (event) {
   if (event.keyCode === 37 || event.keyCode === 65) {
      slideImgNext();
      console.log('right');
   }
   else if (event.keyCode === 39 || event.keyCode === 68 ) {
      slideImgPrevious();
      console.log('left');
   }
   
});
document.addEventListener('click', function(event){
   if(event.target.className.includes('button--pause')) {
      if (playing) {
         console.log('pause');
         playing = false;
         clearInterval(timer);
      } else {
         console.log('play');
         playing = true;
         timeOut();
      }
   }
});
window.onload = slideImgNext();