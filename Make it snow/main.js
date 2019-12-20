// Make it snow

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
//Parallel Arrays to store Bubble Data

let snow = [];

for (let i = 0; i < 100; i++){
    snow.push({
        x: Math.floor(Math.random()*cnv.width),
        y: 0, 
        r: Math.floor(Math.random()*10+1), 
        speed: Math.floor(Math.random()*10+1), 
        col: "white"
    });
}

console.log(snow);

// Main Program Loop
requestAnimationFrame(draw);

function draw() {

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    
    //Move snow
    for (let i = 0; i < snow.length; i++) {
        ctx.fillStyle = snow[i].col;
        ctx.beginPath();
        ctx.arc(snow[i].x,snow[i].y,snow[i].r,0, 2 * Math.PI);
        ctx.fill();
        snow[i].y += snow[i].speed;
        if (snow[i].y >= cnv.height) {
            snow[i].y = 0;
            snow.push();
        }
    }


    // Request another Animation Frame
        requestAnimationFrame(draw);
}

function addSnow(choice) {
    if (choice == "Space") {
        snow.push();
    }
    else if (choice == "Digit 1") {
        snow.pop();
    }
}