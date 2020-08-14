difference = 0;
leftWristX = 0;
rightWristX = 0;
function preload() {
}
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(450, 450);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    background("#E7CBFF");
    textSize(difference);
    fill("#527EFC");
    text("Sanavi", 150,150);
    document.getElementById("text_size").innerHTML = "Size of text is " + difference;
}
function modelLoaded() {
    console.log("Model is Loaded");
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        console.log(leftWristX);
        console.log(rightWristX);
        difference = leftWristX - rightWristX;
        difference = floor(difference);
        console.log(difference);
    }
}