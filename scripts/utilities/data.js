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

    generateGold: amount => {
        let resourceList = Data.loadResources();
        resourceList.gold += amount;
        localStorage.setItem('resources', JSON.stringify(resourceList));
    },
    
    generateMetal: amount => {
        let resourceList = Data.loadResources();
        resourceList.metal += amount;
        localStorage.setItem('resources', JSON.stringify(resourceList));
    },
    
    generateWood: amount => {
        let resourceList = Data.loadResources();
        resourceList.wood += amount;
        localStorage.setItem('resources', JSON.stringify(resourceList));
    },

    subtractResourceFromLocalStorage: (resource, amount) => {
        let resourceList = Data.loadResources();

        if(amount <= resourceList.resource){
            resourseList.resource -= amount;
            localStorage.setItem('resources', JSON.stringify(resourceList))
        }        
    },

    subtractGold: amount => {
        subtractResourceFromLocalStorage(gold, amount);    
    },
    
    subtractMetal: amount => {
        subtractResourceFromLocalStorage(metal, amount);    
    },

    subtractWood: amount => {
        subtractResourceFromLocalStorage(wood, amount);    
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