const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(330,0,50,200);
    box2=new Box(70,0,50,200);
    box3=new Box(200,250,150,250);
    ground1=new Ground(200,410,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    box3.display();
        fill(255);
        stroke(222);
        triangle(45,200,125,200,125,130)
        triangle(275,130,275,200,355,200)
        stroke(255);   
        ellipse(200,150,70,120);
        triangle(200,70,174,110,226,110)
        fill(0);
        ellipse(200,390,30,120);
}