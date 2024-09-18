export const Data = {
    uploadToLocalStorage: (list, category) => {
        if(localStorage.getItem(category) === null ){
            localStorage.setItem(category, JSON.stringify(list));
        }
    },

    fetchListFromLocalStorage: category => {
        if(localStorage.getItem(category) !== null){
            return JSON.parse(localStorage.getItem(category));
        }
    }
} 

export const generateResource = (resource, amount) => {
    if(localStorage.getItem(resource) === null){
        localStorage.setItem(resource, JSON.stringify(0));
        console.log(`${resource} added to localStorage.`);
    }
    
    const old_resourceCount = JSON.parse(localStorage.getItem(resource));
    const new_resourceCount = old_resourceCount + amount;

    localStorage.setItem(resource, JSON.stringify(new_resourceCount));
}

export const subtractResource = (resource, amount) => {
    if(localStorage.getItem(resource) === null) {
        localStorage.setItem(resource, JSON.stringify(0));
    }

    const old_resourceCount = JSON.parse(localStorage.getItem(resource));
    const new_resourceCount = old_resourceCount - amount;
    
    if(new_resourceCount < 0) { console.log("Too few resources to subtract.") 
        return false; 
    } else {
        localStorage.setItem(resource, JSON.stringify(new_resourceCount));
        return true;
    }
}

export const updateCountDisplay = (listOfHTMLElements) =>{
    listOfHTMLElements[0].innerHTML = localStorage.getItem('wood');
    listOfHTMLElements[1].innerHTML = localStorage.getItem('metal');
    listOfHTMLElements[2].innerHTML = localStorage.getItem('gold');
}

export const Inventory = {
    addToInventory: (object) => {
        if(localStorage.getItem('inventory') === null) {
            localStorage.setItem('inventory', JSON.stringify([]))
        }
        const inventory = JSON.parse(localStorage.getItem('inventory'));
        inventory.push(object);
        localStorage.setItem('inventory', JSON.stringify(inventory)) 
    },

    fetchWarriorList: () => {
        
        return [];
    }
}