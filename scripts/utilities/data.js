export const Units = {
    // Uploads unit list to localstorage.
    uploadToLocalStorage: (list, category) => {
        if(localStorage.getItem(category) === null ){
            localStorage.setItem(category, JSON.stringify(list));
        }
    },

    // Fetches unit list from localstorage as an array.
    fetchListFromLocalStorage: category => {
        if(localStorage.getItem(category) !== null){
            return JSON.parse(localStorage.getItem(category));
        }
    },
}

export const Resource = {
    // Creates resource field in localstorage if it does not exist already.
    initializeResources: () => {
        if(localStorage.getItem('resources') === null){
            localStorage.setItem('resources', JSON.stringify({'gold': 0, 'metal': 0, 'wood': 0}));
        }
    },

    // Returns an array of all the resource-objects. 
    loadResources: () => {
        return JSON.parse(localStorage.getItem('resources'));    
    },

    // Uploads resources back to localstorage.
    uploadResources: (resourceList) => {
        localStorage.setItem('resources', JSON.stringify(resourceList))
    },

    // Generates a specified resource. PS: Does not check for whether resource given is in localstorage.
    generateResource: (amount, resource) => {
        let resourceList = Resource.loadResources();
        resourceList[resource] += amount;
        Resource.uploadResources(resourceList);
    },

    // Same thing as above but subtracts instead.
    subtractResourceFromLocalStorage: (resource, amount) => {
        let resourceList = Resource.loadResources();
        if(amount <= resourceList[resource]){
            resourceList[resource] -= amount;
            Resource.uploadResources(resourceList)
        }        
    },

    // Generates gold in localstorage field.
    generateGold: amount => {
        Resource.generateResource(amount, 'gold');
    },
    // same as above for metal ..
    generateMetal: amount => {
        Resource.generateResource(amount, 'metal');
    },

    // .. and wood. 
    generateWood: amount => {
        Resource.generateResource(amount, 'wood');
    },

    // The following three functions do the same as the three above but subtracts instead.
    subtractGold: amount => {
        Resource.subtractResourceFromLocalStorage('gold', amount);    
    },
    
    subtractMetal: amount => {
        Resource.subtractResourceFromLocalStorage('metal', amount);    
    },

    subtractWood: amount => {
        Resource.subtractResourceFromLocalStorage('wood', amount);    
    }
} 

// Refreshes the list of available resources visible in the header of all the pages.
export const updateCountDisplay = (listOfHTMLElements) =>{
        Resource.initializeResources();
        const listOfResources = Resource.loadResources(); 
        listOfHTMLElements[0].innerHTML = listOfResources.wood; 
        listOfHTMLElements[1].innerHTML = listOfResources.metal;
        listOfHTMLElements[2].innerHTML = listOfResources.gold;
}


export const Inventory = {

    // Adds a unit to users inventory. 
    addToInventory: unit => {
        if(localStorage.getItem('inventory') === null) {
            localStorage.setItem('inventory', JSON.stringify([]))
        }
        const inventory = JSON.parse(localStorage.getItem('inventory'));
        inventory.push(unit);
        localStorage.setItem('inventory', JSON.stringify(inventory)); 
    },

    // Fetches the users inventory.
    fetchInventory : () => {
        if(localStorage.getItem('inventory') !== null) {
            return JSON.parse(localStorage.getItem('inventory'));
        }
    },

    // Fetches the warriors in said inventory.
    fetchWarriorList: () => {
        const unfilteredInventory = Inventory.fetchInventory();  
        const yourWarriors = unfilteredInventory.filter(item => item.image.includes("./images/warrior-"));
        return yourWarriors;
    },

    // Fetches animals and machines.
    fetchListofOther: () => {
        const unfilteredInventory = Inventory.fetchInventory();
        const listOfOthers = unfilteredInventory.filter(item => !item.image.includes("./images/warrior-"));
        return listOfOthers;
    }
}