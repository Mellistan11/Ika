// Menu open / close //
const menuButton = document.getElementById("menu-button");
let menuOpen = false;

menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuButton.classList.add('menu-button-open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('menu-button-open');
        menuOpen = false;
    }
});