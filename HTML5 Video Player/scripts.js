
const PLAY = document.querySelector('.player__button[title="Toggle Play"]');
const VIDEO = document.querySelector('.player__video');
const VOLUME_SLIDER = document.querySelector('input[name=volume]');
const PLAYBACK_SLIDER = document.querySelector('input[name=playbackRate]');
const DATA_SKIP = document.querySelectorAll('button[data-skip]');
const FILLED = document.querySelector('.progress__filled');
const PROGRESS_BAR = document.querySelector('.progress');
const TOGGLE_BUTTON = document.querySelector('.toggle');
let mouseclicked = false;
let progressPercent;

PLAY.addEventListener('click',playVideo);
VIDEO.addEventListener('click',playVideo);

VIDEO.addEventListener('timeupdate', progress)

VOLUME_SLIDER.addEventListener('change', changeSound);
PLAYBACK_SLIDER.addEventListener('change', changeSpeed);

DATA_SKIP[0].addEventListener('click', skip);
DATA_SKIP[1].addEventListener('click', skip);

PROGRESS_BAR.addEventListener('click', scrub);
PROGRESS_BAR.addEventListener('mousemove', (e) => mousedown && scrub(e));
PROGRESS_BAR.addEventListener('mousedown', () => mouseclicked = true);
PROGRESS_BAR.addEventListener('mouseup', () => mouseclicked = false);
document.addEventListener('mouseup', () => mouseclicked = false);




console.dir(VIDEO);
//clientWidth 
function scrub(e){
    let time = (e.offsetX / VIDEO.clientWidth);
    VIDEO.currentTime = VIDEO.duration * time;
}

function progress(){
    progressPercent = ((VIDEO.currentTime / VIDEO.duration) * 100);
    FILLED.style['-webkit-flex-basis'] = progressPercent +  "%";    
}

function skip(e){
    console.log(VIDEO.currentTime);
    let skipTime = Math.round(e.target.dataset.skip);

    VIDEO.currentTime += skipTime;
    // progressPercent = ((VIDEO.currentTime / VIDEO.duration) * 100);
    // FILLED.style['-webkit-flex-basis'] = progressPercent +  "%";
    //console.log((VIDEO.currentTime / VIDEO.duration * 100));
}

function playVideo(){
    VIDEO.paused == true? VIDEO.play():VIDEO.pause();
    updateButton()
}

function updateButton(){
    const icon = VIDEO.paused == true? '►' : '❚❚';
    TOGGLE_BUTTON.textContent = icon;
}

function changeSound(e){
      //console.log(e.srcElement.value)
     VIDEO.volume = e.srcElement.value;
}

function changeSpeed(e){
    //console.log(e.srcElement.value)
   VIDEO.playbackRate = e.srcElement.value;
}

