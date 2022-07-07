let bubbles = [];

function setup() {
  createCanvas(600, 400);

}

function mouseDragged () {  
  let r = 40;
  let b = new Bubble(mouseX, mouseY, r);  
  bubbles.push(b); 
  
}

function draw() {
  background(0);  
  for(let i =0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }  
  
  if (bubbles.length > 10) {
    bubbles.splice(0, 1)
  }
  
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  } 

  changeColor(brightness) {
    this.brightness = brightness;
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y) < this.r;    
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 100);    
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }  
}
  