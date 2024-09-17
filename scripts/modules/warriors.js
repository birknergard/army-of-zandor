export const Warriors = {
    list: [
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
    ],

    uploadToLocalStorage: () => {
        if(localStorage.getItem('warriors') === null){
            localStorage.setItem('warriors', JSON.stringify(Warriors.list))
        }
    },

    fetchListFromLocalStorage: () => {
        if(localStorage.getItem('warriors') !== null) {
            return JSON.parse(localStorage.getItem('warriors'))
        }
    }    
}
