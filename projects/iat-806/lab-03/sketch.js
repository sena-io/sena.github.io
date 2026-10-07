let frames = [];
let bgImg;
let numFrames = 7;
let sounds = [];
let soundIndex = 0;
let index = 0;
let fairyX = 100;

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
    image(frames[index], fairyX, 130, 200, 180);
  }
}

// function mousePressed() {
//   if (sounds[soundIndex]==3){
//     image(frames[index], 400, 130, 200, 180);
//   }
//   else {
//   index = (index + 1) % frames.length;
//   userStartAudio();
//   sounds[soundIndex].play();
//   soundIndex = (soundIndex + 1) % sounds.length; //incrementing the sound index and looping back to 0 when it reaches the end of the array
//   }

// }

function mousePressed() {
  // 1. Always increment animation and start audio (moved OUT of the if/else)
  index = (index + 1) % frames.length;
  userStartAudio();
  // 2. Stop all sounds in the array to prevent overlapping
  for (let i = 0; i < sounds.length; i++) {
    sounds[i].stop();
  }
  // 3. Check if it is the third sound (index 2) to move the fairy
  if (soundIndex === 3) {
    fairyX = 500; // Move right for the third sound
  } else {
    fairyX = 100; // Stay in the normal position for all other sounds
  }
  sounds[soundIndex].play();
  soundIndex = (soundIndex + 1) % sounds.length;
}

// play music and make it stop and mouse pressed.

// 2. Stop and start the animation
function keyPressed() {
  if (key === " ") {
    // Find the index of the currently playing sound
    let playingIndex = soundIndex - 1;
    if (playingIndex < 0) {
      playingIndex = sounds.length - 1; // Wrap around if it goes below 0
    }

    if (isLooping()) {
      noLoop();
      sounds[playingIndex].pause(); // Pause the specific sound
    } else {
      loop();
      sounds[playingIndex].play(); // Resume that same sound
    }
  }
}
