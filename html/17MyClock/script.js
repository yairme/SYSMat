const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let graph, face, time,hour,minutes,seconds,hourshand,minuteshand,secondshand,midX,midY;
graph = new GraphBackGround();

face = new Image();
face.src = "Img/clockFace.png";

secondshand = new Image();
secondshand.src = "Img/secondHand.png";

minuteshand = new Image();
minuteshand.src = "Img/minutesHand.png";

hourshand = new Image();
hourshand.src = "Img/hoursHand.png";






animate();

function animate(){
    midX = width/2 - (face.width)/2;
    midY = height/2 - (face.height)/2
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    graph.draw();


    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    //console.log(time,hours,minutes,seconds);


    //drawImage(image, x,y,h,w);

    context.drawImage(face,midX,midY);

    secondshand.angle = seconds/60 * 2 * Math.PI;
    minuteshand.angle = minutes/60 * 2 * Math.PI;
    hourshand.angle = hours/12 * 2 * Math.PI + minutes/(12*60) * 2 * Math.PI;


    context.save();
    context.translate(width/2, height/2);
    context.rotate(secondshand.angle);
    context.drawImage(secondshand,-70,-240);
    context.restore();

    context.save();
    context.translate(width/2, height/2);
    context.rotate(hourshand.angle);
    context.drawImage(hourshand,-20,-120);
    context.restore();

    context.save();
    context.translate(width/2, height/2);
    context.rotate(minuteshand.angle);
    context.drawImage(minuteshand,-20,-180);
    context.restore();

}