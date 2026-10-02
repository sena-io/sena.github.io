let frames = [];
let bgImg;
let numFrames = 7;

async function setup() {
  createCanvas(800, 420);

  bgImg = await loadImage("background/background_village.jpg");

  for (let i = 0; i < numFrames; i++) {
    let fileName = `dance_frames/fairy_${i}.png`;
    frames.push(await loadImage(fileName));
  }
}

function draw() {
  background(bgImg);
  fill("black");

  let speed = 10;
  let slowFrame = floor(frameCount / speed);
  let index = slowFrame % frames.length;
  //   text(index, 600, 160);

  if (frames[index]) {
    image(frames[index], 290, 130, 200, 180);
  }
}

// play music and make it stop and mouse pressed.
