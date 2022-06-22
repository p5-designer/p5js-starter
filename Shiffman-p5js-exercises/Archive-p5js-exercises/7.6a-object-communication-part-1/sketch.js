let bubble1
let bubble2

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(300, 200, 24);
}

function draw() {
  background(0);   
  
  if (bubble1.intersects(bubble2)){
    background(200,0,100);
  }

  bubble1.show();  
  bubble2.show();
  // bubble1.move();
  bubble2.x = mouseX;
  bubble2.y = mouseY;

}

class Bubble {
  constructor(x, y, r =50) {
    this.x = x;
    this.y = y;
    this.r = r;
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
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);    
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }  
}
