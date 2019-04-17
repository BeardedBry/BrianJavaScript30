const PLAY = document.querySelector('.player__button');
const VIDEO = document.querySelector('.player__video');

PLAY.addEventListener('click',playVideo);
VIDEO.addEventListener('click',playVideo);

function playVideo(){
    VIDEO.paused == true? VIDEO.play():VIDEO.pause();
}