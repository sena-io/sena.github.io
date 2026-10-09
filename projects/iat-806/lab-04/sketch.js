let frames = []; //arrays for putting images of the fairies
let frames2 = []; //
let numFrames = 7; //number of animations that will be called

let numCols = 13; // 8 columns
let numRows = 10; // 6 rows
let colWidth; // width of each box
let rowHeight; // heigth of each box
let colors = []; //arrays to assign random colors in each boxes
let speeds = []; // arrays to assign different animation speed

async function setup() {
  //async: wait until images are uploaded!
  createCanvas(800, 420);

  for (let i = 0; i < numCols; i++) {
    colors[i] = [];
    speeds[i] = [];
    for (let j = 0; j < numRows; j++) {
      colors[i][j] = random(1, 255);
      speeds[i][j] = random(1, 10);
    }

    colWidth = width / numCols;
    rowHeight = height / numRows;

    for (let i = 0; i < numFrames; i++) {
      let fileName = `dance_frames/fairy_${i}.png`;
      frames.push(await loadImage(fileName));
    }
  }
}

function draw() {
  background(120);
  fill("black");

  numCols = map(mouseX, 0, width, 1, 20);
  text(numCols, 100, 100);

  for (let p = 0; p < numCols; p++) {
    fill(0, 100, 100);
    // fill(0, random(1,250), random(0,250));
    for (let j = 0; j < numRows; j++) {
      rect(p * colWidth, j * rowHeight, colWidth, rowHeight);
    }
  }

  let speeds = 10;
  let imageWidth = 500;
  let imageHeight = 400;

  animate(frames, 10, 100, 100, 100);
  animate(frames, 20, 200, 100, 200);
  animate(frames, 50, 300, 100, 300);
}

function animate(frames, speed, xPosition, yPosition, imageWidth, imageHeight) {
  let index = getFrameIndex(speed);
  let currentFrame = frames[index];
  let origWidth = currentFrame.width;
  let origHeight = currentFrame.height;
  if (imageWidth && !imageHeight) {
    let scale = imageWidth / origWidth;
    imageHeight = scale * origHeight;
  }

  text(origWidth + " " + origHeight, 300, 100);
  image(currentFrame, xPosition, yPosition, imageWidth, imageHeight);
}

function getFrameIndex(speed) {
  let slowFrame = Math.floor(frameCount / speed);
  let index = slowFrame % frames.length;

  return index;
}
