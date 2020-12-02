var monisha,kartik,coding;

function setup()
{
  createCanvas(800,400);
  monisha =createSprite(200,200,50,80);
  monisha.shapeColor="green";
  kartik=createSprite(600,200,80,50);
  kartik.shapeColor="green";
  coding =createSprite(200,300,50,80);
  coding.shapeColor="green";
  
  
}

function draw()
{
  background("black");

  kartik.x=World.mouseX;
  kartik.y=World.mouseY;
  if(monisha.x-kartik.x < monisha.width/2 + kartik.width/2 &&
     kartik.x-monisha.x < kartik.width/2 + monisha.width/2 &&
     monisha.y-kartik.y < monisha.height/2 + kartik.height/2 &&
     kartik.y-monisha.y < kartik.height/2 + monisha.height/2 )
  {
   monisha.shapeColor="red";
   kartik.shapeColor="red";
   coding.shapeColor="red";

  }
  else
  {
    monisha.shapeColor="green";
    kartik.shapeColor="green";
    coding.shapeColor="green";

  }
  drawSprites();

}

