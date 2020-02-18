"use strict";

const frequencies = [
16.35,
25.96,
21.83,
41.20,
49.00,
92.50,
698.46
];

let pattern = [
"x",
"",
"o",
"*",
"x",
"",
"o+",
"*"
];
let beat = 0;
let notes =[];
let synth = new Pizzicato.Sound({
  source: 'wave'
});


// let x = kick;
// let o = snare;
// let * = hihat;

//sound files
let kick = new Pizzicato.Sound('./assets/sounds/kick.wav');
let snare = new Pizzicato.Sound('./assets/sounds/snare.wav');
let hihat = new Pizzicato.Sound('./assets/sounds/hihat.wav');

function playDrum() {
  let symbols = pattern[beat];
  if (symbols.includes('x')) {
    kick.play();
  }
  if (symbols.includes('o')) {
    snare.play();
  }
  if (symbols.includes('*')) {
    hihat.play();
  }
  beat = (beat + 1) % pattern.length;
}
beat++;
if (beat >= pattern.length) {
 beat = 0;
}



function preload() {

}

function setup() {
}

function mousePressed() {
  setInterval(playNote,500);
  setInterval(playDrum,250);
}

function playNote(){
let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  synth.frequency = frequency;
  synth.play();
}

function draw() {
}
