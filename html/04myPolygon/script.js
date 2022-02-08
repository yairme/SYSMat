const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let background = new GraphBackGround();

for(let i=0; i<numberOfPoints; i++){
    let point = new Point(Math.random()*width,Math.random()*height,15,"red",true);
    points.push(point);
}

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    background.draw();
    for(let i=0; i<numberOfPoints; i++){
        points[i].draw();
    }

    context.beginPath();
    context.fillStyle = "rgba(255,255,0,0.4)";
    context.moveTo(points[0].x,points[0].y);
    for(let i=0; i<numberOfPoints;i++){
        context.lineTo(points[i].x,points[i].y);
    }
    context.closePath();
    context.stroke();
    context.fill();
}

