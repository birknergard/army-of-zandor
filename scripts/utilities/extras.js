export const Random =  {
    range: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }    
};

export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 