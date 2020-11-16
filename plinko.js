class Plinko{
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'restitution':0.8,
            'friction':0
            
        }
        this.body = Bodies.circle(x, y,7,options);
        this.r = 7;
        World.add(world, this.body);
      }
      display(){
      
       // console.log(this.body.speed);
       
          var angle = this.body.angle;
         push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          ellipseMode(RADIUS);
          fill("white")
          ellipse(0, 0, this.r, this.r);
          pop();

         }
        }