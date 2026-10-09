let frames = [];
let frames2 = [];
let numFrames = 8;

let numCols = 8;
let numRows = 6;
let colWidth;
let rowHeight;
let colors = [];
let speeds = [];

async function setup() {
  createCanvas(800, 420);

  for (let i = 0; i < numCols; i++) {
    colors[i] = [];
    // speed[i] = [];
    for (let j = 0; j < numRows; j++) {
      colors[i][j] = random(1, 255);
      // speed[i][j] = random(1, 10);
    }
  }

  colWidth = width / numCols;
  rowHeight = height / numRows;

  for (let i = 0; i < numFrames; i++) {
    // let fileName = `dance_frames/dance${i}.png`;
    let fileName = "dance_frames/dance" + i + ".png";

    frames.push(await loadImage(fileName));
  }
}

function draw() {
  background(120);
  fill("black");
  numCols = map(mouseX, 0, width, 1, 20);
  text(numCols, 100, 100);

  // rect(0, 0, colWidth, height);

  for (let i = 0; i < numCols; i++) {
    fill(0, 100, 100);
    // fill(0, random(0,250), random(0,250)); randomize
    for (let j = 0; j < numRows; j++) {
      rect(i * colWidth, j * rowHeight, colWidth, rowHeight);
    }
  }
  //The reason for writing nested for loops
  //: because the row I want to draw is attached

  // let speed = 10;
  let imageWidth = 500;
  let imageHeight = 400;
  // frames, speed, xPosition, yPosition, imageWidth, imageHeight
  animate(frames, 10, 100, 100, 100);
  animate(frames, 2, 200, 100, 200);
  animate(frames, 50, 300, 100, 300);
}

function animate(frames, speed, xPosition, yPosition, imageWidth, imageHeight) {
  let index = getFrameIndex(speed);
  let currentFrame = frames[index];
  let origWidth = currentFrame.width;
  let origHeight = currentFrame.height;
  if (imageWidth && !imageHeight) {
    //KEEP THE SCALE
    //imageWidth and NOT imageHeight //
    //if the function had defined the width but not the height,
    //e.g., animate(frames, speed, xPosition, yPostion, 200)
    let scale = imageWidth / origWidth;
    imageHeight = scale * origHeight;
  }

  text(origWidth + " " + origHeight, 300, 100);
  text("wow...", 200, 100);
  image(currentFrame, xPosition, yPosition, imageWidth, imageHeight);
}

function getFrameIndex(speed) {
  //speed is the input
  let slowFrame = Math.floor(frameCount / speed);
  let index = slowFrame % frames.length;

  return index;
}

//TODO: complete the keeping scale correct logic.
