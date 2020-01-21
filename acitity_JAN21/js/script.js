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
  //when u click on a red sentence
  $('span').click(spanClicked);
}

function update(){
  //console.log("Update!");
  $('span').each(updateSpan);
    console.log('u ok?');

}

function updateSpan(){
  //console.log("Updating span!");
  //random number
  let random = Math.random();
  if (random < 0.1){
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}

 function spanClicked(){
       $(this).removeClass('revealed');
     $(this).addClass('redacted');
 }
