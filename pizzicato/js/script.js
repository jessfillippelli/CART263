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


let notes =[];
let synth = new Pizzicato.Sound({
  source: 'wave'
});

//sound files
let kick = new Pizzicato.Sound('./assets/sounds/kick.wav');
let snare = new Pizzicato.Sound('./assets/sounds/snare.wav');
let hihat = new Pizzicato.Sound('./assets/sounds/hihat.wav');


function preload() {

}

function setup() {
}

function mousePressed(){
    setInterval(playNote, 500);
    console.log("hi");
}

function playNote(){
let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  synth.frequency = frequency;
  synth.play();
}

function draw() {
}
