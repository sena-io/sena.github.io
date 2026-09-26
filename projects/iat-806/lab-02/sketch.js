let circleX = 50;
let circleY = 50;
let speedX = 5;
let speedY = 5;
let size = 100;
let sizeIncrement = 1;
let radius = size / 2;
let rightColor = "lightblue";
let leftColor = "pink";
let ballColor;

function setup() {
  const canvas = createCanvas(800, 600);
  canvas.parent("sketch-holder");
}

function draw() {
  background(20);

  // left half is one color, right half is the other
  if (circleX > width / 2) {
    ballColor = rightColor;
  } else {
    ballColor = leftColor;
  }
  fill(ballColor);

  // move
  circleX = circleX + speedX;
  circleY = circleY + speedY;

  // grow (or shrink)
  size = size + sizeIncrement;
  radius = size / 2;

  // bounce off the left and right walls, and flip growing/shrinking
  if (circleX >= width - radius || circleX < radius) {
    speedX = speedX * -1;
    sizeIncrement = sizeIncrement * -1;
  }

  // bounce off the top and bottom walls
  if (circleY >= height - radius || circleY < radius) {
    speedY = speedY * -1;
  }

  circle(circleX, circleY, size);
}

function mousePressed() {
  speedX = speedX * -1;
  rightColor = color(random(255), random(255), random(255));
  leftColor = color(random(255), random(255), random(255));
}

function keyPressed() {
  if (key === "S" || key === "s") {
    speedX = 0;
    speedY = 0;
    circleX = 400;
    circleY = 300;
    size = 50;
    sizeIncrement = 0;
    rightColor = color(255, 255, 255);
    leftColor = color(255, 255, 255);
  }
}
