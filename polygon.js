class Polygon{
  constructor(x,y){
    var options={
      density:2.0,
      restitution:0.5,
      friction:0
    }
    this.body= Bodies.circle(x,y,20,options)
    World.add(world, this.body)
    this.image= loadImage("hex.png")
  }
  display(){
    var pos= this.body.position;
    push();
    translate(0,0)
    imageMode(CENTER)
    image(this.image,pos.x, pos.y, 50, 50) 
    pop();  
  }
}