export const subtractOrAddResourceAnimation = (event, iconArray, isLosingResource, amount) => {
    // Checks if "amount" argument is an array, nests itself in array if not.
    if(!Array.isArray(amount)) {
       amount = [amount];
    }

    // Removes previous animation if is hasnt been removed already 
    const existingAnim = document.querySelector('.animation');
    if(existingAnim){
        document.body.removeChild(existingAnim)
    }

    // 
    const animationElm = document.createElement('div');
    animationElm.className = 'animation';
    for(let i = 0; i < iconArray.length; i++){
        if(isLosingResource) {
            animationElm.innerHTML += `
            <p style="color:red;" class="animation__symbol">-</p>
            <p style="color:red;" class="animation__text">${amount[i]}</p>
            <img class="animation__image" src="${iconArray[i]}">`;
        } else {
            animationElm.innerHTML += `
            <p style="color:yellowgreen;" class="animation__symbol">+</p>
            <p style="color:yellowgreen;" class="animation__text">${amount[i]}</p>
            <img class="animation__image" src="${iconArray[i]}">`;
        }
    }


    animationElm.style.top = `${event.pageY - 12.5}px`;
    animationElm.style.left = `${event.pageX + 25}px`; 

    document.body.appendChild(animationElm);

    setTimeout(() => {
        animationElm.style.opacity = 1;
        animationElm.style.transform = 'translateY(-40px)';
        }, 10);

    setTimeout(() => {
        if(animationElm && animationElm.parentElement){
            //document.body.removeChild(animationElm);
        }
    }, 1500);
}

export const lackingResourcesAnimation = (event) => {
    
    // Removes previous animation if is hasnt been removed already 
    const existingAnim = document.querySelector('.purchase');
    if(existingAnim){
        document.body.removeChild(existingAnim)
    }

    const animationElm = document.createElement('div');
    animationElm.className = 'animation';
    animationElm.innerHTML = `<p class="animation__text--failed">insufficient<br>resources</p>`

    animationElm.style.top = `${event.pageY - 7.5}px`;
    animationElm.style.left = `${event.pageX + 15}px`; 

    document.body.appendChild(animationElm);

    setTimeout(() => {
        animationElm.style.opacity = 1;
        animationElm.style.transform = 'translateY(-40px)';
        }, 10);

    setTimeout(() => {
        if(animationElm && animationElm.parentElement){
            //document.body.removeChild(animationElm);
        }
    }, 1500);
}
