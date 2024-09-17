import Random from './modules/random.js'

const mines = document.querySelector('#mines-image');
const woods = document.querySelector('#woods-image')



const generateResource = (resource, amount) => {
    if(localStorage.getItem(resource) === null){
        localStorage.setItem(resource, JSON.stringify(0))
        console.log(`${resource} added to localStorage.`)
    }
    
    const old_resourceCount = JSON.parse(localStorage.getItem(resource))
    const new_resourceCount = old_resourceCount + amount

    localStorage.setItem(resource, JSON.stringify(new_resourceCount))
} 

woods.addEventListener("click", () => {
    generateResource('wood', Random.range(20, 75))
})

mines.addEventListener("click", () => {
    let randomNumber = Random.range(1, 4)
    console.log(randomNumber)
        if(randomNumber === 1) {
           generateResource('gold', 25) 
        } else {
            generateResource('metal', 25)
        }
    }
)