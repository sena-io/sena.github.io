let frames = [];
let bgImg;
let numFrames = 7;
let sounds = [];
let soundIndex = 0;
let index = 0;

async function setup() {
  createCanvas(800, 420);

  bgImg = await loadImage("background/background_village.jpg");

  for (let i = 0; i < numFrames; i++) {
    let fileName = `dance_frames/fairy_${i}.png`;
    frames.push(await loadImage(fileName));
  }

  for (let i = 0; i < 4; i++) {
    sounds.push(await loadSound("sounds/sound" + i + ".wav")); //loading the sound and automating path name
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

function mousePressed() {
  index = (index + 1) % frames.length;
  userStartAudio();
  sounds[soundIndex].play();
  soundIndex = (soundIndex + 1) % sounds.length; //incrementing the sound index and looping back to 0 when it reaches the end of the array
}
// play music and make it stop and mouse pressed.
