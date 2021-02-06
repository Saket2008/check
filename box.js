class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.3,
            'density':0.00001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if (this.body.speed < 5 ){
          push()
          //rotate(angle);
          rectMode(CENTER);
          fill("skyblue");
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
          pop()
        }
        else{
          push();
          this.visibility = this.visibility - 0.05;
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
          tint(255, this.visibility);
          pop();
          World.remove(world, this.body);
        }
      }
}