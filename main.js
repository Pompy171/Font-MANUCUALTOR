noseX=0;
noseY=0;

leftwristX=0;
rightwristX=0;
diffrence=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',got_results);
}

function draw(){
    background("blue");
    textSize(diffrence);
    fill("chromeyellow");
    text('Pradyumna',50,400);
}

function modelloaded(){
    console.log("MODEL LOADED");
}

function got_results(results){
    if (results.length>0){
        console.log (results);

        
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        diffrence= floor (leftwristX-rightwristX);
    }
}