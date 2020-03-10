"use strict";

// By: Jessica Filippelli
//Name of project: Youtube madness
//description of project: This project is to showcase the represation how people are bombarded with
//information at their own will. Becasue with the internet we can chose what we see annd what we dont see.
//for example if someone does not like a video, they can stop watching it. so a user can pick how much
//they want to see and not see.

//my Arrays are in a different script to save space in the main JS file 

//the class Photo is what creates a new image and its style
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

//for the 3 image arrays
const MAX_PHOTOS = 16;
const MAX_PHOTOSTWO = 16;
const MAX_PHOTOSTHREE = 11;

//the varbailes for the three clowns
let $kids;
let $makeup;
let $learn;

let img = 0;

//the main image arrays wheyou push them in a empty array
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

//for X pop up images
let suprise1 = ("assets/images/no_kids.jpg");
let suprise2 = ("assets/images/no_makeup.jpg");
let suprise3 = ("assets/images/no_learn.jpg");
let $div;
let $suprise;

$(document).ready(setup);

let speech = [];
//varable to knwow of the audio is playing
let clownActive=false;

function setup() {

  //to know when the voice ended for second clown
  function voiceEndTest(){
    clownActive =false;
  }

  //to know when the voice ended for first clown
  kids.onended = function(){
    clownActive =false;
  }
  //to know when the voice ended for first clown
  learn.onended = function(){
    clownActive =false;
  }

  //or X pop up image
  $div = $("#no");
  $suprise = $("#suprise");

  speak();
  //definded which varable goes for which clickabe function
  $kids = $("#kids");
  $makeup = $("#makeup");
  $learn = $("#learn");

  //when you click on one of the three clowns
  //fist image of clowns
  $( "#kids" ).click(function() {
    $("#kids").effect('shake');
    changeKids();
    clownActive =true;
    kids.play();
  }); // END OF kids

  //second image of clowns
  $( "#makeup" ).click(function() {
    $("#makeup").effect('slide');
    changeMakeup();
<<<<<<< HEAD
    //responsiveVoice.speak("I'VE NEVER TRIED ANYTHING QUITE LIKE THIS. BITE CHANGE MAKER FOUNDATION AND POWDER REVIEW AND WEAR TESTS", "UK English Female");
=======
    clownActive =true;
    responsiveVoice.speak("I'VE NEVER TRIED ANYTHING QUITE LIKE THIS. BITE CHANGE MAKER FOUNDATION AND POWDER REVIEW AND WEAR TESTS", "UK English Female", {onend: voiceEndTest});
>>>>>>> 2fdfe1ac6757e55b127640e3ca2871e84095b764
  });

  //thrid image of clowns
  $( "#learn" ).click(function() {
    $("#learn").effect('pulsate');
    changeLearn();
    clownActive =true;
    learn.play();
  });

  //when you click on BG is says a long title of a youtube video
  $("#container").click(function() {
    // this if statement is if
    if(clownActive ===false){
      responsiveVoice.speak("College Algebra Introduction Review. Basic Overview, Study Guide, Examples and Practice Problems", "UK English Female");
    }

  });

//function that calls the first image array
  function changeKids(){
    //randomtimes is every time you click one time on the clown, one to 10 images will appear
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    //this is the random postion when you click a clown and the images apears on the screen in a random location each time
    for(let i =0; i<randomTimes; i++){
      let index = Math.floor(Math.random()* imgArrayone.length);
      let x = Math.floor(Math.random()*window.innerWidth);
      let y = Math.floor(Math.random()*window.innerHeight);
      let imageSrc = imgArrayone[index];
      photoArray.push(new Photo(x,y,imageSrc));
    }
  }

//function that calls the second  image array
  function changeMakeup(){
    //randomtimes is every time you click one time on the clown, one to 10 images will appear
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    //this is the random postion when you click a clown and the images apears on the screen in a random location each time
    for(let i =0; i<randomTimes; i++){
      //this is the random postion when you click a clown and the images apears on the screen in a random location each time
      let index = Math.floor(Math.random()* imgArraytwo.length);
      let x = Math.floor(Math.random()*window.innerWidth);
      let y = Math.floor(Math.random()*window.innerHeight);
      let imageSrc = imgArraytwo[index];
      photoArraytwo.push(new Photo(x,y,imageSrc));
    }
  }

//function that calls the 3rd image array ()
  function changeLearn(){
    //randomtimes is every time you click one time on the clown, one to 10 images will appear
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    for(let i =0; i<randomTimes; i++){
      //this is the random postion when you click a clown and the images apears on the screen in a random location each time
      let index = Math.floor(Math.random()* imgArraythree.length);
      let x = Math.floor(Math.random()*window.innerWidth);
      let y = Math.floor(Math.random()*window.innerHeight);
      let imageSrc = imgArraythree[index];
      photoArraythree.push(new Photo(x,y,imageSrc));
    }
  }
} // end of setup function

//this function help make the  suprise images pop up random everytime you say the word
//suprise images: when you say the Suprise Pharse a diffent image will apear each from that zone, that does not appear from that zone
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
//when the user is done with the project they say this to clear the screen
      'stop the madness': function() {
        $('.photo_style').remove();
        window.close();
      }
    };

    let commandstwo = {
  // Suprise Pharse number one: one of three images will apear each time you say the pharse
      'tools and toys': function() {
        generateSuprise(supriseKidsArray,supriseKids);

        $suprise.attr("src",suprise1);
        $div.append($suprise);
        //the setTimeout will make the X image go away after 3 seconds
        setTimeout(function() {
          $div.hide();
        }, 3000); //end of timer
      }
    };

    let commandsthree = {
    // Suprise Pharse number two: one of three images will apear each time you say the pharse
      'dogs and makeup': function() {
        generateSuprise(supriseMakeupArray,supriseMakeup);

        $suprise.attr("src",suprise2);
        $div.append($suprise);

        setTimeout(function() {
          $div.hide();
        }, 3000); //end of timer
      }
    };
    let commandsfour = {
      // Suprise Pharse number three: one of three images will apear each time you say the pharse
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
    annyang.debug();
  } // end of annyang
}// end of speak function
