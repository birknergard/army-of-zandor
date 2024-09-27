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
    },

    initializeResources: () => {
        if(localStorage.getItem('resources') === null){
            localStorage.setItem('resources', JSON.stringify({'gold': 0, 'metal': 0, 'wood': 0}));
        }
    },

    loadResources: () => {
        return JSON.parse(localStorage.getItem('resources'));    
    },

    generateResource: (amount, resource) => {
        let resourceList = Data.loadResources();
        resourceList[resource] += amount;
        localStorage.setItem('resources', JSON.stringify(resourceList));
    },

    generateGold: amount => {
        Data.generateResource(amount, 'gold');
    },
    
    generateMetal: amount => {
        Data.generateResource(amount, 'metal');
    },
    
    generateWood: amount => {
        Data.generateResource(amount, 'wood');
    },

    subtractResourceFromLocalStorage: (resource, amount) => {
        let resourceList = Data.loadResources();
        if(amount <= resourceList[resource]){
            resourceList[resource] -= amount;
            localStorage.setItem('resources', JSON.stringify(resourceList))
        }        
    },

    subtractGold: amount => {
        Data.subtractResourceFromLocalStorage('gold', amount);    
    },
    
    subtractMetal: amount => {
        Data.subtractResourceFromLocalStorage('metal', amount);    
    },

    subtractWood: amount => {
        Data.subtractResourceFromLocalStorage('wood', amount);    
    }
} 


export const updateCountDisplay = (listOfHTMLElements) =>{
        Data.initializeResources();
        const listOfResources = Data.loadResources(); 
        listOfHTMLElements[0].innerHTML = listOfResources.wood; 
        listOfHTMLElements[1].innerHTML = listOfResources.metal;
        listOfHTMLElements[2].innerHTML = listOfResources.gold;
}


export const Inventory = {
    addToInventory: object => {
        if(localStorage.getItem('inventory') === null) {
            localStorage.setItem('inventory', JSON.stringify([]))
        }
        const inventory = JSON.parse(localStorage.getItem('inventory'));
        inventory.push(object);
        localStorage.setItem('inventory', JSON.stringify(inventory)); 
    },

    fetchInventory : () => {
        if(localStorage.getItem('inventory') !== null) {
            return JSON.parse(localStorage.getItem('inventory'));
        }
    },

    fetchWarriorList: () => {
        const unfilteredInventory = Inventory.fetchInventory();  
        const yourWarriors = unfilteredInventory.filter(item => item.image.includes("./images/warrior-"));
        return yourWarriors;
    },

    fetchListofOther: () => {
        const unfilteredInventory = Inventory.fetchInventory();
        const listOfOthers = unfilteredInventory.filter(item => !item.image.includes("./images/warrior-"));
        return listOfOthers;
    }
}