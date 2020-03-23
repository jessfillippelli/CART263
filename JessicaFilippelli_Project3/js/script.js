"use strict";

/********************************************************************

Title of Project: Fan HP quiz
Author Name: Jessica Filippelli

This is a Harry Potter Quiz

*********************************************************************/

$(document).ready(setup);
//  THIS IS THA ARRAY THAT WILL BE CONTAINING YOUR DATA FROM THE JSON FILE
let people = [];
//in drop i can compare with random person
let randomPerson;

let rightAnswer = new Audio("assets/sounds/Pop.mp3");

//for score
//HOW MANY WAS found
let $matchesFound =0;
//HOW MANY MATCHES WERE MADE
let $totalMatches;

function setup() {

  //get data
  $.getJSON("data/whoiswho.json",function( data ) {
    console.log("load")
    let items = [];

    $.each( data, function( key, val ) {
      items.push( val );
    });

//FOR score
$('#total').text($totalMatches);

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


//all the game code goes in here
function initializeGame(){


  $( "#list_one" ).disableSelection();
  $( ".draggable" ).draggable();
  $( "#droppable" ).droppable({

    //where to relize what is the correct name is
    //can comparie in drop
    //acc name with image class/ID with that Name
    //can check name with class/ID
    //every image can have the right name
    //WHERE I PUT THE COMPARE FUNCTION
    drop: function( event, ui ) {
      $( this )
      .addClass( "ui-state-highlight" )
      .find( "div" )
      .html( "Dropped!" );
//when you get the answer right
  if (ui.draggable.attr("id") === randomPerson.id) {
    console.log("right");
    rightAnswer.play();

  }

//when it is wrong this will happen
  if (ui.draggable.attr("id") ==! randomPerson.id) {

    responsiveVoice.speak("wrong. try again", "UK English Female");
      console.log("wrong");
  }
    } //end of drop function
  });

  //display the data text
  let $container = $(".gametwotext");
  // get a random stuent from the students array
  randomPerson = getRandomElement(people);
  console.log(randomPerson);


  //  see in the index.html where the container is coming from
  $container.html("Name: "+randomPerson.Name + "<br> "  + "House: "+randomPerson.House + "<br> " + "Hair: " + randomPerson.Hair + "<br> " + "Blood status: "+randomPerson.Blood_status + "<br> "  + "Patronus: "+randomPerson.Patronus);
}

function getRandomElement(array){
  return array[Math.floor(Math.random() * array.length)];
}

//function for the score
function theMatches(){
   $(this).addClass('found');
   // $(this).off('mouseover');
  $matchesFounds++;
  $('#found').text($matchesFound);
 }
