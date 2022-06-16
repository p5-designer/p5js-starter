let bubbles = [];
// let unicorn;

function setup() {
  createCanvas(1200, 800);
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 10);    
    bubbles[i] = new Bubble(x, y, r);
  }
  // unicorn = new Bubble (400, 200, 10)
}

function draw() {
  background(0);
 
  // unicorn.x = mouseX;
  // unicorn.y = mouseY;
  // unicorn.show();
     
  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)){
        overlapping = true;        
      }
      overlapping ? b.changeColor(255) : b.changeColor(0);      
    }    
  }
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
