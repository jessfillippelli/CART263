"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
window.onload = setup;
//rockSpeed = 0;

//window.requestAnimationFrame();
//document.addEventListener('mousedown', animate);

function setup(){
  console.log("is this shit working or nah");
  //let triangle = document.createElement('');
  //let rock = (canvas.Context);
  let mycanvas = document.getElementById("myCanvas");
  let context = mycanvas.getContext('2d');


// circle
   context.fillstyle = "brown";
   context.arc(100, 75, 50, 0, 2 * Math.PI);
   context.stroke();

   //triangle
   context.beginPath();
    context.moveTo(0,mycanvas.height);
    context.lineTo(mycanvas.width, 0);
    context.lineTo(mycanvas.width,mycanvas.height);
    context.fill();



}
