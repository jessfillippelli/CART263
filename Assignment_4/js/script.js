"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

function setup() {
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

//cat
let randomCat = getRandomArrayElement(data.cats);

//room
let randomRoom = getRandomArrayElement(data.rooms);

//nhl data
let randomnNhlTeams = getRandomArrayElement(data.nhlteams[i].name);

//netflix data
let randomncategories = getRandomArrayElement(data.categories);

let randomDecription = ` ${randomNnhlTeams} adours ${randomCondiment} ${randomncategories} ${verb} like a  ${randomCat} in a ${randomRoom}`;
$('body').append(randomDecription);

}//end of data

function dataNotLoaded(request, text, error){

}

function getRandomArrayElement(array){
  console.log(array);
let element = array[Math.floor(Math.random()*array.length)];
return element;
}
