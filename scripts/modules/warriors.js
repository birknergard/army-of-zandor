import { Unit } from '../utilities/data.js'
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
        Unit.uploadToLocalStorage(list, 'warriors')
    },

    fetchFromLocalStorage: () => {
        return Unit.fetchListFromLocalStorage('warriors');
    }    
}

export default Warriors;