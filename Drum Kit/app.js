const drum = document.getElementById('drum');
const ul = document.createElement('ul');

const drumKeys = [
    {
        name: 'a',
        sound: hit,
        file: 'sounds/NW_Kick 1.wav',
    },
    {
        name: 's',
        sound: hit,
        file: 'sounds/NW_Hat 4.wav',
    },
    {
        name: 'd',
        sound: hit,
        file: 'sounds/NW_Hat Open.wav',
    },
    {
        name: 'f',
        sound: hit,
        file: 'sounds/NW_Cymbal 1.wav',
    },
    {
        name: 'g',
        sound: hit,
        file: 'sounds/NW_Snare 6.wav',
    },
    {
        name: 'h',
        sound: hit,
    },
    {
        name: 'j',
        sound: hit,
    },
    {
        name: 'k',
        sound: hit,
    },
    {
        name: 'l',
        sound: hit,
    },
]

function hit(){
    console.log(this.name);
    let h = document.querySelector(`.${this.name}`);

    // Animation
    h.classList.add('blink');
    setTimeout(()=>{
        h.classList.remove('blink');
    },100)

    let sound = new Audio(this.file)
    sound.play();
}

function init(){

    drum.appendChild(ul);
    drumKeys.forEach((drumKey) => {
        let li = document.createElement('li');
        li.innerText = drumKey.name;
        li.classList.add(drumKey.name);
        ul.appendChild(li);
    })


    window.onkeydown = log;

    function log(e){
        drumKeys.filter((drumKey) => {
            if(e.key == drumKey.name){
                drumKey.sound();
            }
        })
    }
}

init(); 

// window.addEventListener('keydown', (e) => {
//         console.log(e.code);
// })


