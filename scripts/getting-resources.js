import Random from './utilities/random'

const mines = document.querySelector('#mines-image');
const woods = document.querySelector('#woods-image')

const woodCounter = document.querySelector('#wood_count')
const metalCounter = document.querySelector('#metal_count')
const goldCounter = document.querySelector('#gold-coin_count')

const generateResource = (resource, amount) => {
    if(localStorage.getItem(resource) === null){
        localStorage.setItem(resource, JSON.stringify(0))
        console.log(`${resource} added to localStorage.`)
    }
    
    const old_resourceCount = JSON.parse(localStorage.getItem(resource))
    const new_resourceCount = old_resourceCount + amount

    localStorage.setItem(resource, JSON.stringify(new_resourceCount))
} 
const updateCountDisplay = field =>{
    switch(field){
        case 'wood': woodCounter.innerHTML = localStorage.getItem('wood')
        case 'metal': metalCounter.innerHTML = localStorage.getItem('metal')
        case 'gold': goldCounter.innerHTML = localStorage.getItem('gold')
    }
}
// On pageload
document.addEventListener('DOMContentLoaded', () => {
    updateCountDisplay('wood')
    updateCountDisplay('gold')
    updateCountDisplay('metal')

})

woods.addEventListener("click", () => {
    generateResource('wood', Random.range(20, 75))
    updateCountDisplay('wood')
})
mines.addEventListener("click", () => {
    let randomNumber = Random.range(1, 4)
    console.log(randomNumber)
        if(randomNumber === 1) {
           generateResource('gold', 25) 
           updateCountDisplay('gold')
        } else {
            generateResource('metal', 25)
            updateCountDisplay('metal')
        }
    }
)