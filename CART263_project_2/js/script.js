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


let $one;
let $two;
let $three;

//img = new imgArray[16];
let img = 0;
//let imgArray = [16];
let photoArray =[];

function setup() {

  // let img = document.getElementById("imgArrayone");
  let imageIndex = 1;


$one = $("#one");
$two = $("#two");
$three = $("#three");

$( "#one" ).click(function() {
  //console.log("1 you working?");

changeImage();
}); // END OF ONE


$( "#two" ).click(function() {
  //console.log(" 2 you working?");
changeImage();
});


$( "#three" ).click(function() {
  //console.log(" 3 you working?");
changeImage();
});

function changeImage(){

  let index = Math.floor(Math.random()* imgArrayone.length);
  let x = Math.floor(Math.random()*2000);
   let y = Math.floor(Math.random()*800);
  let imageSrc = imgArrayone[index];
  console.log("clicked "+imageSrc);
  photoArray.push(new Photo(x,y,imageSrc));

}



} // end of function
