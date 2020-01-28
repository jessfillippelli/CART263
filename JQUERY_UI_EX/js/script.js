"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);
// const ANIMATION_TIME = 2000;
function setup() {

//dialog

$('#question').dialog({
  //buttons
  buttons: {
    "Red": makeItRed,
    "Green": makeItGreen
  }
});

function makeItRed(){
  $('body').css('backgroundColor', 'Red');
}

function makeItGreen(){
  $('body').css('backgroundColor', 'Green');
}


// $('.square').draggable({
//   stop: function(event, ui){
//   $(this).draggable('disable');
// }
// });
// //ami colors
//
// $('.square').animate({
//   backgroundColor: 'green'
// },{
//   duration: ANIMATION_TIME,
//   done: function () {
//     $(this).animate({
//       backgroundColor: 'red'
//     },ANIMATION_TIME);
//   }
// });
// const ANIMATION_TIME = 5000;
// $('.square').animate({
//   backgroundColor: 'yellow'
// },ANIMATION_TIME);


  // $('.square').draggable({
  //   axis: 'x'
  // });
}
