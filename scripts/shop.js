import Warriors from "./modules/warriors.js";
import Other from './modules/other.js'
import { updateCountDisplay, Resource, Inventory } from "./utilities/data.js";
import { subtractOrAddResourceAnimation, lackingResourcesAnimation } from "./utilities/dynamics.js";

const woodCounter = document.querySelector('#wood_count')
const metalCounter = document.querySelector('#metal_count')
const goldCounter = document.querySelector('#gold-coin_count')
const listOfResourceElements = [woodCounter, metalCounter, goldCounter]

const warriorsGrid = document.querySelector('.shop__grid--warriors');
const animalsGrid = document.querySelector('.shop__grid--animals')
const machinesGrid = document.querySelector('.shop__grid--machines')

const buyWarrior = warrior => {
    const gold = Resource.loadResources().gold;
    if(gold >= warrior.priceGold){
        Resource.subtractGold(warrior.priceGold)
        Inventory.addToInventory(warrior);
        updateCountDisplay(listOfResourceElements)
        return true;
    } else {
        return false;
    }
}

const displayWarriors = (listOfWarriors) => {
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
        document.getElementById(`buy-${warrior.categoryName}`).addEventListener('click', (event) => {
            if(buyWarrior(warrior)){
                subtractOrAddResourceAnimation(event, ["./images/gold-coin.png"], true, warrior.priceGold)
            } else {
                lackingResourcesAnimation(event);
            }
        })
    })
}

const buyAnimal = animal => {
    const gold = Resource.loadResources().gold;
    if(gold >= animal.priceGold){
        Resource.subtractGold(animal.priceGold);
        Inventory.addToInventory(animal);
        updateCountDisplay(listOfResourceElements);
        return true;
    } else {
        return false;
    }
} 
    
const buyMachine = machine => {

    const resources = Resource.loadResources();

    // I am aware this IIFE is unnecessary, it's used here to show that i know how the tool works
    const canBuy = (() => {
        if(resources.gold >= machine.price.gold && resources.metal >= machine.price.metal && resources.wood >= machine.price.wood) { 
            return true; 
        }                
    })()

    if(canBuy){
        Resource.subtractGold(machine.price.gold);
        Resource.subtractMetal(machine.price.metal);
        Resource.subtractWood(machine.price.wood);
            
        Inventory.addToInventory(machine);
            
        updateCountDisplay(listOfResourceElements);
    } 
    return canBuy;
}
const displayAnimals = (listOfAnimals) => {
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
        document.getElementById(`buy-${animal.name}`).addEventListener("click", (event) => {
            if(buyAnimal(animal)){
                subtractOrAddResourceAnimation(event, ["./images/gold-coin.png"], true, animal.priceGold)
            } else {
                lackingResourcesAnimation(event);
            }
        })
    })
}
const displayMachines = (listOfMachines) => {
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
    
    const listOfIconPaths = ["./images/wood.png", "./images/metal.png", "/images/gold-coin.png"];

    listOfMachines.forEach(machine => {
        document.getElementById(`buy-${machine.name}`).addEventListener("click", (event) => { 
            const listOfPrices = [machine.price.gold, machine.price.metal, machine.price.wood];
            if(buyMachine(machine)){
                subtractOrAddResourceAnimation(event, listOfIconPaths, true, listOfPrices);
            } else {
                lackingResourcesAnimation(event);
            } 
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    updateCountDisplay(listOfResourceElements);

    Warriors.uploadToLocalStorage();
    displayWarriors(Warriors.fetchFromLocalStorage());

    Other.uploadToLocalStorage();
    displayAnimals(Other.fetchAnimalsFromLocalStorage());
    displayMachines(Other.fetchMachinesFromLocalStorage());
})  