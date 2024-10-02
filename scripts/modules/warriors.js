import { Units } from '../utilities/data.js'

// This module is for containing the object info for warriors, so as to not bloat the other .js files.
const list = [
        {
            categoryName: "Lass",
            priceGold: 150,
            image: '../images/warrior-1.jpg'
        },
        {
            categoryName: "Giant",
            priceGold: 300,
            image: '../images/warrior-2.jpg'
        },
        {
            categoryName: "Mercenary",
            priceGold: 200,
            image: '../images/warrior-3.jpg'
        },
        {
            categoryName: "Bandit",
            priceGold: 100,
            image: '../images/warrior-4.jpg'
        },
        {
            categoryName: "Viking",
            priceGold: 200,
            image: '../images/warrior-5.jpg'
        },
        {
            categoryName: "Berserker",
            priceGold: 350,
            image: '../images/warrior-6.jpg'
        }
]

const Warriors = {
    uploadToLocalStorage: () => {
        Units.uploadToLocalStorage(list, 'warriors')
    },

    fetchFromLocalStorage: () => {
        return Units.fetchListFromLocalStorage('warriors');
    }    
}

export default Warriors;