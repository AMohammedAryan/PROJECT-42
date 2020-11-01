var hr = hour();
var min = minute();
var sc = second();

angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12 % 24, 0, 360);

  translate(width/2, height/2);

  push();

  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);

  pop();

  push();

  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 100, 0);

  pop();

  push();

  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 100, 0);

  pop();

  drawSprites();
}

console.log(hrAngle);