class Ball{
    constructor(x,y,radius)
    {
    
        var options = { 
            density: 1, 
            frictionAir: 0.01};
      
     

    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body)
}

display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
     fill("crimson")
    ellipse(0, 0, this.radius*2, this.radius*2);
    pop();
  }
}