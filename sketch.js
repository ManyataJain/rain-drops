const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var raindrops=[];

function preload(){
    
}

function setup(){
engine = Engine.create();
 world = engine.world;
   umb=new Umbrella(700,400);
   
    
}

function draw(){

   
    if(frameCount %150===0){

        for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
        }
      
    }

    var maxDrops=100;
    for (var i=0; i<maxDrops;i++){
       raindrops[i].showDrop();
    }
    
    createCanvas(1600,1600);
    background(0,0,0);
    umb.display();}
   

   
