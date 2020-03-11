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
 for(let i = 0; i<items.length; i++){ //start of for loop
    let tempArray = items[i];
    for(let j = 0; j<tempArray.length;j++){
      masterArray.push(tempArray[j])
    }
  } // end of for loop





//start game
  initializeGame();

})

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



    //display the data text
      let $container = $(".gametwotext");
      let person = getRandomPerson();
      $container.text(person.name + person.house + person.hair + person.blood_status + person.patronus);
          $('#game_two').append($container);

      }

//make the data random
      function getRandomPerson(){
          let randomPerson = masterArray[Math.floor(Math.random()*masterArray.length)];
          return randomPerson;
      }
