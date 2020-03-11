"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);
  let masterArray = [];


function setup() {

//get data
$.getJSON("data/whoiswho.json",function( data ) {
  console.log("load")
  let items = [];

  $.each( data, function( key, val ) {
    items.push( val );
  });


//put data into an array
 for(let i = 0; i<items.length; i++){
    let tempArray = items[i];
    for(let j = 0; j<tempArray.length;j++){
      masterArray.push(tempArray[j])
    }

    }

//start game
  initializeGame();

})
/*.done(function() {
    console.log( "second success" );
  })*/
  .fail(function(error) {
    console.log( "error"+ error );
  })

}//end of set up

function initializeGame(){

      $( "#list_one" ).sortable();
      $( "#list_one" ).disableSelection();
      $("#game_one").hide();
      $( ".draggable" ).draggable();
        $( "#droppable" ).droppable({

          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "div" )
                .html( "Dropped!" );
          }
        });

        for (let i =0; i<masterArray.length;i++){
          console.log(masterArray[i])
        }

      }
