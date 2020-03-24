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

let rightAnswer = new Audio("../assets/sound/Pop.mp3");

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
  $( ".draggable" ).draggable({
    //tell it if it got drop on the box it should go back cuz it was valid
    revert: "valid"
  });
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
    theMatches();
    rightAnswer.play();
    setTimeout(nextRound,1000);
    ui.draggable.remove();
  }

//when it is wrong this will happen
  if (ui.draggable.attr("id") !== randomPerson.id) {
    responsiveVoice.speak("wrong", "UK English Female");
      console.log("wrong");
      setTimeout(nextRound,1000);
       //ui.draggable.reset();
  }

//this three lines are for when you get a match right, that the data does not reapear 
  let randomPick = Math.floor(Math.random() * people.length);
  randomPerson = people[randomPick];
  people.splice(randomPick,1);
  console.log(people);

    } //end of drop function
  });

  //display the data text
  let $container = $(".gametwotext");
  // get a random stuent from the students array
  randomPerson = getRandomElement(people);



  //  see in the index.html where the container is coming from
  $container.html("Name: "+randomPerson.Name + "<br> "  + "House: "+randomPerson.House + "<br> " + "Hair: " + randomPerson.Hair + "<br> " + "Blood status: "+randomPerson.Blood_status + "<br> "  + "Patronus: "+randomPerson.Patronus);


}//end of initializeGame

// clear and reset
function nextRound(){
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
  $matchesFound++;
  $('#found').text($matchesFound);
 }
