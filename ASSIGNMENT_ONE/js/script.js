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
    let pixel = document.createElement('div');
    pixel.setAttribute('class','pixel');
    document.body.appendChild(pixel);
  }
}
