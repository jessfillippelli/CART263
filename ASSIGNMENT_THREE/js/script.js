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




function newRound(){
  $(".guess").remove();
  answers = [];
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];

  sayBackwards(correctAnimal);
  //updateScore();

} // end


function addButton(label){
  let $button = $('<div></div>');
  $button.addClass("guess");
  $button.text(label);
  $button.button();
  $button.on( "click", handler );
  $('body').append($button);
}

//say it again


if (annyang) {
  let commands = {
    'i give up': function() {
      //point to all guesses
      $('.guess').each(checkAnswer);
      score = 0;
      resetScore();
      setTimeout(newRound, 1000);
    }
  }; // end of let

  let commandsTwo = {
    'say it again': function() {
      sayBackwards(correctAnimal);
    }
  }; // end of let #2


  let commandsThree = {
    'i think it is *animal': function(animal) {
      console.log("guess:: "+animal);
      if (animal.toLowerCase() === correctAnimal.toLowerCase()){
        console.log("correct:: "+animal);
        $(".guess").each(function(index){
          // console.log($(value).text());
          let temp = $(this).text();
          if(correctAnimal.toLowerCase() ===temp.toLowerCase()){
            $(this).css("background-color","green");
            updateScore();
          }
        });
      } // correct
      //incorrect
      else{
        resetScore();
      }
      setTimeout(newRound, 1000);
    }

  }; // end of let #3

  //need needs guys to work - every command needs one
  annyang.addCommands(commands);
  annyang.addCommands(commandsTwo);
  annyang.addCommands(commandsThree);
  annyang.start();
}// end of annyang




function checkAnswer(){
  console.log("u working ");
  if($(this).text() == correctAnimal){
    $(this).css("background-color","green");

  }
}

function handler(){
  if ($(this).text() == correctAnimal){
    $('.guess').remove();
    setTimeout(newRound, 100);


  }
  else {
    $('.guess').effect('shake');
    sayBackwards(correctAnimal);
    score = 0;
    resetScore();
  }
}
function updateScore(){
    score++;
  showScore();

}


function resetScore(){
  score = 0;
  showScore();
}
function sayBackwards(text){
  let backwardsText = text.split('').reverse().join('');
  let options = {rate: 1, pitch:1 };

  responsiveVoice.speak(backwardsText, "UK English Male", options);
}
function showScore(){
  let $score = $('#score');
  $score.text ("SCORE " + score);
}
