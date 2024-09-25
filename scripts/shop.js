import Warriors from "./modules/warriors.js";
import Other from './modules/other.js'
import { updateCountDisplay, Data, Inventory } from "./utilities/data.js";

const woodCounter = document.querySelector('#wood_count')
const metalCounter = document.querySelector('#metal_count')
const goldCounter = document.querySelector('#gold-coin_count')
const listOfResourceElements = [woodCounter, metalCounter, goldCounter]

const warriorsGrid = document.querySelector('.shop__grid--warriors');
const animalsGrid = document.querySelector('.shop__grid--animals')
const machinesGrid = document.querySelector('.shop__grid--machines')

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
            <figure class="shop__grid__item--warrior shop__grid__item">
                <img class="shop__grid__item__image--warrior" src="${warrior.image}" alt="image of warrior"> 
                <h2 class="shop__grid__item__title">${warrior.categoryName}</h2>
                <button class="item__button" id="buy-${warrior.categoryName}">
                    <div class="item__button__price">
                        <p class="button__price__text">${warrior.priceGold}</p>
                        <img class="button__price__icon" id="gold-coin_icon" src="images/gold-coin.png" alt="gold icon">
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
        <figure class="shop__grid__item--animal shop__grid__item">
            <img class="shop__grid__item__image" src=${animal.image} alt="image of animal">
            <h2 class="shop__grid__item__title">${animal.name}</h2>
            <button class="item__button" id="buy-${animal.name}">
                <div class="item__button__price">
                    <p class="button__price__text">${animal.priceGold}</p>
                    <img class="button__price__icon" src="images/gold-coin.png">
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
        <figure class="shop__grid__item--machine shop__grid__item">
            <img class="shop__grid__item__image" src=${machine.image} alt="image of machine">
            <h2 class="shop__grid__item__title">${machine.name}</h2>
            <button class="item__button" id="buy-${machine.name}">
                <div class="item__button__price">
                    <p class="button__price__text button__price__text--metal">${machine.price.metal}</p>
                    <img class="button__price__icon button__price__icon--metal" src="images/metal.png">

                    <p class="button__price__text button__price__text--gold">${machine.price.gold}</p>
                    <img class="button__price__icon button__price__icon--gold" src="images/gold-coin.png">
                    
                    <p class="button__price__text button__price__text--wood">${machine.price.wood}</p>
                    <img class="button__price__icon button__price__icon--wood" src="images/wood.png">
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