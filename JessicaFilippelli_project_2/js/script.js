"use strict";

// By: Jessica Filippelli
//Name of project: Youtube madness
//description of project: This project is to showcase the represation how people are bombarded with
//information at their own will. Becasue with the internet we can chose what we see annd what we dont see.
//for example if someone does not like a video, they can stop watching it. so a user can pick how much
//they want to see and not see.


class Photo{
  constructor(x,y,imageSrc){
    this.x = x;
    this.y = y;
    this.imageSrc = imageSrc;

    //create element
    this.photoBox = document.createElement("img");
    this.photoBox.src = this.imageSrc;
    document.getElementById("wrapper").appendChild(this.photoBox);
    //over write the style
    this.photoBox.className = "photo_style";
    this.photoBox.style.left = this.x+"px";
    this.photoBox.style.top = this.y+"px";

  }
} //end of photo class

const MAX_PHOTOS = 16;
const MAX_PHOTOSTWO = 16;
const MAX_PHOTOSTHREE = 11;

let $kids;
let $makeup;
let $learn;

let img = 0;

let photoArray =[];
let photoArraytwo =[];
let photoArraythree =[];
let supriseKids = [];
let supriseMakeup =[];
let supriseLearn =[];

//audio
let kids = new Audio("assets/sounds/Cat.mp3");
let learn = new Audio("assets/sounds/Feel_Nice.mp3");


$(document).ready(setup);
let speech = []
function setup() {
$suprise_1 = ('#no_kids');
$suprise_1 = ("src", nokids);

  speak();
  $kids = $("#kids");
  $makeup = $("#makeup");
  $learn = $("#learn");

//when you click on one of the three clowns
  $( "#kids" ).click(function() {
    $("#kids").effect('shake');
    changeImage();
    kids.play();
  }); // END OF kids


  $( "#makeup" ).click(function() {
      $("#makeup").effect('slide');
    changeMakeup();
    responsiveVoice.speak("I'VE NEVER TRIED ANYTHING QUITE LIKE THIS. BITE CHANGE MAKER FOUNDATION AND POWDER REVIEW AND WEAR TESTS", "UK English Female");
  });


  $( "#learn" ).click(function() {
      $("#learn").effect('pulsate');
    changeLearn();
      learn.play();
      learn.pause();
  });

//when you click on BG is says a long title of a youtube video
  $("#wrapper").click(function() {
    responsiveVoice.speak("College Algebra Introduction Review. Basic Overview, Study Guide, Examples and Practice Problems", "UK English Female");
  });




  function changeImage(){
    //randomtimes is every time you click one, two or three images will appear
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    for(let i =0; i<randomTimes; i++){
      let index = Math.floor(Math.random()* imgArrayone.length);
      let x = Math.floor(Math.random()*2000);
      let y = Math.floor(Math.random()*800);
      let imageSrc = imgArrayone[index];
      photoArray.push(new Photo(x,y,imageSrc));
    }

  }

  function changeMakeup(){
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    for(let i =0; i<randomTimes; i++){
      let index = Math.floor(Math.random()* imgArraytwo.length);
      let x = Math.floor(Math.random()*2000);
      let y = Math.floor(Math.random()*800);
      let imageSrc = imgArraytwo[index];
      photoArraytwo.push(new Photo(x,y,imageSrc));
    }
  }

  function changeLearn(){
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    for(let i =0; i<randomTimes; i++){
      let index = Math.floor(Math.random()* imgArraythree.length);
      let x = Math.floor(Math.random()*2000);
      let y = Math.floor(Math.random()*800);
      let imageSrc = imgArraythree[index];
      photoArraythree.push(new Photo(x,y,imageSrc));
    }
  }

} // end of setup function

//this function help make the  suprise images pop up random everytime you say the word
function generateSuprise(supriseImageArray,photoArraySuprise){
    let index = Math.floor(Math.random()* supriseImageArray.length);
    let x = Math.floor(Math.random()*2000);
    let y = Math.floor(Math.random()*800);
    let imageSrc = supriseImageArray[index];
    photoArraySuprise.push(new Photo(x,y,imageSrc));
}

//stop the madness would clear all the images that were clicked on to the screen.
function speak(){
  if (annyang) {
    let commands = {
      'stop the madness': function() {
        $('.photo_style').remove();
        window.close();
      }
    };

    let commandstwo = {
      'tools equals toys': function() {
        generateSuprise(supriseKidsArray,supriseKids);
        $("#no_kids").add('');

      }
    };

    let commandsthree = {
      'puppy equals makeup': function() {
        generateSuprise(supriseMakeupArray,supriseMakeup);
      }
    };
    let commandsfour = {
      'cars equals education': function() {
        generateSuprise(supriseLearnArray,supriseLearn);
      }
    };

    annyang.addCommands(commands);
    annyang.addCommands(commandstwo);
    annyang.addCommands(commandsthree);
    annyang.addCommands(commandsfour);
    annyang.start();
  } // end of annyang
}// end of speak function
