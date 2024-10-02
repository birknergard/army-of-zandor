import Random from './utilities/random.js';
import { updateCountDisplay, Resource} from './utilities/data.js';
import { subtractOrAddResourceAnimation } from "./utilities/animation.js";

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

woods.addEventListener("click", (event) => {
    let randomWoodAmount = Random.range(10, 75)
    Resource.generateWood(randomWoodAmount);
    subtractOrAddResourceAnimation(event, ["./images/wood.png"], false, randomWoodAmount)
    updateCountDisplay(listOfResourceElements);

})

mines.addEventListener("click", (event) => {
    let randomNumber = Random.range(1, 4);
        if(randomNumber === 1) {
            Resource.generateGold(50); 
            updateCountDisplay(listOfResourceElements); 
            subtractOrAddResourceAnimation(event, ["./images/gold-coin.png"], false, 50)

        } else {
            Resource.generateMetal(25);
            updateCountDisplay(listOfResourceElements);
            subtractOrAddResourceAnimation(event, ["./images/metal.png"], false, 25)
        }
    }
)