"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
let tarot;
$(document).ready(setup);


function setup() {
$.getJSON("data/data.json", tarotLoaded);
}

function tarotLoaded(data){
  tarot = data;
  console.log(tarot);
}
