export const Nav = {
    navLinkElements: () => document.querySelectorAll('.nav-bar_button'),
    windowPathname: () => window.location.pathname,
    
    highlightCurrentPage: () =>{
        navLinkElements.forEach(navLinkElement => {
            if(navLinkElement.href.includes(windowPathname)){
                navLinkElement.classList.add('active');    
            }
        })
    }
}