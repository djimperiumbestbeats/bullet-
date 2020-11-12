var bullet,wall,deformation, speed,weight,thickness;


function setup() {
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet = createSprite(50,200,50,20)
  bullet.shapeColor="white"
  wall=createSprite(1500,200,thickness,height/2)
  createCanvas(1600,400);
  bullet.velocityX=speed
}

function draw() {
  background(0);  
 
  console.log(deformation)
  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){ 
reset()
deformation=0.5*weight*speed*speed/thickness*thickness*thickness
}
if(deformation<100){
bullet.shapeColor="green"
}
if(deformation>100){
bullet.shapeColor="red"
}



drawSprites();
}
function reset(){
bullet.velocityX=0

}