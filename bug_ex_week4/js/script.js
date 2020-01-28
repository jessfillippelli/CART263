"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

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
   }
