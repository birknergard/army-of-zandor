import Random from './utilities/random.js';
import { updateCountDisplay, generateResource } from './utilities/data.js';

const mines = document.querySelector('#mines-image');
const woods = document.querySelector('#woods-image')

const woodCounter = document.querySelector('#wood_count')
const metalCounter = document.querySelector('#metal_count')
const goldCounter = document.querySelector('#gold-coin_count')

 

// On pageload
document.addEventListener('DOMContentLoaded', () => {
    updateCountDisplay('wood', woodCounter)
    updateCountDisplay('gold', metalCounter)
    updateCountDisplay('metal', goldCounter)

})

woods.addEventListener("click", () => {
    generateResource('wood', Random.range(20, 75))
    updateCountDisplay('wood', woodCounter)
})
mines.addEventListener("click", () => {
    let randomNumber = Random.range(1, 4)
    console.log(randomNumber)
        if(randomNumber === 1) {
           generateResource('gold', 25) 
           updateCountDisplay('gold', goldCounter)
        } else {
            generateResource('metal', 25)
            updateCountDisplay('metal', goldCounter)
        }
    }
)