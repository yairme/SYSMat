const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let myArray = [];

canvas.width = width;
canvas.height = height;

let background = new GraphBackGround();
background.alpha = 1;
background.draw();