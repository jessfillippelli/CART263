"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
window.onload = setup;
let rockSpeed = 0;
let rock;
let mycanvas ;
let context;
let mountain;


document.addEventListener('onClick', onmousedown);

function setup(){
  console.log("is this shit working or nah");
  //let triangle = document.createElement('');
  //let rock = (canvas.Context);
   mycanvas = document.getElementById("myCanvas");
   context = mycanvas.getContext('2d');



//the rock
  rock = new Rock(100, 75, 50, 0, 2 * Math.PI);
  mountain = new Mountain(0,mycanvas.height, mycanvas.width, 0, mycanvas.width,mycanvas.height);
//make the rock show itself
  rock.displayRock();
  mountain.displayMountain();
  requestAnimationFrame(animate);





}

function animate(){
    console.log("u ani? or nah");
    context.clearRect(0,0,mycanvas.width,mycanvas.height);

  //  context.arc(0,0,canvas.width,canvas.height);
  rock.rockX ++;
    rock.displayRock();
    mountain.displayMountain();




      requestAnimationFrame(animate);
}




//https://maxhalford.github.io/blog/stella-triangles-with-javascript/
class Mountain {
  constructor (a, b, c, d, e,f) {
    this.a = a;
    this.b = b;
    this.c =c;
    this.d =d;
    this.e=e;
    this.f =f;
  }

  displayMountain(){
    //triangle
     context.beginPath();
     context.moveTo(this.a,this.b);
     context.lineTo(this.c,this.d);
     context.lineTo(this.e,this.f);
     context.fill();
     context.closePath();
     console.log("mountain is here");
  }
}







class Rock{
  constructor(rockX, rockY, rockR, rockS, rockE){
  this.rockX = rockX;
  this.rockY = rockY;
  this.rockR = rockR;
  this.rockS = rockS;
  this.rockE = rockE;

  }



displayRock(){
  context.fillstyle = "brown";
  context.beginPath();
  context.arc(this.rockX , this.rockY, this.rockR, this.rockS, this.rockE);
  context.stroke();
  //context.arc (rock.X, rock.Y, rock.R, rock.S, rock.E);
  context.closePath();
}

updateRock(){

}


//when click "yes button" rock will move
climb(){
  if ("onmousedown" === onclick ){
  this.rockSpeedX =1;

  }

  if ("onmousedown" === onclick){
  this.rockSpeedX =1;

}
}

} //end of rock class





// function rock(e){
//   let rock = e.target;
//   let rock = document.getElementsByClassName('rock');
// }
//
//
// function climb(){
// let rock = document.getElementById("animate");
//   console.log("u alive");
// }
