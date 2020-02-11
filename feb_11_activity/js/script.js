"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
$(document).ready(setup);
let speech = ["hello people of planent ear"]

function setup() {
  responsiveVoice.speak("Hello world", "UK English Male", {
    onstart: showSpeaking,
    onend: hideSpeaking
  });
}

function showSpeaking() {
  $('body').css('background-color', 'green');
}

function hideSpeaking() {
  $('body').css('background-color', 'white');
}
// $(document).ready(setup);
//
//
// function setup() {
//
// $(document).on('click',talk)
//
//
// }
//
// function talk(){
//   //responsiveVoice.speak("Baby shark, doo doo doo doo doo doo");
//   responsiveVoice.speak("hello world", "UK English Male",{
//
//     pitch: 0,
//     rate: 0.2
//   }
//
//
//
// );
// }
