"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);



function setup() {
$.getJSON("data/whoiswho.json")


  $( function() {
      $( "#list_one" ).sortable();
      $( "#list_one" ).disableSelection();
    } );

    $("#game_one").hide();

    $( function() {
        $( "#draggable" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "div" )
                .html( "Dropped!" );
          }
        });
      } );





}//end of set up
