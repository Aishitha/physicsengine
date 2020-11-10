const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld
var ball 
var stella; 

function setup() {
  createCanvas(400,400);
 myengine =  Engine.create() //myengine.world
myworld = myengine.world;

var options = { isStatic : true}

stella = Bodies.rectangle(200,380,400,30,options);
World.add(myworld,stella)

var options={restitution : 1.0}

ball=Bodies.circle(100,100,50,options)
World.add(myworld,ball)

}

function draw() {
  Engine.update(myengine)
  background(0);  
rectMode(CENTER)
rect(200,200,80,80)

rect(stella.position.x,stella.position.y,400,30)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50,50)
}