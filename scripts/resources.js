import Random from './utilities/random.js';
import { updateCountDisplay, Data} from './utilities/data.js';

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
    Data.generateWood(Random.range(10, 75));
    updateCountDisplay(listOfResourceElements);

})

mines.addEventListener("click", () => {
    let randomNumber = Random.range(1, 4);
        if(randomNumber === 1) {
            Data.generateGold(50); 
            updateCountDisplay(listOfResourceElements);
        } else {
            Data.generateMetal(25);
            updateCountDisplay(listOfResourceElements);
        }
    }
)