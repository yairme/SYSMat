const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let A,B,background,l;

A = new Point(200,200,20,"red",true);
B = new Point(500,300,20,"blue",true);

C = new Point(10,10,15,"white",false);
D = new Point(30,10,15,"white",false);

l=new LinearFunction(-1,400);

background = new GraphBackGround();

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height)
    background.draw();
    A.draw();
    B.draw();

    l.slope = (A.y - B.y)/(A.x - B.x);
    // y      = ax + b
    // y - ax = b
    l.intercept = A.y -l.slope* A.x;

    C.x = 0;
    C.y = l.y(0);
    D.x = width;
    D.y = l.y(width);

    context.beginPath();
    context.moveTo(C.x,C.y);
    context.lineTo(D.x,D.y);
    context.closePath();
    context.stroke();

    C.draw();
    D.draw();
}


