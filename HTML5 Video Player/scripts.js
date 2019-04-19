const PLAY = document.querySelector('.player__button[title="Toggle Play"]');
const VIDEO = document.querySelector('.player__video');
const VOLUME_SLIDER = document.querySelector('input[name=volume]');
const PLAYBACK_SLIDER = document.querySelector('input[name=playbackRate]');
const DATA_SKIP = document.querySelectorAll('button[data-skip]');
const FILLED = document.querySelector('.progress__filled');



PLAY.addEventListener('click',playVideo);
VIDEO.addEventListener('click',playVideo);
VOLUME_SLIDER.addEventListener('change', changeSound);
PLAYBACK_SLIDER.addEventListener('change', changeSpeed);


DATA_SKIP[0].addEventListener('click', skip);
DATA_SKIP[1].addEventListener('click', skip);


console.dir(FILLED);

function skip(e){
    console.log(VIDEO.currentTime);
    let skipTime = e.target.dataset.skip;

    VIDEO.currentTime += Math.round(skipTime);

}

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

