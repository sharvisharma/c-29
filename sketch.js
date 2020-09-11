
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,box1,box2,box3,box4,box5;
var polygon,slingshot;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 engine = Engine.create();
 world = engine.world;

  box1= new Box(200,200,30,30);
  ground= new Ground(400,230,200,10);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot= new SlingShot(this.polygon,{x:100,y:200});
  
  
}

function draw() {
  background(255,255,255); 
  //Engine.update(engine); 
  box1.display();
  ground.display();
  
  

  drawSprites();

  
}