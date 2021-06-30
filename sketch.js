var platform1;
var countDistanceX=0;
var gap=0;
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  for(var i=0; i<28; i++){
  platform1=new Platform(countDistanceX);
  countDistanceX=countDistanceX + platform1.rw + gap;
  gap=random([82,39,10,93,87,25])

}
}
function draw() {
  background('skyblue'); 
 drawSprites();
}