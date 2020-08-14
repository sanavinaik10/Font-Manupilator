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