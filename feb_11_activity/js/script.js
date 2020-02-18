"use strict";

let animals = [    "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"
    ]


let answers = [];
const NUM_OPTIONS = 5;
let score = 0;

let correctAnimal;
$(document).ready(setup);

function setup(){
newRound();
showScore();
}


function showScore(){
let $score = $('#score');
$score.text ("SCORE " + score);
$score.appendTo("body");

}

function newRound(){
  answers = [];
  for (let i = 0; i < NUM_OPTIONS; i++) {
       let answer = animals[Math.floor(Math.random() * animals.length)];
       addButton(answer);
       answers.push(answer);
}
   correctAnimal = answers[Math.floor(Math.random() * answers.length)];

sayBackwards(correctAnimal);



} // end


 function addButton(label){
   let $button = $('<div></div>');
   $button.addClass("guess");
   $button.text(label);
   $button.button();
   $button.on( "click", handler );
   $('body').append($button);
 }

function handler(){
if ($(this).text() == correctAnimal){
     $('.guess').remove();
     setTimeout(newRound, 100);

}
else ($('.guess').effect('shake'));
//sayBackwards(correctAnimal);

}

function sayBackwards(text){
  let backwardsText = text.split('').reverse().join('');
   let options = {rate: 1, pitch:1 };

  responsiveVoice.speak(backwardsText, "UK English Male", options);
}
