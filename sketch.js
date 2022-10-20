var sprite;

function setup() { //CRIADORA
  createCanvas(1000, 600);

  sprite = createSprite(300,300,50,50)
}

function draw() { //DESENHADORA
  background(20);

  if (keyDown(RIGHT_ARROW)) {
    sprite.x = sprite.x + 5
  }

  drawSprites();
}