"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);
let buzz = new Audio("assets/sounds/buzz.mp3");
let crunch = new Audio("assets/sounds/crunch.wav");
let $fly;
let $mouth;

function setup(){
  $mouth = $('#mouth');
  $fly = $('#fly');


$('#fly').draggable();
  $('#mouth').droppable({
    drop: onDrop
  });

}


   function onDrop(event, ui) {
     console.log("Dropped!");
     $fly.remove();
     setInterval(chew, 300);
   }

   function chew() {
     if ($mouth.attr("src") === "assets/images/mouth-open.png") {
       $mouth.attr("src", "assets/images/mouth-closed.png");
     } else {
       $mouth.attr("src", "assets/images/mouth-open.png");
     }
   }
