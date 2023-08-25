function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  fill("rgb(248,106,131)")
  circle(posicaoHorizontal, posicaoVertical, 50)
  
  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
  }
  
  
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
  }
  
  if (mouseX < posicaoVertical) {
    posicaoVertical--;
  }
  
  if (mouseY > posicaoVertical) {
    posicaoVertical++;
  }
  
  if (mouseIsPressed) {
    cor = color(random (0, 255), random (0, 255), random (0, 100));
  }
}