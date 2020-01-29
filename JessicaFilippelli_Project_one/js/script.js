"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);
let wrong = new Audio("assets/sounds/Male_Laugh.mp3");
let right = new Audio("assets/sounds/Splashing_Around.mp3");

let rockStart;

let count=8;
//helps to go on two the next question in the array
let currentQuestionNum =0;

//got the question info from here https://en.wikipedia.org/wiki/Sisyphus
//link that helped me with the questions array https://stackoverflow.com/questions/42614939/trivia-game-using-jquery
let godQuestion = [{
 question:"ONE: Does Sisyphus roll a rock up a mountain as punishedment for his arrogance and decitfulness?",
 correct: "Yes",
 incorrect: "No",

}, {
question:"TWO: The rock stood up at the top of the hill and Sisyphus hung out near it and took a nap. ",
correct: "No",
incorrect: "Yes",


}, {
question:"THREE: Eternity was how long he had to repeat roling the rock up the mountain because it kept rolling down? ",
correct: "Yes",
incorrect: "No",


}, {
question:"FOUR: Is Sisyphus the son of KingAeolus of thessaly and Enarete?",
correct: "Yes",
incorrect: "No",


}, {
question:"FIVE: King Sisyphus betrayed one of Zeus's secrets? ",
correct: "Yes",
incorrect: "No",


 }, {
question:"SIX: Sisyphus died and told his wife to not throw his body into the middle of the public square.",
correct: "No",
incorrect: "Yes",

}, {
question:"SEVEN: Is King Sisyphus is the disk of the sun that rises everyday in the east and then sinks into the west?",
correct: "Yes",
incorrect: "No",


}, {
question:"EIGHT: Did Sisyphus have 7 wives?",
correct: "Yes",
incorrect: "No",


}

];

function setup(){
  //find whre the rock is
  let rockStartTop = $('#rock').css("top");

  //here is where we find out the left and top of where the rock is
  //these two line are to help make the string (the OG starting point of the rock ) into a number
  let rockStartTopFloat = parseFloat(rockStartTop.substring(0,rockStartTop.length-2));

  let rockStartLeft = $('#rock').css("left");
  let rockStartLeftFloat = parseFloat(rockStartLeft.substring(0,rockStartLeft.length-2));

//these guys are to make the current rock postion = the left and top so they are the same
  let currentRockX=rockStartLeftFloat;
  let currentRockY= rockStartTopFloat;

  console.log(rockStartTop);
  console.log(rockStartTopFloat);

  console.log(rockStartLeft);
  console.log(rockStartLeftFloat);

  console.log("YOU WORKING?")
  $("#question").text(godQuestion[currentQuestionNum].question);
  $("#correct").text(godQuestion[currentQuestionNum].correct);
  $("#incorrect").text(godQuestion[currentQuestionNum].incorrect);

  $( "#correct" ).click(function() {
    event.preventDefault();
    console.log("clicked button");

    //now we move on to the next question
    currentQuestionNum++;
    $("#question").text(godQuestion[currentQuestionNum].question);
    $("#correct").text(godQuestion[currentQuestionNum].correct);
    $("#incorrect").text(godQuestion[currentQuestionNum].incorrect);
    right.play();

    //this makes the rock move with a animate function
  //rock moves UP when the answer is YES
    //got help from this link: https://api.jquery.com/animate/#animate-properties-duration-easing-complete
   $("#rock").animate({
    top: "-=50",
    left: "-=50",
    //5000 is that it moves for 5 seconds
  }, 5000,
  function() {
    // Animation complete.
    currentRockY-=50;
    currentRockX-=50;
  });

  });

  $( "#incorrect" ).click(function() {
    event.preventDefault();
    console.log("clicked button for wrong");

    //now we move on to the next question
    currentQuestionNum++;
    $("#question").text(godQuestion[currentQuestionNum].question);
    $("#correct").text(godQuestion[currentQuestionNum].correct);
    $("#incorrect").text(godQuestion[currentQuestionNum].incorrect);
     wrong.play();


//rock moves down when the answer is NO
//the if statement is: if is the current rock top postion (currentRockY) is not the starting point for the rock. than move rock down and right
// bascally if the rock  is where it stated when you started the game than it cant move down.
if(currentRockY!==rockStartTopFloat){
    $("#rock").animate({
      top: "+=50",
      left: "+=50",
     //5000 is that it moves for 5 seconds
   }, 5000,
   function() {
     // Animation complete.
     currentRockY+=50;
     currentRockX+=50;
   });

}
else{
  console.log("same");
}


  });







}
