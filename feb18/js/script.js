"use strict";
// ex one
// let sineWave = new Pizzicato.Sound({
//   source: 'wave',
//   options: {
//     type: "sine",
//     frequency: 440,
//     attack: 0
//
//   }
// });
// function setup() {}
// function mousePressed() {
//   sineWave.play();
// }


//ex two
// let barkSFX = new Pizzicato.Sound('./assets/sounds/bark.wav');{}
// function setup() {}
// function draw() {}
// function mousePressed() {
//   barkSFX.play();
// }

//ex three: LOOP
// let barkSFX = new Pizzicato.Sound(;{
//   source: 'file',
//   options:{
//     path:'./assets/sounds/bark.wav',
//     loop:true,
//   });
// }
// function setup() {}
// function draw() {}
// function mousePressed() {
//   barkSFX.play();
// }

// EX 4
let whiteNoise = new Pizzicato.Sound(noiseGenerator);
function setup() {}
function mousePressed() {
  whiteNoise.play();
}
function noiseGenerator(e) {
  let output = e.outputBuffer.getChannelData(0);
  for (let i = 0; i < e.outputBuffer.length; i++) {
    output[i] = Math.random();
  }
}
