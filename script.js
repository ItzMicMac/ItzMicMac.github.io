let percent = 0;
let decayIntervalMilliseconds = 100;
let keyChangeIntervalMilliseconds = 10000;
let currentKey = '';
let activeKeys = [];
let running = false;
const ARROW_RIGHT = '→';
const ARROW_LEFT = '←';
const ARROW_UP = '↑';
const ARROW_DOWN = '↓';




function waitForStart(){
    document.body.innerHTML = `<h1 id="startLabel">Press 'e' to start</h1>`
    document.addEventListener('keydown', function(event) {
        if (!running && event.key === 'e'){
            running = true;
            setBarDecayTimer();
            setKeyChangeTimer();
        }

        if (event.key === currentKey) {
            percent += .2;
            document.getElementById('inbar').style.width = percent + '%';
            if(currentKey === activeKeys[0]){
                currentKey = activeKeys[1];
            }else{
                currentKey = activeKeys[0];
            }
            document.getElementById('keyLabel').innerHTML = 'press ' + getCurrentKey(currentKey) + ' to fill the bar';
        }
    });
}

function setBarDecayTimer(){
    document.body.innerHTML = `<div id="progressbar"><div id="inbar"></div></div>`
    document.getElementById('inbar').style.width = percent + '%';
    setInterval(() => {
        if(percent <= 0){
            return;
        }
        percent -= .05;
        document.getElementById('inbar').style.width = percent + '%';
    }, decayIntervalMilliseconds);
}

function setKeyChangeTimer(){
    document.body.innerHTML += `<h1 id="keyLabel">press ${getCurrentKey(currentKey)} to fill the bar</h1>`
    setRandomKey();
    
    setInterval(() => {
        setRandomKey();
    }, keyChangeIntervalMilliseconds);

    
}

function setRandomKey(){
    let keys = ['w','a','s','d', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    activeKeys = [];
    let key1 = Math.floor(Math.random() * keys.length);
    let key2 = Math.floor(Math.random() * keys.length);
    while(key1 === key2){
        key2 = Math.floor(Math.random() * keys.length);
    }
    activeKeys.push(keys[key1]);
    activeKeys.push(keys[key2]);

    currentKey = activeKeys[0];

    document.getElementById('keyLabel').innerHTML = 'press ' + getCurrentKey(currentKey) + ' to fill the bar';
}

function getCurrentKey(key){
    switch(key){
        case 'ArrowLeft':
            return ARROW_LEFT;
        case 'ArrowRight':
            return ARROW_RIGHT;
        case 'ArrowUp':
            return ARROW_UP;
        case 'ArrowDown':
            return ARROW_DOWN;
        default:
            return key;
    }
}