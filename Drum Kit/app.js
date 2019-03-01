const drum = document.getElementById('drum');
const ul = document.createElement('ul');


const drumKeys = [
    {
        name: 'a',
        sound: hit,
        source: 'kick',
    },
    {
        name: 's',
        sound: hit,
    },
    {
        name: 'd',
        sound: hit,
    },
    {
        name: 'f',
        sound: hit,
    },
    {
        name: 'g',
        sound: hit,
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

    const audioKick = new Audio('sounds/NW_Kick 1.wav')
    const audioCtx = new window.AudioContext();
    const kick = audioCtx.createMediaElementSource(audioKick);
    kick.connect(audioCtx.destination);
    kick.play();

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


