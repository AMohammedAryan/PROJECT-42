var hr;
var min;
var sc;

function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 
  
  hr = hour();
  min = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  translate(width/2, height/2);
  rotate(-90);

  noFill();

  push();

  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 250, 0);

  pop();

  push();

  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 150, 0);

  pop();

  push();

  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 100, 0);

  pop();

  stroke("red");

  arc(0, 0, 500, 500, 0, scAngle);

  stroke("green");

  arc(0, 0, 300, 300, 0, minAngle);

  stroke("blue");

  arc(0, 0, 200, 200, 0, hrAngle);

  drawSprites();
}
