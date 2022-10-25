let x = 0;
let y = 0;
let xSpeed = 3;
let ySpeed = 3;
let ballSize = 100;
let dragState = false;
let myImage;

function preload() {
  myImage = loadImage("./assets/images/land.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(myImage, 0, 0, width, height);
  push();
  textFont("Silkscreen");
  textStyle(BOLD);
  textSize(72);
  textAlign(LEFT);
  fill(0, 255, 96);
  text("To Explore", (width / 100) * 2.5, (height / 100) * 60);
  text("Digital", (width / 100) * 68, (height / 100) * 80);
  text("Galaxy", (width / 100) * 66.5, (height / 100) * 90);
  pop();
  translate(-10, -15);
  if (dragState == false) {
    x += xSpeed;
    y += ySpeed;
  }
  bounceOnEdge();
  for (let x1 = 20; x1 < windowWidth; x1 += 10) {
    for (let y1 = 20; y1 < windowHeight; y1 += 10) {
      let distance = dist(x, y, x1, y1);
      let Rmap = map(distance, 0, width, 0, 25);
      const x2 = random(0, width);
      const y2 = random(0, height);
      const myColor = get(x2, y2);
      fill(myColor);
      noStroke();
      rect(x1, y1, Rmap);
    }
  }
  push();
  translate(10, 15);
  fill(0, 255, 96);
  ellipse(x, y, ballSize);
  pop();
  push();
  textFont("Silkscreen");
  textStyle(BOLD);
  textSize(72);
  textAlign(LEFT);
  fill(0, 255, 96);
  text("Hello", (width / 100) * 80, (height / 100) * 15);
  text("Unknowns", (width / 100) * 65, (height / 100) * 25);
  text("Drag", (width / 100) * 3, (height / 100) * 50);
  text("The", (width / 100) * 80, (height / 100) * 70);
  pop();
}

function bounceOnEdge() {
  if (x >= width - ballSize / 2) {
    xSpeed *= -1;
    x = width - ballSize / 2;
  }
  if (x <= ballSize / 2) {
    xSpeed *= -1;
    x = ballSize / 2;
  }
  if (y >= height - ballSize / 2) {
    ySpeed *= -1;
    y = height - ballSize / 2;
  }
  if (y <= ballSize / 2) {
    ySpeed *= -1;
    y = ballSize / 2;
  }
}

function mousePressed() {
  let d = dist(x, y, mouseX, mouseY);
  if (d <= ballSize / 2) {
    dragState = true;
  }
}

function mouseDragged() {
  if (dragState) {
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased() {
  dragState = false;
}
