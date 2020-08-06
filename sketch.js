const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
	var paperBall,ground
	var  dustbinRightSide, dustbinLeftSide, dustbinBottom
}

function setup() {
	createCanvas(1000, 600);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperBall = createSprite(200, 400, 15);
Matter.Bodies.circle(200, 400, 15, options);

dustbinRightSide = new Dustbin(800, 525, 10, 70);
dustbinRightSide.shapeColor = 'yellow';

dustbinLeftSide = new Dustbin(700, 525, 10, 70);
dustbinLeftSide.shapeColor = 'yellow';

dustbinBottom = new Dustbin(750, 560, 100, 10);
dustbinBottom.shapeColor = 'yellow';

ground = new Ground(500, 570, 1000, 10);
ground.shapeColor = "blue";

	Engine.run(engine);

}

Matter.Bodies.circle()

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
paperBall.display();
rectMode(CENTER);
fill(255);
rect(ground.position.x, ground.position.y, 800, 50);
dustbinBottom.display();
dustbinLeftSide.display();
dustbinRightSide.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW)
	Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:85, y:-85})
	  }