
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,roof;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1=new Bob(200,600,100)
bobObject2=new Bob(300,600,100)
bobObject3=new Bob(400,600,100)
bobObject4=new Bob(500,600,100)
bobObject5=new Bob(600,600,100)
roof=new Roof(400,100,600,30)

rope1 = new Rope(bobObject1.body, roof.body, -200, 0);
rope2 = new Rope(bobObject2.body, roof.body, -100, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 100, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 200, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  if(keyWentDown("m")){
bobObject1.x=400
bobObject1.y=400
  }
  drawSprites();
 
}



