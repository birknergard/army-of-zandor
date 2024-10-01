export const purchaseAnimation = (event, iconArray, isLosingResource, amount) => {

    // Removes previous animation if is hasnt been removed already 
    const existingAnim = document.querySelector('.purchase');
    if(existingAnim){
        document.body.removeChild(existingAnim)
    }

    const animationElm = document.createElement('span');
    animationElm.className = 'purchase';

    iconArray.forEach(icon => {
        if(isLosingResource) {
            animationElm.innerHTML += `<span style="color:red;" class="purchase__text">${amount} - </span>
            <img class="purchase__image" src="${icon}">`;        
        } else {
            animationElm.innerHTML += `<span style="color:yellowgreen;" class="purchase__text">${amount} + </span>
            <img class="purchase__image" src="${icon}">`;        
        }
    });


    animationElm.style.top = `${event.pageY - 15}px`;
    animationElm.style.left = `${event.pageX + 30}px`; 

    document.body.appendChild(animationElm);

    setTimeout(() => {
        animationElm.style.opacity = 0;
        animationElm.style.transform = 'translateY(-40px)';
        }, 10);

    setTimeout(() => {
        if(animationElm && animationElm.parentElement){
            document.body.removeChild(animationElm);
        }
    }, 1500);
}