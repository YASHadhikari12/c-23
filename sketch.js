 const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world


function setup() {
  createCanvas(400,400);
//create the engine
engine=Engine.create()
  //Add world to the engine
  world=engine.world

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground=Bodies.rectangle(200,370,400,10,ground_options)
World.add(world,ground)
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
rect(ground.position.x,ground.position.y,400,10)
  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 


  
  
}

