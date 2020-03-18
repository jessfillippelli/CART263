"use strict";

/********************************************************************

Title of Project: Fan HP quiz
Author Name: Jessica Filippelli

This is a Harry Potter Quiz

*********************************************************************/

$(document).ready(setup);
//  THIS IS THA ARRAY THAT WILL BE CONTAINING YOUR DATA FROM THE JSON FILE
let people = [];


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
      people.push(tempArray[j])
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
        // get a random stuent from the students array
        let randomPerson = getRandomElement(people);
        console.log(randomPerson);

      //  $('#game_two').append($);
      //  see in the index.html where the container is coming from
      $container.text(randomPerson.name +" \n" + randomPerson.house +" \n" + randomPerson.hair +" \n" +randomPerson.blood_status +" \n"  + randomPerson.patronus);

      }

      function getRandomElement(array){
        return array[Math.floor(Math.random() * array.length)];
      }
