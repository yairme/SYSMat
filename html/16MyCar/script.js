const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let background, car, pos, vel, frontWheel, backWheel;


background = new GraphBackGround();
car = new Image();

car.src = "Img/car.png";

pos = 0;
vel = 3;

frontWheel = new Image();
frontWheel.src = "Img/wheel.png";
frontWheel.angle = 0;
frontWheel.dAngle = vel / frontWheel.width/2 * vel;

backWheel = new Image();
backWheel.src = "Img/wheel.png";
backWheel.angle = 0;
backWheel.dAngle = vel / backWheel.width/2 * vel;



animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    background.draw();
    context.drawImage(car,pos,height-car.height);
    pos += vel;
    
    context.save();
    context.translate(755+pos,668);
    context.rotate(frontWheel.angle);
    context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.width/2);
    context.restore();
    
    context.save();
    context.translate(215+pos,665);
    context.rotate(backWheel.angle);
    context.drawImage(backWheel,-backWheel.width/2,-backWheel.width/2);
    context.restore();

    frontWheel.angle += frontWheel.dAngle;
    backWheel.angle += backWheel.dAngle;

    if(pos > width){
        pos = -car.width;
    }
    
}