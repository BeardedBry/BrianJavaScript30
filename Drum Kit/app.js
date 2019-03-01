const drum = document.getElementById('drum');
const ul = document.createElement('ul');

const drumKeys = [
    {
        name: ['a','kick'],
        sound: hit,
        file: 'sounds/NW_Kick 1.wav',
    },
    {
        name: ['s','hi-hat'],
        sound: hit,
        file: 'sounds/NW_Hat 4.wav',
    },
    {
        name: ['d','open hat'],
        sound: hit,
        file: 'sounds/NW_Hat Open.wav',
    },
    {
        name: ['f','cymbal'],
        sound: hit,
        file: 'sounds/NW_Cymbal 1.wav',
    },
    {
        name: ['g','snare'],
        sound: hit,
        file: 'sounds/NW_Snare 6.wav',
    },
]

function hit(){
    let h = document.querySelector(`.${this.name[0]}`);

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
        li.innerText = drumKey.name[0] + "\n" + drumKey.name[1];
        li.classList.add(drumKey.name[0]);
        ul.appendChild(li);
    })


    window.onkeydown = log;

    function log(e){
        drumKeys.filter((drumKey) => {
            if(e.key == drumKey.name[0]){
                drumKey.sound();
            }
        })
    }
}

init(); 

// window.addEventListener('keydown', (e) => {
//         console.log(e.code);
// })


