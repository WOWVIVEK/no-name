var MR
var FR 





function setup() {
  createCanvas(1200,800);
  FR = createSprite(200,200,50,80)
  FR.shapeColor = "green"

  MR = createSprite(400,200,80,30)
  MR.shapeColor = "green"
FR.debug = true
MR.debug = true
}

function draw() {
  background("black");
  MR.x = World.mouseX
  MR.y = World.mouseY
if(MR.x - FR.x < FR.width/2 + MR.width/2
  && FR.x - MR.x < FR.width/2 + MR.width/2 
  && MR.y - FR.y < FR.width/2 + MR.height/2
  && FR.y - MR.y < FR.width/2 + MR.height/2
  
  )
{
  MR.shapeColor = "red"
  FR.shapeColor = "red"
}
  else{
    MR.shapeColor = "green"
    FR.shapeColor = "green"
  }

  drawSprites();
}