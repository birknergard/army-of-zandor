import { Units } from '../utilities/data.js'

// This module is for containing the object info for warriors, so as to not bloat the other .js files.
const list = [
        {
            categoryName: "lass",
            priceGold: 150,
            image: '../images/warrior-1.jpg'
        },
        {
            categoryName: "giant",
            priceGold: 300,
            image: '../images/warrior-2.jpg'
        },
        {
            categoryName: "mercenary",
            priceGold: 200,
            image: '../images/warrior-3.jpg'
        },
        {
            categoryName: "bandit",
            priceGold: 100,
            image: '../images/warrior-4.jpg'
        },
        {
            categoryName: "viking",
            priceGold: 200,
            image: '../images/warrior-5.jpg'
        },
        {
            categoryName: "berserker",
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