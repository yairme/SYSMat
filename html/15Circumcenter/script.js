const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//scope
let graph, A, B, C, ab, ac, bc, mAB, mAC, mBC, pab, pac, pbc, S, dist;

graph = new GraphBackGround();

A = new Point(100,100,"15","red",true);
B = new Point(500,300,"15","green",true);
C = new Point(400,600,"15","blue",true);

ab = new LinearFunction(0,0);
ac = new LinearFunction(0,0);
bc = new LinearFunction(0,0);

mAB = new Point(0,0,"10","black",false);
mAC = new Point(0,0,"10","black",false);
mBC = new Point(0,0,"10","black",false);

pab = new LinearFunction(0,0);
pac = new LinearFunction(0,0);
pbc = new LinearFunction(0,0);

S = new Point(0,0,"12","white",false);


animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();

    ab.slope = (B.y - A.y)/(B.x - A.x);
    ab.intercept = B.y - ab.slope * B.x;
    ab.draw("rgba(0,0,0,0.4)");

    ac.slope = (C.y - A.y)/(C.x - A.x);
    ac.intercept = C.y - ac.slope * C.x;
    ac.draw("rgba(0,0,0,0.4)");

    bc.slope = (C.y - B.y)/(C.x - B.x);
    bc.intercept = B.y - bc.slope * B.x;
    bc.draw("rgba(0,0,0,0.4)");

    // Wilt niet werken helaas. Is vaaker gebeurt met fill.
    //context.beginPath();
    //context.fillStyle = "rgba(255,255,0,0.4)";
    //context.moveto(A.x,A.y);
    //context.lineTo(B.x,B.y);
    //context.lineTo(C.x,C.y);
    //context.closePath();
    //context.fill();

    mAB.x = (A.x + B.x)/2 ; mAB.y = (A.y + B.y)/2
    mAC.x = (A.x + C.x)/2 ; mAC.y = (A.y + C.y)/2
    mBC.x = (B.x + C.x)/2 ; mBC.y = (B.y + C.y)/2

    mAB.draw();
    mAC.draw();
    mBC.draw();

    pab.slope = -1/(ab.slope);
    pab.intercept = mAB.y - pab.slope * mAB.x;

    pac.slope = -1/(ac.slope);
    pac.intercept = mAC.y - pac.slope * mAC.x;

    pbc.slope = -1/(bc.slope);
    pbc.intercept = mBC.y - pbc.slope * mBC.x;

    pab.draw();
    pac.draw();
    pbc.draw();

    
    S.x = pab.intersection(pbc).x;
    S.y = pab.intersection(pbc).y;

    

    dist = Math.sqrt((A.x - S.x) * (A.x - S.x) + (A.y - S.y) * (A.y - S.y));

    context.beginPath();
    context.arc(S.x,S.y,dist,0,Math.PI*2);
    context.stroke();
    

    S.draw();

    A.draw();
    B.draw();
    C.draw();
}


