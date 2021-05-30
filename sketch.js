var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  surface1=createSprite(0,580,360,30);
  surface2=createSprite(295,580,200,30);
  surface3=createSprite(515,580,200,30);
  surface4=createSprite(740,580,220,30);
  surface1.shapeColor=rgb(0,0,255);
  surface2.shapeColor=rgb(255,0,0);
  surface3.shapeColor=rgb(0,255,0);
  surface4.shapeColor=rgb(153,0,76);
    ball=createSprite(100,100,40,40);
    ball.shapeColor=rgb(255,255,255);
    //create box sprite and give velocity
  ball.velocityX=4;
  ball.velocityY=9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 edges=createEdgeSprites();
 ball.bounceOff(edges);
 if((isTouching(ball,surface1))&& ball.bounceOff(surface1)){
  ball.shapeColor=rgb(0,0,255);

 }
 if(isTouching(ball,surface2)){
  ball.shapeColor=rgb(255,0,0);

 }
 if(isTouching(ball,surface3)){
  ball.shapeColor=rgb(0,255,0);

 }
 if(isTouching(ball,surface4)){
  ball.shapeColor=rgb(153,0,76);

 }
drawSprites();

    //add condition to check if box touching surface and make it box
}
function isTouching(object1,object2){
  
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else return false;
}
