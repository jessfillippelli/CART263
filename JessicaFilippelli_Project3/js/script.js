"use strict";

/********************************************************************

Title of Project: Fan HP quiz
Author Name: Jessica Filippelli

This is a Harry Potter Quiz. A user has to match all the images with the right data to see how much they
know about the Harry Potter characters

*********************************************************************/

$(document).ready(setup);
//the array for the data in the JSON file
let people = [];
//in drop i can compare with random person
let randomPerson;

let rightAnswer = new Audio("../assets/sound/Pop.mp3");

//for score
//how many matches were found
let $matchesFound =0;
//how many matches were there
let $totalMatches;

//to findout if the data, to not let ot show up again if it was right
function findId(arr,e){
  for(let i =0; i<arr.length;i++){
    if(arr[i].id === e.id){
      return i;
    }
  }
  return -1;
}

function setup() {
  //calling annyang
  speak();
  //get data
  $.getJSON("data/whoiswho.json",function( data ) {
    console.log("load")
    let items = [];
    $.each( data, function( key, val ) {
      items.push( val );
    });

//for score
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
  })

//hide the button - only want it to show when the game is over
$('.restart').hide();
}//end of set up


//all the game code goes in here
function initializeGame(){
  $( "#list_one" ).disableSelection();
  $( ".draggable" ).draggable({
    //to tell if a image got drop on the box it should go back to where it was (only if it wrong) cuz it was valid object for the dropable
    revert: "valid"
  });
  $( "#droppable" ).droppable({


    drop: function( event, ui ) {
      $( this )
      .addClass( "ui-state-highlight" )
      .find( "div" )
      .html( "Dropped!" );

//when it is right: this will happen
  if (ui.draggable.attr("id") === randomPerson.id) {
    theMatches();
    rightAnswer.play();

    //remove the current person once the user matches it right so it will not show up again
    let theId = findId(people,randomPerson);
    if(theId!==-1){
      people.splice(theId,1);
    }

    //setTimeout becasue to get it some time to change the data.
    //becasue the data was moving to fast. if there was a wrong anwer and a right answer it would happen at the same time
    //so the audio for right answer and responsiveVoice for wrong answer were happening at the same time
    setTimeout(nextRound,1000);
    ui.draggable.remove();
  }

//when it is wrong: this will happen
  if (ui.draggable.attr("id") !== randomPerson.id) {
    responsiveVoice.speak("wrong", "UK English Female");
      console.log("wrong");
      setTimeout(nextRound,1000);
  }
    } //end of drop function
  });

  //display the data text
  let $container = $(".game");
  // get a random stuent from the students array
  randomPerson = getRandomElement(people);
  //  see in the index.html where the container is coming from
  $container.html("Name: "+randomPerson.Name + "<br> "  + "House: "+randomPerson.House + "<br> " + "Hair: " + randomPerson.Hair + "<br> " + "Blood status: "+randomPerson.Blood_status + "<br> "  + "Patronus: "+randomPerson.Patronus);
}//end of initializeGame

// clear and reset and goes to another random person from the json file
function nextRound(){
  //display the data text
  let $container = $(".game");
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
  //"you won" stament when the game is over
  $('.ui-dialog-content').dialog("close");
  $('.restart').show();

  //$('.restart').hide();
  //to hide the you won text as soon as you open the game. with out this it would show up
  $("#win").show();

  if ($matchesFound  === 1){
    // open the dialog when the game is over
    $( function() {
        $( "#dialog" ).dialog();
      } );
    console.log("you won");
  }
} //end of theMatches()

function speak(){
     if (annyang) {
       let skipCommand = {

          'skip': function() {
            //when they say skip it goes to another random person
            nextRound();
         }
       }; //end of let commands
       annyang.addCommands(skipCommand);
       annyang.start();
       annyang.debug();
     } //end of if annyang
 } //end of speak function
