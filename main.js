song1="";
volume=1;
noOfTimes=0;
function preload(){
    song1=loadSound("Song.mp3");
    song2=loadSound("Music.mp3");
}
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.parent('liveVideo');
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', Results);
}
function modelLoaded(){
    console.log("The model is loaded");
}
function Results(results){
    if(results.length>0){
        if(results[0].pose.keypoints[10].score>0.2){
            volume=Number(results[0].pose.rightWrist.y)/500;
            document.getElementById('volume').textContent=volume;
        }        
    }
}
function Play(){
    noOfTimes++
    if(noOfTimes%2==0){
        song2.stop();
        song1.play();
        song1.setVolume(volume);
    }
    else{
        song1.stop();
        song2.play();
        song2.setVolume(volume);
    }
}
