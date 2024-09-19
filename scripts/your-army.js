import { Inventory, updateCountDisplay } from './utilities/data.js';

const woodCounter = document.querySelector('#wood_count');
const metalCounter = document.querySelector('#metal_count');
const goldCounter = document.querySelector('#gold-coin_count');
const listOfResourceElements = [woodCounter, metalCounter, goldCounter];

/* Code goes here ... */



/*  ... To here */

document.addEventListener("DOMContentLoaded", () => {
    updateCountDisplay(listOfResourceElements);
})

