
const Engine=Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 

var engine , world , ground , ball ; 
engine = Engine.create();
world= engine.world


function setup() {
  createCanvas(800,400);
var groundoption = {
  isStatic:true 
}

  ground=Bodies.rectangle(400,380,800,10,groundoption)

  World.add(world,ground) 

 var balloption ={
   restitution: 1.0
 }

  ball=Bodies.circle(200,200,20,balloption)
  World.add(world,ball)

  
}

function draw() {
  background("lightblue");
  Engine.update(engine)
  
  rectMode(CENTER)
  rect (ground.position.x,ground.position.y,800,20)

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,40,40)



}