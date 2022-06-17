let bubble1
let bubble2

function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble1 = new Bubble(windowWidth/2, windowHeight/2);
  bubble2 = new Bubble(300, 200, 10);
}

function draw() {
  background(0,100,100);   
  
  if (bubble1.intersects(bubble2)){
    background(200,0,100);
  }

  bubble1.show();  
  bubble1.bounce(windowWidth, windowHeight);  
  
  bubble1.move();
  bubble2.show();
  bubble2.x = mouseX;
  bubble2.y = mouseY;

}

class Bubble {
  constructor(x, y, r =40, xspeed = 2, yspeed = -1) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.brightness = 0;
  } 

    intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);    
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  bounce(width, height) {
    if (this.x < 0 || this.x > width) {
      this.xspeed *= -1;
    }
  
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }
  
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);    
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }  
}
