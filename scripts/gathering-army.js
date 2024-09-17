import { Warriors } from "./modules/warriors.js";

const warriorsGrid = document.querySelector('.warriors_grid');

const displayWarriors = () => {
    const listOfWarriors = Warriors.fetchListFromLocalStorage();

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

document.addEventListener("DOMContentLoaded", () => {
    Warriors.uploadToLocalStorage();
    displayWarriors();
})  