"use strict";

/*****************

Circles of death
Jessica

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload

let player = {
  x: 0,
  y: 0,
  maxSize: 39,
  size: 39 , // when player doesnt eat  the food
  active: true,


}

let food = {
  x: 10,
  y: 30,
  size: 27
}


function preload() {

}


// setup()
//
// Description of setup

function setup() {
   createCanvas(windowWidth,windowHeight);
   food.x = random( 0, width);
   food.y = random( 0, height);
   noCursor();
}


// draw()
//
// Description of draw()

function draw() {
background(0);
updatePlayer();
displayPlayer();
}


function displayPlayer(){
  push();
  stroke = 0;
  fill = (245,66,215);
  ellipse(0, 50, 33, 33);
  player.x = 10;
  player.y = 30;
  pop();

}

function updatePlayer(){
  player.x = mouseX;
  player.y = mouseY;
  // size = 50; //player gets fatter cuz it eats the food
  player.size = constrain(player.size + 50,0,player.maxSize);
  if (player.size === 0 ){
    player.active = false;
  }
}
