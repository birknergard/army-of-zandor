export const Data = {
    uploadToLocalStorage: (list, category) => {
        if(localStorage.getItem(category) === null ){
            localStorage.setItem(category, JSON.stringify(list))
        }
    },

    fetchListFromLocalStorage: category => {
        if(localStorage.getItem(category) !== null){
            return JSON.parse(localStorage.getItem(category))
        }
    }
} 

export const generateResource = (resource, amount) => {
    if(localStorage.getItem(resource) === null){
        localStorage.setItem(resource, JSON.stringify(0))
        console.log(`${resource} added to localStorage.`)
    }
    
    const old_resourceCount = JSON.parse(localStorage.getItem(resource))
    const new_resourceCount = old_resourceCount + amount

    localStorage.setItem(resource, JSON.stringify(new_resourceCount))
}

export const subtractResource = (resource, amount) => {
    if(localStorage.getItem(resource) === null) {
        localStorage.setItem(resource, JSON.stringify(0))
    }

    const old_resourceCount = JSON.parse(localStorage.getItem(resource))
    const new_resourceCount = old_resourceCount - amount;
    
    if(new_resourceCount < 0) { console.log("Too few resources to subtract."); 
        return false; 
    } else {
        localStorage.setItem(resource, JSON.stringify(new_resourceCount));
        return true;
    }
}

export const updateCountDisplay = (field, element) =>{
    switch(field){
        case 'wood': element.innerHTML = localStorage.getItem('wood')
        case 'metal': element.innerHTML = localStorage.getItem('metal')
        case 'gold': element.innerHTML = localStorage.getItem('gold')
    }
}