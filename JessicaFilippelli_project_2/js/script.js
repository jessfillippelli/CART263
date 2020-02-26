"use strict";

//By: Jessica Filippelli

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
const MAX_PHOTOSTHREE = 16;

let $kids;
let $makeup;
let $learn;

let img = 0;

let photoArray =[];
let photoArraytwo =[];
let photoArraythree =[];

$(document).ready(setup);
let speech = []
function setup() {
  speak();
  $kids = $("#kids");
  $makeup = $("#makeup");
  $learn = $("#learn");

//when you click on one of the three clowns
  $( "#kids" ).click(function() {
    changeImage();
    responsiveVoice.speak("NEW POKEMON CARDS BATTLE. EVERY SWORD AND SHIELD PRODUCT OPENING. BEST PRERELEASE KIT BATTLE", "UK English Male");

  }); // END OF kids


  $( "#makeup" ).click(function() {
    changeMakeup();
    responsiveVoice.speak("I'VE NEVER TRIED ANYTHING QUITE LIKE THIS. BITE CHANGE MAKER FOUNDATION AND POWDER REVIEW AND WEAR TESTS", "UK English Female");
  });


  $( "#learn" ).click(function() {
    changeLearn();
    responsiveVoice.speak("College Algebra Introduction Review. Basic Overview, Study Guide, Examples and Practice Problems", "UK English Female");
  });

//when you click on BG is says the title
  $("#container").click(function() {
    console.log("clicke yellow")
    responsiveVoice.speak("Youtube madness", "UK English Female");
  });

  $("#wrapper").click(function() {
    console.log("clicke yellow")
    responsiveVoice.speak("Youtube madness", "UK English Female");
  });

  function changeImage(){
    //randomtimes is every time you click one, two or three images will appear
    let randomTimes =  Math.floor(Math.random()* 10)+1;
    for(let i =0; i<randomTimes; i++){
      let index = Math.floor(Math.random()* imgArrayone.length);
      let x = Math.floor(Math.random()*2000);
      let y = Math.floor(Math.random()*800);
      let imageSrc = imgArrayone[index];
      console.log("clicked "+imageSrc);
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
      console.log("clicked "+imageSrc);
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
      console.log("clicked "+imageSrc);
      photoArraythree.push(new Photo(x,y,imageSrc));
    }
  }

} // end of setup function

//stop the madness would clear all the images that were clicked on to the screen.
function speak(){
  if (annyang) {
    let commands = {
      'stop the madness': function() {

        console.log("test");

        $('.photo_style').remove();
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  } // end of annyang
}// end of speak function
