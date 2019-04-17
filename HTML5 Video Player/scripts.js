const PLAY = document.querySelector('.player__button');
const VIDEO = document.querySelector('.player__video');
const VOLUME_SLIDER = document.querySelector('input[name=volume]');
const PLAYBACK_SLIDER = document.querySelector('input[name=playbackRate]');


PLAY.addEventListener('click',playVideo);
VIDEO.addEventListener('click',playVideo);
VOLUME_SLIDER.addEventListener('change', changeSound)
PLAYBACK_SLIDER.addEventListener('change', changeSpeed)


console.dir(VIDEO);

function playVideo(){
    VIDEO.paused == true? VIDEO.play():VIDEO.pause();
}

function changeSound(e){
      //console.log(e.srcElement.value)
     VIDEO.volume = e.srcElement.value;
}

function changeSpeed(e){
    //console.log(e.srcElement.value)
   VIDEO.playbackRate = e.srcElement.value;
}

