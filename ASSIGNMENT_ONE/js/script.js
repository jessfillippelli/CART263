"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


window.onload = setup;

// let = 1000;

function setup(){
  console.log("is this shit working or nah");
  for (let i = 0; i < 1000; i++) {
    //create a pixel
    let pixel = document.createElement('div');
    pixel.setAttribute('class','pixel');
    //add a event to a pixel
    pixel.addEventListener('mouseover', paint);
    document.body.appendChild(pixel);

  }


}

function paint(e){
let pixel = e.target;
pixel.style.backgroundColor = 'white';
// setTimeout(resetPixel);
setTimeout(resetPixel, 1000, pixel);
}

//can pass a element to another function
function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';
}
