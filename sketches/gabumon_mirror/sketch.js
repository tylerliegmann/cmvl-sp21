let w = 640;
let h = 360;
let capture;

let gabumon;
let fire;


function preload(){
   gabumon = loadImage('gabumon.png');
   fire = loadImage('fire.png');
}

function setup() {

  let c = createCanvas(w, h);
  c.parent("#sketch-parent");
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  // ellipseMode(CORNER);
}

function draw() {
  //background(255,200,200);
  // image(fire, height/2, width/2);
  let stepSize = 5;
  capture.loadPixels();

  image(fire, 0, 0, width, height);

  //let threshold = 127;
  // let threshold = map(mouseX, 0, width, 0, 25, true);
  // let threshold2 = threshold+50;


  for(let y = 0; y < capture.height; y+=stepSize){
    for(let x = 0; x < capture.width; x+=stepSize){
      const index = (x + y * capture.width)* 4;

      let r =capture.pixels[index];
      let g =capture.pixels[index+1];
      let b =capture.pixels[index+2];
      let c = color(r,g,b);
      let totalBrightness = r + g + b;
      let brightness = totalBrightness/3;

      let size = map(brightness, 0, 255, stepSize/4, stepSize*2);

      image(gabumon, x, y, size*4, size*4);
//       noStroke();
//       fill(c);

//       push();
//         translate(width, 0);
//         scale(-1,1);
//         rect(x, y, size, size);
//       pop();


    }
  }

  //capture.updatePixels();
  image(gabumon,-35,-25,250,250);



}
