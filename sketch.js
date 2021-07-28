const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("backGround.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height+300,width,height);
    platform = new Ground(150, height-170, 300, 170);

    box1 = new Box(900,height-100,70,70);
    box2 = new Box(1120,height-100,70,70);
    pig1 = new Pig(1010, height-100);
    log1 = new Log(1010,height-100,300, PI/2);

    box3 = new Box(900,height-170,70,70);
    box4 = new Box(1120,height-170,70,70);
    pig3 = new Pig(1010, height-170);

    log3 =  new Log(1010,height-190,300, PI/2);

    box5 = new Box(1010,height-240,70,70);
    log4 = new Log(960,height-240,150, PI/7);
    log5 = new Log(1070,height-240,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:height-410});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}