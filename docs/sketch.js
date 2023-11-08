let size = 50;
let ballNumber = 1;
let vel;
let pos;
let needle;
let needleL;
let needleR;

function setup() {
    pixelDensity(1);
    canvas = createCanvas(500, windowHeight, 'beholder');
    canvas.id('canvas');
    textSize(24);

    vel = createVector(0, 4);
    pos = createVector(0, 0);
    newPos();
    needle = new Needle(width/2, 0, width/20, height/20);
    needleL = new Needle(width/20, 0, width/20, height/40);
    needleR = new Needle(width/20*19, 0, width/20, height/40);

    canvas.elt.style.border = '2px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '5px';

    canvas.parent('#beholder');

    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';
}

function draw() {
    background(25,128,128);
    strokeWeight(1);
    fill(100, 200, 160);
    needle.draw();
    if (ballNumber > 35) {
        needleL.draw();
        needleR.draw();
    }

    pos.y -= vel.y;
    vel.x = int(rotationY) / 20;
    pos.x += vel.x;

    if (pos.y < 0 - size/2 || needle.checkCollision(pos.x, pos.y, size) || needleL.checkCollision(pos.x, pos.y, size) || needleR.checkCollision(pos.x, pos.y, size)){
        newPos();
        vel.x = 0;

        ballNumber++;
        if (ballNumber < 10 || (ballNumber <= 30 && ballNumber % 3 == 0))
            vel.y *= 1.1;
        
    } else if (pos.x < (0 + size/2)) {
        pos.x = 0 + size/2 + 1;
    } else if (pos.x > (width - size/2)) {
        pos.x = width - size/2 - 1;
    }

    ellipse(pos.x, pos.y, size);
}

function newPos() {
    pos.x = random(0 + size, width - size)
    pos.y = height + size/2;
}

class Needle {
    constructor(posX, posY, width, length) {
        this.pos = createVector(posX, posY);
        this.length = length;
        this.width = width;
    }

    draw() {
        push();
        fill(150);
        rect(this.pos.x - this.width/2, this.pos.y, this.width, this.length);
        pop();
    }

    checkCollision(posX, posY) {
        return (posX - size/2 < this.pos.x + this.width/2 && posX + size/2 > this.pos.x - this.width/2 && posY - size/2 < this.pos.y + this.length && posY+size/2 > this.pos.y);
    }
}