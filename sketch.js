const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinko = [];
var divisions = [];

var ground;
var plinko, particles, divisions;
var divisionHeight = 300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,795,width,10);

   for(var d = 0; d <=width; d = d + 80)
   {
     divisions.push(new Divisions(d,height - divisionHeight / 2, 10 ,divisionHeight));
   }
  for(var a = 40; a <=width; a = a + 50)
  {
    plinko.push(new Plinko(a, 75))
  }
  for(var b = 15; b < width - 10; b = b + 50)
  {
    plinko.push(new Plinko(b, 175));
  }
  for(var c = 40; c < width; c = c + 50)
  {
    plinko.push(new Plinko(c, 275));
  }
  for(var d = 15; d < width - 10; d = d + 50)
  {
    plinko.push(new Plinko(d, 375));
  }
 
}

function draw() {
  //black background
  background(0);  
  Engine.update(engine);
  
  ground.display();
  for(var z = 0; z <=divisions.length - 1; z = z + 1)
  {
    divisions[z].display();
  }
  for(var e = 0; e <=plinko.length - 1; e = e + 1)
  {
    plinko[e].display();
  }

  for(var e = 0; e <=plinko.length - 1; e = e + 1)
  {
    plinko[e].display();
  }

  for(var e = 0; e <=plinko.length - 1; e = e + 1)
  {
    plinko[e].display();
  }

  for(var e = 0; e <=plinko.length - 1; e = e + 1)
  {
    plinko[e].display();
  }
  if(frameCount % 60 === 0)
  {
    particles.push(new Particles(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }
  for(var f = 0; f <=particles.length - 1; f = f + 1)
  {
    particles[f].display();
  }
}