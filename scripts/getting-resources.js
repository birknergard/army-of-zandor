import Random from './utilities/random.js';
import { updateCountDisplay, generateResource } from './utilities/data.js';

const woodCounter = document.querySelector('#wood_count');
const metalCounter = document.querySelector('#metal_count');
const goldCounter = document.querySelector('#gold-coin_count');
const listOfResourceElements = [woodCounter, metalCounter, goldCounter]

const mines = document.querySelector('#mines-image');
const woods = document.querySelector('#woods-image');

// On pageload
document.addEventListener('DOMContentLoaded', () => {
    updateCountDisplay(listOfResourceElements);
})

woods.addEventListener("click", () => {
    generateResource('wood', Random.range(20, 75));
    updateCountDisplay(listOfResourceElements);

})

mines.addEventListener("click", () => {
    let randomNumber = Random.range(1, 4);
    console.log(randomNumber);
        if(randomNumber === 1) {
            generateResource('gold', 25); 
            updateCountDisplay(listOfResourceElements);
        } else {
            generateResource('metal', 25);
            updateCountDisplay(listOfResourceElements);
        }
    }
)