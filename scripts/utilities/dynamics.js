const purchaseAnimation = (event, iconSrc) => {
    const animationElm = document.createElement('span');
    animationElm.className = 'purchase';
    animationElm.innerHTML = `<img class="purchase__image" src="${iconSrc}"> -`;

    animationElm.style.top = `${event.pageY}px`;
    animationElm.style.left = `${event.pageX}px`; 

    document.body.appendChild(animationElm);

    setTimeout(() => {
        animationElm.style.opacity = 0;
    }, 50)
    setTimeout(() => {
        document.body.removeChild(animationElm);
    }, 1500)
}