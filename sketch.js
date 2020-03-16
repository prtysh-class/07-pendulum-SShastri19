var avel;
var aacc;
var damping;
var origin;

class Strings {
  constructor(_pos, _vel, _acc) {
    this.pos = _pos;
    this.vel = _vel;
    this.acc = _acc;
  }
 
 show() {
  this.pos.add(ball);
 strokeWeight(2);
 fill(0);    
  line(origin.x, origin.y , ball.pos.x, ball.pos.y);
 }
}



class Ball {
  constructor(_pos, _vel, _acc, _r, _angle) {
    this.pos = _pos;
    this.vel = _vel;
    this.acc = _acc;
    this.rad = _r;
    this.angle = _angle;
  }

  show() {
    noStroke();
    fill(90, 255, 220);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, 40)

  }
  move() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }
  oscillate() {
     this.pos.set(this.rad*sin(this.angle), this.rad*cos(this.angle), 0);         
    this.pos.add(origin);                              
  var gravity = 0.4;                             
      aacc = (-1 * gravity / this.rad) * sin(this.angle);  
      avel += aacc;                 
      avel *= damping;                       
      this.angle += avel; 
  
  
  }
}


function setup() {
  createCanvas(400, 400);
  var origin = (width/2, 0);
  //the ball
  p = createVector(width / 2, height / 2);
  v = createVector(0, 0);
  a = createVector(random(0, 0), random(0,0));
  ball = new Ball(p, v, a);
  
  //the string
  stringp = createVector (width/2,0);
  stringv = createVector (0,0);
  stringa = createVector (0,0);
  string = new Strings ( stringp, stringv, stringa)
  
  
    avel = 0.0;
    aacc = 0.0;
    damping = 0.995;  
    ball.rad = 48.0;      
}

function draw() {
  background(255);
  ball.show();
  ball.move();
  string.show();
  ball.oscillate();
}
