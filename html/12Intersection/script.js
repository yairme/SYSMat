const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let graph,A,B,C,S,l,m;
graph = new GraphBackGround();
A = new Point(300,300,15,"red",true);
B = new Point(400,400,15,"green",true);
C = new Point(500,200,15,"blue",true);
S = new Point(500,200,10,"yellow",);

l = new LinearFunction(0,0);
m = new LinearFunction(0,0);

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();
    

    l.slope = (B.y - A.y)/(B.x - A.x);

    l.intercept = B.y - l.slope * B.x;
    
    m.slope = -1 / l.slope;

    m.intercept = C.y - m.slope * C.x;


    S.x = (m.intercept - l.intercept)/ (l.slope - m.slope);
    S.y = l.y(S.x);


    drawLine(m);
    drawLine(l);
    A.draw();
    B.draw();  
    C.draw();  
    S.draw();
}



function drawLine(line){
    context.beginPath();
    context.lineWidth = "4";
    context.moveTo(0,line.y(0));
    context.lineTo(width,line.y(width));
    context.closePath();
    context.stroke();
}