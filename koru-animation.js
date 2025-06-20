// Contemporary Koru with Delayed Start & Hex Palette - Max + ChatGPT
let koruSwarm = [];
let palette = [
  '#FF9CEF', // pink
  '#AFF5F9', // aqua
  '#C9FC2C'  // lime
];
let bgColor = '#ffffff';
let isAnimationActive = true;
let p5Canvas;

function setup() {
  // Create canvas and attach it to the p5-container
  p5Canvas = createCanvas(windowWidth, windowHeight);
  p5Canvas.parent('p5-container');
  
  colorMode(RGB, 255, 255, 255, 255);
  clear(); // Start with transparent background
  noFill();
  strokeCap(ROUND);
}

function draw() {
  if (!isAnimationActive) return;
  
  // Clear the canvas each frame for proper transparency
  clear();

  for (let i = koruSwarm.length - 1; i >= 0; i--) {
    let k = koruSwarm[i];
    k.update();
    k.display();
    if (k.isFinished()) {
      koruSwarm.splice(i, 1);
    }
  }
}

// Override p5.js mouse events to prevent interference
function mousePressed() {
  // Only create koru if we're in carousel view and not clicking on UI elements
  if (!isAnimationActive) return false;
  
  let origin = createVector(mouseX, mouseY);
  let burstCount = floor(random(8, 15)); // More koru per click
  for (let i = 0; i < burstCount; i++) {
    let angle = random(TWO_PI);
    let burstOrigin = p5.Vector.add(origin, p5.Vector.fromAngle(angle).mult(random(15, 50)));
    let delay = floor(random(0, 800));
    koruSwarm.push(new Koru(burstOrigin.x, burstOrigin.y, color(random(palette)), angle, delay));
  }
  
  // Return false to allow other click events to work
  return false;
}

function mouseDragged() {
  if (!isAnimationActive) return false;
  
  if (frameCount % 4 === 0) {
    let delay = floor(random(0, 400));
    koruSwarm.push(new Koru(mouseX + random(-15, 15), mouseY + random(-15, 15), color(random(palette)), random(TWO_PI), delay));
  }
  
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Functions to control animation state
function startKoruAnimation() {
  isAnimationActive = true;
  document.getElementById('p5-container').classList.remove('hidden');
}

function stopKoruAnimation() {
  isAnimationActive = false;
  document.getElementById('p5-container').classList.add('hidden');
  koruSwarm = []; // Clear existing koru
}

class Koru {
  constructor(x, y, colorVal, direction, delay) {
    this.origin = createVector(x, y);
    this.points = [];
    this.angle = direction;
    this.maxLength = floor(random(30, 50)); // Much bigger koru
    this.birthTime = millis() + delay;
    this.lifespan = 200 + delay; // Longer lifespan for better fade
    this.stretch = random(1.2, 2.5); // Bigger stretch
    this.curl = -random(0.08, 0.25);
    this.color = colorVal;
    this.started = false;
    this.maxAlpha = random(180, 255); // Variable max opacity
  }

  update() {
    if (millis() < this.birthTime) return;
    this.started = true;
    if (this.points.length < this.maxLength) {
      let t = this.points.length;
      let angleGrowth = this.angle + t * this.curl;
      let r = t * this.stretch + sin(t * 0.2) * 3;
      let x = this.origin.x + r * cos(angleGrowth);
      let y = this.origin.y + r * sin(angleGrowth);
      this.points.push(createVector(x, y));
    }
  }

  display() {
    if (!this.started) return;
    let age = millis() - this.birthTime;
    
    // Improved fade calculation
    let fadeStart = this.lifespan * 0.6; // Start fading at 60% of lifespan
    let alpha;
    
    if (age < fadeStart) {
      // Growing phase - fade in
      alpha = map(age, 0, fadeStart * 0.3, 0, this.maxAlpha);
      alpha = constrain(alpha, 0, this.maxAlpha);
    } else {
      // Fading phase - fade out
      alpha = map(age, fadeStart, this.lifespan, this.maxAlpha, 0);
      alpha = constrain(alpha, 0, this.maxAlpha);
    }

    // Enhanced glow effect - multiple layers
    for (let i = 6; i > 0; i--) {
      let glowAlpha = alpha * 0.08 * (7 - i);
      stroke(red(this.color), green(this.color), blue(this.color), glowAlpha);
      strokeWeight(i * 2.5);
      this.drawCurve();
    }

    // Main koru line with variable thickness
    for (let i = 0; i < this.points.length - 1; i++) {
      let progress = i / this.points.length;
      let w = map(progress, 0, 1, 4, 1); // Thicker at start, thinner at end
      strokeWeight(w);
      
      // Color with proper alpha
      stroke(red(this.color), green(this.color), blue(this.color), alpha);
      line(this.points[i].x, this.points[i].y, this.points[i + 1].x, this.points[i + 1].y);
    }
  }

  drawCurve() {
    if (this.points.length < 3) return; // Need at least 3 points for curve
    
    beginShape();
    noFill();
    
    // Add the first point twice for smooth curve start
    if (this.points.length > 0) {
      curveVertex(this.points[0].x, this.points[0].y);
    }
    
    // Add all points
    for (let p of this.points) {
      curveVertex(p.x, p.y);
    }
    
    // Add the last point twice for smooth curve end
    if (this.points.length > 0) {
      let lastPoint = this.points[this.points.length - 1];
      curveVertex(lastPoint.x, lastPoint.y);
    }
    
    endShape();
  }

  isFinished() {
    return millis() > this.birthTime + this.lifespan;
  }
}