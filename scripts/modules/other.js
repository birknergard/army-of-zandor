import { Data } from '../utilities/data.js'

export const Other = {
    animals: [{
        name: "War-elephant",
        priceGold: 400,
        image: '../images/elephant.png'
    },
    {
        name: "Horse",
        priceGold: 200,
        image: '../images/elephant.png'
    }
    ],

    machines: [{
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
    ],

    joinedList: () => {[this.animals, this.machines]},
    
    uploadToLocalStorage: () => {
        Data.uploadToLocalStorage(joinedList, 'other');
    },

   fetchFromLocalStorage: () => {
        const list = Data.fetchListFromLocalStorage('other');
   }

}