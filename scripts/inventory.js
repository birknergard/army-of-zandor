import { Inventory, updateCountDisplay } from './utilities/data.js';

const woodCounter = document.querySelector('#wood_count');
const metalCounter = document.querySelector('#metal_count');
const goldCounter = document.querySelector('#gold-coin_count');
const listOfResourceElements = [woodCounter, metalCounter, goldCounter];

/* Code goes here ... */

const warriorsGrid = document.querySelector('#warrior-inventory');
const othersGrid = document.querySelector('#other-inventory');

const displayYourWarriors = () => {
    const listOfWarriors = Inventory.fetchWarriorList();
    console.log("Warrior list:" + listOfWarriors)  
    warriorsGrid.innerHTML = "";

    listOfWarriors.forEach(warrior => {
        warriorsGrid.innerHTML +=
       `<div class="warrior"><img class="warrior_image" src=${warrior.image} alt="image of warrior"></div>` 
    });
}

const displayYourAnimals_Machines = () => {
    const listOfOthers = Inventory.fetchListofOther();

    console.log("Others list:" + listOfOthers)  
    othersGrid.innerHTML = "";

    listOfOthers.forEach(other => {
        othersGrid.innerHTML +=
        `<div class="other"><img class="other_image" src=${other.image} alt="image of other"></div>`
    })
}

/*  ... To here */

document.addEventListener("DOMContentLoaded", () => {
    updateCountDisplay(listOfResourceElements);

    displayYourWarriors();
    displayYourAnimals_Machines();
})

