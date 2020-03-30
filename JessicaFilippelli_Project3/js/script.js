"use strict";

/********************************************************************

Title of Project: Fan HP quiz
Author Name: Jessica Filippelli

This is a Harry Potter Quiz. A user has to match all the images with the right data to see how much they
know about the Harry Potter characters

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
    console.log( "error"+ error );
  })

$('.restart').hide();
 //endGame();
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
    console.log("right");
    theMatches();
    rightAnswer.play();
      //speak();

    //remove the current person once the user matches it right so it will not show up again
  //  console.log("old length:: "+people.length);
    let theId = findId(people,randomPerson);
    if(theId!==-1){
      //console.log("id to remove:: "+theId);
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
       //speak();
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

// clear and reset
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
    console.log($matchesFound);
  $('#found').text($matchesFound);

  //you won stament
  $('.ui-dialog-content').dialog("close");
  $('.restart').show();

  if ($matchesFound  === 1){
    // open the dialog
    $( function() {
        $( "#dialog" ).dialog();
      } );
    console.log("you won");
  }
} //end of theMatches()




 //
 // function speak(){
 //     if (annyang) {
 //       let skip = {
 //   //when the user is done with the project they say this to clear the screen
 //
 //         // 'skip': function() {
 //         //
 //         //
 //         // }
 //       }; //end of let commands
 //       annyang.addCommands(commands);
 //       annyang.start();
 //       annyang.debug();
 //     } //end of if annyang
 // } //end of speak function
