"use strict";

class Photo{
  constructor(x,y,imageSrc){
    this.x = x;
    this.y = y;
    // this.w = w;
    // this.h = h;
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

let $one;
let $two;
let $three;


let img = 0;

let photoArray =[];
let photoArraytwo =[];
let photoArraythree =[];

$(document).ready(setup);
let speech = []
function setup() {
  speak();
  $one = $("#one");
  $two = $("#two");
  $three = $("#three");

  $( "#one" ).click(function() {
    changeImage();
    //  speak()
    responsiveVoice.speak("NEW POKEMON CARDS BATTLE. EVERY SWORD AND SHIELD PRODUCT OPENING. BEST PRERELEASE KIT BATTLE", "UK English Male");

  }); // END OF ONE


  $( "#two" ).click(function() {
    changeMakeup();
    // speak();
    responsiveVoice.speak("I'VE NEVER TRIED ANYTHING QUITE LIKE THIS. BITE CHANGE MAKER FOUNDATION AND POWDER REVIEW AND WEAR TESTS", "UK English Female");
  });


  $( "#three" ).click(function() {
    changeLearn();
    // speak();
    responsiveVoice.speak("College Algebra Introduction Review. Basic Overview, Study Guide, Examples and Practice Problems", "UK English Female");
  });

  function changeImage(){
    //randomtimes is every time you click one, two or three images will appear
    let randomTimes =  Math.floor(Math.random()* 3)+1;
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
    let randomTimes =  Math.floor(Math.random()* 3)+1;
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
    let randomTimes =  Math.floor(Math.random()* 3)+1;
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
        //point to all guesses
        //$('#one').each(YoutubeZone);
        //$('#two').each(changeMakeup);
        console.log("test");
      /*  $('#one').remove();
        $('#two').remove();
        $('#three').remove();*/
          $('.photo_style').remove();
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  } // end of annyang
}// end of speak function


//what happens when you say 'stop the madness'
// function YoutubeZone(){
//   console.log("u working ");
//
//
// }
