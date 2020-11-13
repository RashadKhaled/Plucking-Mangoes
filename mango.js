class Mango {
    constructor(x, y, radius) {
      var options = {
          'restitution':0,
          'friction':1.0,
          isStatic: true
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius= radius
      
      World.add(world, this.body);
      this.image= loadImage("Images/mango.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };
  