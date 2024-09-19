import Warriors from "./modules/warriors.js";
import Other from './modules/other.js'
import { updateCountDisplay, subtractResource, Inventory } from "./utilities/data.js";

const woodCounter = document.querySelector('#wood_count')
const metalCounter = document.querySelector('#metal_count')
const goldCounter = document.querySelector('#gold-coin_count')
const listOfResourceElements = [woodCounter, metalCounter, goldCounter]

const warriorsGrid = document.querySelector('.warriors_grid');
const animalsGrid = document.querySelector('.animals_grid')
const machinesGrid = document.querySelector('.machines_grid')

const buyWarrior = warrior => {
    const gold = JSON.parse(localStorage.getItem('gold'));
    if(gold >= warrior.priceGold){
        subtractResource('gold', warrior.priceGold)
        Inventory.addToInventory(warrior);
        updateCountDisplay(listOfResourceElements)
    }
}

const displayWarriors = () => {
    const listOfWarriors = Warriors.fetchFromLocalStorage();

    warriorsGrid.innerHTML = "";
    listOfWarriors.forEach(warrior => {
        warriorsGrid.innerHTML += `
            <figure class="warrior_item shop-item">
                <h2 class="warrior_name">${warrior.categoryName}</h2>  
                <img class="warrior_image" src="${warrior.image}" alt="image of warrior"> 
                <button id="buy-${warrior.categoryName}">
                    <div class="icon_container">
                        <p class="resource_count_text">${warrior.priceGold}</p>
                        <img id="gold-coin_icon" class="resource_icon" src="images/gold-coin.png" alt="gold icon">
                    </div>
                </button>
            </figure>
        `;
    });

    listOfWarriors.forEach(warrior => {
        document.getElementById(`buy-${warrior.categoryName}`).addEventListener('click', () => buyWarrior(warrior));
    });
    
}

// #TODO Buy animal/machine/other function here
const buyAnimal = animal => {
    const gold = JSON.parse(localStorage.getItem('gold'));
    if(gold >= animal.priceGold){
        subtractResource('gold', animal.priceGold);
        Inventory.addToInventory(animal);
        updateCountDisplay(listOfResourceElements);
    }
} 
    
const buyMachine = machine => {
    const resources = {
        gold: JSON.parse(localStorage.getItem('gold')) >= machine.price.gold,
        metal: JSON.parse(localStorage.getItem('metal')) >= machine.price.metal,
        wood: JSON.parse(localStorage.getItem('wood')) >= machine.price.wood,

        compareCostToResources: () => {
            if(resources.gold && resources.metal && resources.wood) {
                return true; 
            } else {
                console.log("Not enough resources for purchase.")
                return false;    
            }
        }
    }

    if(resources.compareCostToResources()){
        subtractResource('gold', machine.price.gold); 
        subtractResource('metal', machine.price.metal);
        subtractResource('wood', machine.price.metal);

        Inventory.addToInventory(machine);
        updateCountDisplay(listOfResourceElements);
    }
}
const displayOther = () => {
    const listOfAnimals = Other.fetchAnimalsFromLocalStorage();
    animalsGrid.innerHTML += ""; 
    listOfAnimals.forEach(animal => {
        animalsGrid.innerHTML += `
        <figure class="animal_item shop-item">
            <h2>${animal.name}</h2>
            <img class="animal_image" src=${animal.image} alt="image of animal">
            <button id="buy-${animal.name}">
                <div class="icon_container">
                    <p class="resource_count_text">${animal.priceGold}</p>
                    <img class="resource_icon" src="images/gold-coin.png">
                </div>
            </button>
        </figure>
        ` 
    })

    listOfAnimals.forEach(animal => {
        document.getElementById(`buy-${animal.name}`).addEventListener("click", () => {buyAnimal(animal)})
    })

    const listOfMachines = Other.fetchMachinesFromLocalStorage();
    machinesGrid.innerHTML += "";
    listOfMachines.forEach(machine => {
        machinesGrid.innerHTML += `
        <figure class="machine_item shop-item">
            <h2>${machine.name}</h2>
            <img class="machine_image" src=${machine.image} alt="image of machine">
            <button id="buy-${machine.name}">
                <div class="icon_container">
                    <p class="resource_count_text">${machine.price.metal}</p>
                    <img class="resource_icon" src="images/metal.png">

                    <p class="resource_count_text">${machine.price.gold}</p>
                    <img class="resource_icon" src="images/gold-coin.png">
                    
                    <p class="resource_count_text">${machine.price.wood}</p>
                    <img class="resource_icon" src="images/wood.png">
                </div>
            </button>
        </figure>
        `        
    })

    listOfMachines.forEach(machine => {
        document.getElementById(`buy-${machine.name}`).addEventListener("click", () => { buyMachine(machine) })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    updateCountDisplay(listOfResourceElements);

    Warriors.uploadToLocalStorage();
    displayWarriors();

    Other.uploadToLocalStorage();
    displayOther();
})  