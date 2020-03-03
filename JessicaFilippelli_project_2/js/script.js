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

//the varbailes for the three clowns
let $kids;
let $makeup;
let $learn;

let img = 0;

//the main image arrays
let photoArray =[];
let photoArraytwo =[];
let photoArraythree =[];
//these three array are for when you say the surprise prase an image will pop up from these arrays
let supriseKids = [];
let supriseMakeup =[];
let supriseLearn =[];

//audio
let kids = new Audio("assets/sounds/Cat.mp3");
let learn = new Audio("assets/sounds/Feel_Nice.mp3");



//for X pop up image number one
let suprise1 = ("assets/images/no_kids.jpg");
let suprise2 = ("assets/images/no_makeup.jpg");
let suprise3 = ("assets/images/no_learn.jpg");
let $div;
let $suprise;

$(document).ready(setup);
let speech = [];
let clownActive=false;

function setup() {


  function voiceEndTest(){
    console.log("DONE");
    clownActive =false;
  }



  kids.onended = function(){
    console.log("end");
    clownActive =false;
  }

  learn.onended = function(){
    console.log("end");
    clownActive =false;
  }



  //or X pop up image
  $div = $("#no_kids");
  $suprise = $("#suprise");

  speak();
  $kids = $("#kids");
  $makeup = $("#makeup");
  $learn = $("#learn");

  //when you click on one of the three clowns
  $( "#kids" ).click(function() {
    $("#kids").effect('shake');
    changeImage();
    clownActive =true;
    kids.play();
  }); // END OF kids


  $( "#makeup" ).click(function() {
    $("#makeup").effect('slide');
    changeMakeup();
    clownActive =true;
    responsiveVoice.speak("I'VE NEVER TRIED ANYTHING QUITE LIKE THIS. BITE CHANGE MAKER FOUNDATION AND POWDER REVIEW AND WEAR TESTS", "UK English Female", {onend: voiceEndTest});
  });


  $( "#learn" ).click(function() {
    $("#learn").effect('pulsate');
    changeLearn();
    clownActive =true;
    learn.play();
  });

  //when you click on BG is says a long title of a youtube video
  $("#container").click(function() {

    if(clownActive ===false){
      responsiveVoice.speak("College Algebra Introduction Review. Basic Overview, Study Guide, Examples and Practice Problems", "UK English Female");
    }

  });




  function changeImage(){
    //randomtimes is every time you click one, two or three images will appear
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    for(let i =0; i<randomTimes; i++){
      let index = Math.floor(Math.random()* imgArrayone.length);
      let x = Math.floor(Math.random()*window.innerWidth);
      let y = Math.floor(Math.random()*window.innerHeight);
      let imageSrc = imgArrayone[index];
      photoArray.push(new Photo(x,y,imageSrc));
    }

  }

  function changeMakeup(){
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    for(let i =0; i<randomTimes; i++){
      let index = Math.floor(Math.random()* imgArraytwo.length);
      let x = Math.floor(Math.random()*window.innerWidth);
      let y = Math.floor(Math.random()*window.innerHeight);
      let imageSrc = imgArraytwo[index];
      photoArraytwo.push(new Photo(x,y,imageSrc));
    }
  }

  function changeLearn(){
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    for(let i =0; i<randomTimes; i++){
      let index = Math.floor(Math.random()* imgArraythree.length);
      let x = Math.floor(Math.random()*window.innerWidth);
      let y = Math.floor(Math.random()*window.innerHeight);
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
      'tools and toys': function() {
        generateSuprise(supriseKidsArray,supriseKids);

        $suprise.attr("src",suprise1);
        $div.append($suprise);

        setTimeout(function() {
          $div.hide();
        }, 3000); //end of timer
      }
    };

    let commandsthree = {
      'dogs and makeup': function() {
        generateSuprise(supriseMakeupArray,supriseMakeup);

        $suprise.attr("src",suprise2);
        $div.append($suprise);
        console.log("u working?");

        setTimeout(function() {
          $div.hide();
        }, 3000); //end of timer
      }
    };
    let commandsfour = {
      'cars and education': function() {
        generateSuprise(supriseLearnArray,supriseLearn);

        $suprise.attr("src",suprise3);
        $div.append($suprise);

        setTimeout(function() {
          $div.hide();
        }, 3000); //end of timer
      }
    };

    annyang.addCommands(commands);
    annyang.addCommands(commandstwo);
    annyang.addCommands(commandsthree);
    annyang.addCommands(commandsfour);
    annyang.start();
  } // end of annyang
}// end of speak function
