"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);
function setup() {
  console.log("u loaded");


  $('div').on('click',divClicked); // Add a click listener to ever div
  function divClicked() {
    $(this).fadeOut(); // Tell the div cliked to fade out
  }

// $('div').slideToggle(2000);

//this
// $('div').hide().fadeIn(2000);

  //or this
  // let $divs = $('#first');
  // $divs.hide();
  // $divs.fadeIn(2000);
}
