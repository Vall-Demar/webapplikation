let y = 10; let r = 200; g = 180; b = 0;
let ned = true;
let rystet = 0;
let flyttet = 0;

function setup() {
    canvas = createCanvas(300, 550);
    canvas.id('canvas');
    textSize(24);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
}

function draw() {
    background(r, g, b);
    strokeWeight(10);
    ellipse(width / 2, y, 50);
    if (ned)
        y++;
    else
        y--;
    if (y >= height || y <= 0)
        ned = !ned;
    if (accelerationX > 70) {
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
        if(rystet%2 == 0)
        ned = !ned;
        rystet++;
    }
    
text('rystet: ' + str(rystet), 50, height-100);
text('flyttet: ' + str(flyttet),50, height-50);
}

function deviceMoved(){
    flyttet++;

}