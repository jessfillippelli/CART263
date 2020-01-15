"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


window.onload = setup;
document.addEventListener('keydown', rotate);

//global variable
 let rotation = 0;

function setup(){
  console.log("is this shit working or nah");
  for (let i = 0; i < 1000; i++) {
    //create a pixel
    let pixel = document.createElement('div');
    pixel.setAttribute('class','pixel');
    //add a event to a pixel
    pixel.addEventListener('mouseover', paint);
    pixel.addEventListener('click', remove);

    document.body.appendChild(pixel);

  }
}

function paint(e){
let pixel = e.target;
// got this from https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
let r = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);
let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
 pixel.style.backgroundColor = rgb;
 //make pixel active so only the color ones will move
 pixel.classList.add("active");
 console.log(pixel);
setTimeout(resetPixel, 1000, pixel);
}


//can pass a element to another function
function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';
   pixel.classList.remove("active");
}

//e instead of pixels
function remove(e){
  e.target.style.opacity = '0';
pixel.classList.remove("active");

}

function rotate(){
  console.log(event.keyCode)
  //right clockwise 1 degree
  if(event.keyCode ===39 ){
    rotation = rotation+1;

    //had to make a active class so only the color pixels use roataion if not than the black ones will move too.
    let allPixels = document.getElementsByClassName("active");
      for (let i = 0; i < allPixels.length; i++) {
       allPixels[i].style.transform = 'rotate(' + rotation + 'deg)';
     }
 }
  //left counter cc 1 degree
  else if (event.keyCode ===37 ){
    rotation = rotation-1;
    let allPixels = document.getElementsByClassName("active");
      for (let i = 0; i < allPixels.length; i++) {
       allPixels[i].style.transform = 'rotate(' + rotation + 'deg)';
     }
  }
}
