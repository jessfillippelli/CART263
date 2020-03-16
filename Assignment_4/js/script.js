"use strict";
$(document).ready(setup);

function setup() {
  $('#content').on('click', getRandomArrayElement);

  refresh();
  $('#screen').click(function() {
  refresh();
});
}//end of set up


//Condiment

function gotData(data){
  let randomCondiment = getRandomArrayElement(data.condiments);
  let verb = "is";
  //let verb = "an";
  //tell you how long the word is
  //cat
  let randomCat = getRandomArrayElement(data.cats);
  //room
  let randomRoom = getRandomArrayElement(data.rooms);
  //nhl data
  let randomNhlTeams = getRandomArrayElement(data.nhlteams);
  //netflix data
  let randomCategories = getRandomArrayElement(data.categories);

  if (randomCategories.charAt(randomCategories.length -1 ) === "s"){
    verb = "are";
  }

  let vowels = [ "a", "e", "i", "o", "u", "y"];
  let articleCat= "a";
  let articleRoom = "a";

  for (let i=0; i < vowels.length; i++){

    if (randomCat.charAt(0).toLowerCase() === vowels[i]){
      articleCat ="an";
    }

    if (randomRoom.charAt(0).toLowerCase() === vowels[i]){
      articleRoom ="an";
    }

  }

  let randomDecription = `${randomNhlTeams} adores ${randomCondiment} and ${randomCategories} ${verb} like ${articleCat} ${randomCat} in ${articleRoom} ${randomRoom}`;
  $('body').append(randomDecription);
} //end of got data


//end of data
function dataNotLoaded(request, text, error){
}
function getRandomArrayElement(array){
  let element = array[Math.floor(Math.random()*array.length)];
  return element;
}

function refresh(){
    $.getJSON("data/data.json").done(gotData).fail(dataNotLoaded);
//location.reload();
$('#screen').empty();
}
