// An example sketch, so the page has something to show.
// Delete all of this and write your own.

let circleX = 150;
let circleY = 100;
let speedX = 5;
let speedY = 5;
let size = 100;
let sizeIncrement = 1;
let radius = size / 2;
let rightColor = "blue";
let leftColor = "red";

function setup() {
  createCanvas(500, 500);
  //circleX = 0;
}

function draw() {
  // let addition = 10;
  background(252, 250, 255);
  fill(0, 10, 255);
  console.log(circleX);
  circleX = circleX + speedX;
  circleY = circleY + speedY;
  console.log(circleX);
  size = size + sizeIncrement;
  radius = size / 2;

  if (circleX >= width - radius || circleX < radius) {
    speedX = speedX * -1;
    sizeIncrement = sizeIncrement * -1;
  }

  if (circleY >= height - radius || circleY < radius) {
    speedY = speedY * -1;
  }
  circle(circleX, circleY, size);
}

if (mouseClicked) {
  fill(255, 255, 255);
}

//create random number -> X,Y
//change colour and position randomly - byFridaynight
