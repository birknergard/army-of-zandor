import Random from './utilities/random.js';
import { updateCountDisplay, Resource} from './utilities/data.js';
import { purchaseAnimation } from "./utilities/dynamics.js";

const woodCounter = document.querySelector('#wood_count');
const metalCounter = document.querySelector('#metal_count');
const goldCounter = document.querySelector('#gold-coin_count');
const listOfResourceElements = [woodCounter, metalCounter, goldCounter]

const mines = document.querySelector('#mines-image');
const woods = document.querySelector('#woods-image');

// On pageload
document.addEventListener('DOMContentLoaded', (event) => {
    updateCountDisplay(listOfResourceElements);
})

woods.addEventListener("click", (event) => {
    Resource.generateWood(Random.range(10, 75));
    purchaseAnimation(event, ["./images/wood.png"], false)
    updateCountDisplay(listOfResourceElements);

})

mines.addEventListener("click", (event) => {
    let randomNumber = Random.range(1, 4);
        if(randomNumber === 1) {
            Resource.generateGold(52020); 
            updateCountDisplay(listOfResourceElements); 
            purchaseAnimation(event, ["./images/gold-coin.png"], false)

        } else {
            Resource.generateMetal(25);
            updateCountDisplay(listOfResourceElements);
            purchaseAnimation(event, ["./images/metal.png"], false)
        }
    }
)