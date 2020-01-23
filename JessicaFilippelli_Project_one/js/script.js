"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

let count=7;
//helps to go on two the next question in the array
let currentQuestionNum =0;

let godQuestion = [{
 question:"Does Sisyphus roll a rock up a mountain as punishedment for his arrogance and decitfulness?",
 correct: "Yes",
 incorrect: "No",

}, {
question:"The rock stood up at the top of the hill and Sisyphus hung out near it and took a nap. ",
correct: "No",
incorrect: "Yes",


}, {
question:"Eternity was how long he had to repeat roling the rock up the mountain because it kept rolling down? ",
correct: "Yes",
incorrect: "No",


}, {
question:"Is Sisyphus the son of KingAeolus of thessaly and Enarete?",
correct: "Yes",
incorrect: "No",


}, {
question:"am I A GOD?",
correct: "yes",
incorrect: "no",


 }, {
question:"am I A GOD?",
correct: "yes",
incorrect: "no",

}, {
question:"am I A GOD?",
correct: "yes",
incorrect: "no",


}, {
question:"am I A GOD?",
correct: "yes",
incorrect: "no",


}

];

function setup(){
  console.log("etattatatta")
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
}
