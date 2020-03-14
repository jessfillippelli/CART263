"use strict";

/********************************************************************

Title of Project
Author Name



*********************************************************************/

$(document).ready(setup);

let vowels = [ "a", "e", "i", "o", "u", "y"];

function setup() {

$('#content').on('click', getRandomArrayElement);
  // $('#k').click(function() {
  //     location.reload();
  // });
  // $("button").click(function(){
  //           location.reload(true);
  //       });
  //done call that function
  //fail call the othe functon
$.getJSON("data/data.json").done(dataLoaded).fail(dataNotLoaded);
}

function dataLoaded(data){
    console.log(data.condiments);

//Condiment
let randomCondiment = getRandomArrayElement(data.condiments);
let verb = "is";
//tell you how long the word is
if (randomCondiment.charAt(randomCondiment.length -1 ) === "s"){
  verb = "are";
}

//rooms.length, cats.length, condiments.length,

if (randomnhlteams.charAt(nhlteams.lenght,) === "a"){
  verb ="an";
}

//cat
let randomCat = getRandomArrayElement(data.cats);

//room
let randomRoom = getRandomArrayElement(data.rooms);

//nhl data
let randomnhlteams = getRandomArrayElement(data.nhlteams);

//netflix data
let randomncategories = getRandomArrayElement(data.categories);

let randomDecription = ` ${randomnhlteams} adours ${randomCondiment} ${randomncategories} ${verb} like a  ${randomCat} in a ${randomRoom}`;
$('body').append(randomDecription);

}//end of data

function dataNotLoaded(request, text, error){

}

function getRandomArrayElement(array){
  console.log(array);
let element = array[Math.floor(Math.random()*array.length)];
return element;



}
