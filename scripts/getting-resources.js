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
    generateResource('wood', 25)
})