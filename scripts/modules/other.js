import { Units } from '../utilities/data.js'

// This module is for containing the object info for animals and machines, so as to not bloat the other .js files.

const animals= [{
        name: "Elephant",
        priceGold: 400,
        image: '../images/elephant.png'
    },
    {
        name: "Horse",
        priceGold: 200,
        image: '../images/horse.png'
    }
    ];

const machines = [{
        name: "Catapult",
        price: {
            gold: 150,
            metal: 300,
            wood: 400
        },
        image: '../images/catapult.png'
        },
        {
        name: "Cannon",
        price: {
            gold: 200,
            metal: 500,
            wood: 50
        },
        image: '../images/cannon.png'
        }
    ];


const joinedList = [animals, machines];

const Other = {
    uploadToLocalStorage: () => {
        Units.uploadToLocalStorage(joinedList, 'other');
    },

   fetchAnimalsFromLocalStorage: () => {
        const list = Units.fetchListFromLocalStorage('other');
        return list[0];
   },

   fetchMachinesFromLocalStorage: () => {
        const list = Units.fetchListFromLocalStorage('other');
        return list[1];
   }
}

export default Other;