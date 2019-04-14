const Play = document.querySelector('.player__button');
const Video = document.querySelector('.player__video');

Play.addEventListener('click',playVideo);
Video.addEventListener('click',playVideo);

function playVideo(){
    Video.paused == true? Video.play():Video.pause();
}