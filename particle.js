class Particle{
    constructor(x, y) {
        var options = {
            'isStatic': false,
             'friction':1.0
            
        }
        this.body = Bodies.circle(x, y, 10,options);
        this.r = 10;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
      }
      display(){
      
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          ellipseMode(CENTER);
          fill(this.color);
          ellipse(0, 0,15,15);
          pop();

         }
        }