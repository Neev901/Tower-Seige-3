class slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.03,
      length: 10
    }
    this.pointB=pointB
    this.sling = Constraint.create(options)
    World.add(world, this.sling)

  }

  join(x){
    this.sling.bodyA=(x.body);
  }
  
  display() {
    if(this.sling.bodyA!==null){
    var pointA = this.sling.bodyA.position;
    line(pointA.x, pointA.y, this.sling.pointB.x, this.sling.pointB.y);
  }
  }

  fly(){
   this.sling.bodyA=null
  }
}
