var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,150,80,20);
  car.shapeColor = "yellow";
  car.velocityX = 3;
  wall = createSprite(1000,150,20,90);
  wall.shapeColor = "brown";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  

   if(isTouches(fixedRect,movingRect)){
     fixedRect.shapeColor = "red";
     movingRect.shapeColor = "red";

   }

   if(isTouches(car,wall)){
     car.shapeColor = "blue";
   }
    
    bounceOff(car,movingRect)

  drawSprites();
  } 