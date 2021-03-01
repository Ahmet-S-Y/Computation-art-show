let x = 0;
let y = 0;
let spacing = 15;
let twoX = 5;
let twoY = 5;
let twoSpacing = 10;
let threeX = 10;
let threeY = 10;
let threeSpacing = 20;

function setup() {
  createCanvas(1200, 1200);
  background(0);
}

function draw() {
  stroke(random(155, 255), random(100, 200), 0);
  strokeWeight(1.5)

  if (random(2) < 1) {
    line(x, y, x + spacing, y + spacing);
    line(twoX, twoY, twoX + twoSpacing, twoY + twoSpacing);
    line(threeX, threeY, threeX + threeSpacing, threeY + threeSpacing);
  } else {
    line(x, y + spacing, x + spacing, y);
    line(twoX, twoY + twoSpacing, twoX + twoSpacing, twoY);
    line(threeX, threeY + threeSpacing, threeX + threeSpacing, threeY);
  } 
  
  threeX += threeSpacing
  if (threeX > width) {
    threeY += threeSpacing
    threeX = 0;
  }
  
  twoX += twoSpacing
  if (twoX > width) {
    twoY += twoSpacing
    twoX = 0;
  }
  
  x += spacing
  if (x > width) {
    y += spacing
    x = 0;
  }
}
