const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let myArray = [];

canvas.width = width;
canvas.height = height;

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    if(Math.random()<0.01){
        let x = -50;
        let y = Math.random()*height;
        let p = new Point(x,y,50,"yellow");
        myArray.push(p);
    }

    for(let i = 0 ; i<myArray.length; i++){
        myArray[i].x += 1;
        myArray[i].draw();

        if(myArray[i].x > width){
            myArray.splice(i,1)
        }
    }
}