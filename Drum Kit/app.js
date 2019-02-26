const drum = document.getElementById('drum');
const ul = document.createElement('ul');

const drumKeys = [
    {
        name: 'a',
        sound: 'clap',
        key: 65
    },
    {
        name: 's',
        sound: 'hihat',
        key: 83
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
        sound: 'tink',
        key: 76
    },
]

function init(){

    const list = [];
    
    drumKeys.forEach((drumKey) => {
        let li = document.createElement('li');
        li.innerText = drumKey.name;
        list.push(li);
    })
    console.log(list);

    list.forEach((listItem) =>{
        ul.appendChild(listItem);
    })
    drum.appendChild(ul);
}

init();