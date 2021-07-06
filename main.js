song1="";
volume=1;
function preload(){
    song1=loadSound("Song.mp3");
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
    song1.play();
    song1.setVolume(volume);
}
