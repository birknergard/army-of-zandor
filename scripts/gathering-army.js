import Warriors from "./modules/warriors.js";
import Other from './modules/other.js'
import { updateCountDisplay, Data, Inventory } from "./utilities/data.js";

const woodCounter = document.querySelector('#wood_count')
const metalCounter = document.querySelector('#metal_count')
const goldCounter = document.querySelector('#gold-coin_count')
const listOfResourceElements = [woodCounter, metalCounter, goldCounter]

const warriorsGrid = document.querySelector('.warriors_grid');
const animalsGrid = document.querySelector('.animals_grid')
const machinesGrid = document.querySelector('.machines_grid')

const buyWarrior = warrior => {
    const gold = Data.loadResources().gold;
    if(gold >= warrior.priceGold){
        Data.subtractGold(warrior.priceGold)
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
                <img class="warrior_image" src="${warrior.image}" alt="image of warrior"> 
                <h2>${warrior.categoryName}</h2>
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

const buyAnimal = animal => {
    const gold = Data.loadResources().gold;
    if(gold >= animal.priceGold){
        Data.subtractGold(animal.priceGold);
        Inventory.addToInventory(animal);
        updateCountDisplay(listOfResourceElements);
    }
} 
    
const buyMachine = machine => {
    const resources = Data.loadResources();

    const canBuy = (() => {
        if(resources.gold >= machine.price.gold && resources.metal >= machine.price.metal && resources.wood >= machine.price.wood) { 
            console.log("BuyMachine: enough for purchase.")
            return true; 
        } else {                
            console.log("Not enough resources for purchase.")
            return false;    
        }
    })()

    if(canBuy){
        Data.subtractGold(machine.price.gold);
        Data.subtractMetal(machine.price.metal);
        Data.subtractWood(machine.price.wood);
            
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
            <img class="animal_image" src=${animal.image} alt="image of animal">
            <h2>${animal.name}</h2>
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
            <img class="machine_image" src=${machine.image} alt="image of machine">
            <h2>${machine.name}</h2>
            <button id="buy-${machine.name}">
                <div class="icon_container">
                    <p class="metal_text resource_count_text">${machine.price.metal}</p>
                    <img class="metal_icon resource_icon" src="images/metal.png">

                    <p class="gold_text resource_count_text">${machine.price.gold}</p>
                    <img class="gold_icon resource_icon" src="images/gold-coin.png">
                    
                    <p class="wood_text resource_count_text">${machine.price.wood}</p>
                    <img class="wood_icon resource_icon" src="images/wood.png">
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