"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

let count=8;
//helps to go on two the next question in the array
let currentQuestionNum =0;

//got the question info from here https://en.wikipedia.org/wiki/Sisyphus
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


  });

  $( "#incorrect" ).click(function() {
    event.preventDefault();
    console.log("clicked button for wrong");

    //now we move on to the next question
    currentQuestionNum++;
    $("#question").text(godQuestion[currentQuestionNum].question);
    $("#correct").text(godQuestion[currentQuestionNum].correct);
    $("#incorrect").text(godQuestion[currentQuestionNum].incorrect);


  });






}
