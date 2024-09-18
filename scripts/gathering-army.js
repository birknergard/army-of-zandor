import Warriors from "./modules/warriors.js";
import Other from './modules/other.js'
import { updateCountDisplay } from "./utilities/resource-display.js";

const warriorsGrid = document.querySelector('.warriors_grid');
const animalsGrid = document.querySelector('.animals_grid')
const machinesGrid = document.querySelector('.machines_grid')

const displayWarriors = () => {
    const listOfWarriors = Warriors.fetchFromLocalStorage();

    warriorsGrid.innerHTML = "";

    listOfWarriors.forEach(warrior => {
        warriorsGrid.innerHTML += `
            <figure class="warrior_item">
                <h2 class="warrior_name">${warrior.categoryName}</h2>  
                <img class="warrior_image" src=${warrior.image} alt="image of warrior"> 
                <button>
                    <div class="icon_container">
                        <p class="resource_count_text">${warrior.priceGold}</p>
                        <img id="gold-coin_icon" class="resource_icon" src="images/gold-coin.png" alt="gold icon">
                    </div>
                </button>
            </figure>
        `
    });
}

const displayOther = () => {
    const listOfAnimals = Other.fetchAnimalsFromLocalStorage();
    animalsGrid.innerHTML += ""; 
    listOfAnimals.forEach(animal => {
        animalsGrid.innerHTML += `
        <figure class="animal_item">
            <h2>${animal.name}</h2>
            <img class="animal_image" src=${animal.image} alt="image of animal">
            <button>
                <div class="icon_container">
                    <p class="resource_count_text">${animal.priceGold}</p>
                    <img class="resource_icon" src="images/gold-coin.png">
                </div>
            </button>
        </figure>
        ` 
    })

    const listOfMachines = Other.fetchMachinesFromLocalStorage();
    machinesGrid.innerHTML += "";
    listOfMachines.forEach(machine => {
        machinesGrid.innerHTML += `
        <figure class="machine_item">
            <h2>${machine.name}</h2>
            <img class="machine_image" src=${machine.image} alt="image of machine">
            <button>
                <div class="icon_container">
                    <p class="resource_count_text">${machine.price.gold}</p>
                    <img class="resource_icon" src="images/gold-coin.png">
                    <p class="resource_count_text">${machine.price.metal}</p>
                    <img class="resource_icon" src="images/metal.png">
                    <p class="resource_count_text">${machine.price.wood}</p>
                    <img class="resource_icon" src="images/wood.png">
                </div>
            </button>
        </figure>
        `        
    })
}

document.addEventListener("DOMContentLoaded", () => {
    updateCountDisplay('wood');
    updateCountDisplay('metal')
    updateCountDisplay('gold')


    Warriors.uploadToLocalStorage();
    displayWarriors();

    Other.uploadToLocalStorage();
    displayOther()
})  