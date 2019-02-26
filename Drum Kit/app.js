const drum = document.getElementById('drum');
const ul = document.createElement('ul');

const drumKeys = [
    {
        name: 'a',
        sound: 'clap',
        key: "KeyA"
    },
    {
        name: 's',
        sound: 'hihat',
        key: "KeyS"
    },
    {
        name: 'd',
        sound: 'kick',
        key: 68
    },
    {
        name: 'f',
        sound: 'openhat',
        key: 70
    },
    {
        name: 'g',
        sound: 'boom',
        key: 71
    },
    {
        name: 'h',
        sound: 'ride',
        key: 72
    },
    {
        name: 'j',
        sound: 'snare',
        key: 74
    },
    {
        name: 'k',
        sound: 'tom',
        key: 75
    },
    {
        name: 'l',
        sound: function(){
            console.log(this.key);
        },
        key: 76
    },
]

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


