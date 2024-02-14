

// import { diceAnimation } from './lib/animation/dice.js';
import { diceAnimation, getNodes } from './lib/index.js';

const [rollingbutton, recordButton, resetButton ] = getNodes('buttonGroup > button');

let isClicked = false;

function handleRollingDice(){

    if(!isClicked){
    stopAnimation = setInterval(diceAnimation, 100);
    }else{
        clearInterval(stopAnimation);
    } 
    isClicked = !isClicked;
}

rollingbutton.addEventListener('click',handleRollingDice);