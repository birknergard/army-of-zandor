export const Unit = {
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

    searchForUnit: unit => {
        const listOfWarriors = Unit.fetchListFromLocalStorage('warrior');
        const listOfOthers = Unit.fetchListFromLocalStorage('other');
        
        const warriorsFound = listOfWarriors.filter(unit => unit.categoryName.includes(unit)); 
        const othersFound = listOfOthers.filter(unit => unit.categoryName.includes(unit));
         
        const warriorsAndOthersFound = [warriorsFound, othersFound]
        
        if(warriorsAndOthersFound.some(unit)){
            return warriorsAndOthersFound;
        } else {
            return false;
        }
    }
}
export const Resource = {

    initializeResources: () => {
        if(localStorage.getItem('resources') === null){
            localStorage.setItem('resources', JSON.stringify({'gold': 0, 'metal': 0, 'wood': 0}));
        }
    },

    loadResources: () => {
        return JSON.parse(localStorage.getItem('resources'));    
    },

    uploadResources: (resourceList) => {
        localStorage.setItem('resources', JSON.stringify(resourceList))
    },

    generateResource: (amount, resource) => {
        let resourceList = Resource.loadResources();
        resourceList[resource] += amount;
        Resource.uploadResources(resourceList);
    },

    subtractResourceFromLocalStorage: (resource, amount) => {
        let resourceList = Resource.loadResources();
        if(amount <= resourceList[resource]){
            resourceList[resource] -= amount;
            Resource.uploadResources(resourceList)
        }        
    },

    generateGold: amount => {
        Resource.generateResource(amount, 'gold');
    },
    
    generateMetal: amount => {
        Resource.generateResource(amount, 'metal');
    },
    
    generateWood: amount => {
        Resource.generateResource(amount, 'wood');
    },


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


export const updateCountDisplay = (listOfHTMLElements) =>{
        Resource.initializeResources();
        const listOfResources = Resource.loadResources(); 
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