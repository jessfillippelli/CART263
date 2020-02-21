"use strict";

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


$(document).ready(setup);



const MAX_PHOTOS = 16;
let imgArrayone =[
  'assets/images/1.png',
  'assets/images/2.png',
  'assets/images/3.png',
  'assets/images/4.png',
  'assets/images/5.png',
  'assets/images/6.png',
  'assets/images/7.png',
  'assets/images/8.png',
  'assets/images/9.png',
  'assets/images/10.png',
  'assets/images/11.png',
  'assets/images/12.png',
  'assets/images/13.png',
  'assets/images/14.png',
  'assets/images/15.png',
  'assets/images/16.png'
];

let imgArraytwo =[
  'assets/images/m1.png',
  'assets/images/makeup_2.jpg',
  'assets/images/makeup_3.jpg',
  'assets/images/makeup_4.jpg',
  'assets/images/makeup_5.jpg',
  'assets/images/makeup_6.jpg',
  'assets/images/makeup_7.jpg',
  'assets/images/makeup_8.jpg',
  'assets/images/makeup_9.jpg',
  'assets/images/makeup_10.jpg',
  'assets/images/makeup_11.jpg',
  'assets/images/makeup_12.jpg',
  'assets/images/makeup_13.jpg',
  'assets/images/makeup_14.jpg',
  'assets/images/makeup_15.jpg',
  'assets/images/makeup_16.jpg'
];

let $one;
let $two;
let $three;


let img = 0;

let photoArray =[];
let photoArraytwo =[];

$(document).ready(setup);
let speech = []
function setup() {

  let imageIndex = 1;
  $one = $("#one");
  $two = $("#two");
  $three = $("#three");

  $( "#one" ).click(function() {
    changeImage();
    speak()
    responsiveVoice.speak("NEW POKEMON CARDS BATTLE! EVERY SWORD AND SHIELD PRODUCT OPENING! BEST PRERELEASE KIT BATTLE!", "UK English Male");

  }); // END OF ONE


  $( "#two" ).click(function() {
    changeMakeup()
    speak()
  });


  $( "#three" ).click(function() {
    changeImage();
    speak()
  });

  function changeImage(){
    let index = Math.floor(Math.random()* imgArrayone.length);
    let x = Math.floor(Math.random()*2000);
    let y = Math.floor(Math.random()*800);
    let imageSrc = imgArrayone[index];
    console.log("clicked "+imageSrc);
    photoArray.push(new Photo(x,y,imageSrc));

  }

  function changeMakeup(){
    let index = Math.floor(Math.random()* imgArraytwo.length);
    let x = Math.floor(Math.random()*2000);
    let y = Math.floor(Math.random()*800);
    let imageSrc = imgArraytwo[index];
    console.log("clicked "+imageSrc);
    photoArraytwo.push(new Photo(x,y,imageSrc));

  }


} // end of function

function speak(){
if (annyang) {
  let commands = {
    'stop the madness': function() {
      //point to all guesses
      $('#one').each(changeImage);
      $('#two').each(changeMakeup);
      $('#one').remove();
      $('#two').remove();
    }
  };
annyang.addCommands(commands);
annyang.start();
} // end of annyang
}// end of speak function
