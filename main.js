song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftwrist = 0;
scorerightwrist = 0;

function preload(){
 song=loadSound("music.mp3");
 song2=loadSound("music2.mp3");
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    hbg = ml5.poseNet(video,modelLoaded);
    hbg.on('pose',gotPoses);
}

if(rightWristY>0 && rightWristY<=100)
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
if (results.length > 0)

{
    console.log(results);
    scoreleftwrist = results[0].pose.keypoints[9].score;
    console.log("scoreleftwrist = : " + scoreleftwrist);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log('leftWristX =' + leftWristX + 'leftWristY =' + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log('rightWristX =' + rightWristX + 'rightWristY =' + rightWristY);
}

}

function modelLoaded() 
{
    console.log('Posenet is initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000")
    stroke("#FF0000")

    if(scoreleftwrist>0.2)
    {
        song.play();
        song.setVolume(1);
        song.rate(1);
    }
}
