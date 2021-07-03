song="";
function preload(){
    song=loadSound("Music.mp3");
}
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.parent('liveVideo');
}
function Play(){
    console.log(song);
    getAudioContext().resume();
    song.play();
}