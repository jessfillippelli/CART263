"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);
function setup() {
  setInterval(update, 500);
}

function update(){
  console.log("Update!");
}

function updateSpan(){
  console.log("Updating span!");
}
