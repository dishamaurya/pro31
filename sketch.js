const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var particles = [];
var divisions = [];
var ground;
var divisionHeight = 300;

function setup() {
  createCanvas(480,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Divisions(400,395,800,10);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, 340, 10, 170))
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,50));
  }

  for(var j = 15; j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j,100));
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,150));
  }

  for(var j = 15; j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j,200));
  }


}

function draw() {
  background("black"); 
  Engine.update(engine);

  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  if(frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10,10));
  }

  for(var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
  
  ground.display();
 

  drawSprites();
}