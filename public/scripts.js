

document.addEventListener("DOMContentLoaded", () => {

    let openMenu = document.getElementById("open-menu");
    let closeMenu = document.getElementById("close-menu");
    let menuLinks = document.getElementById("menu-links");

    openMenu.addEventListener("click", () => {
        openMenu.classList.add("none");
        closeMenu.classList.remove("none");
        menuLinks.classList.remove("none");
    });

    closeMenu.addEventListener("click", () => {
        closeMenu.classList.add("none");
        menuLinks.classList.add("none");
        openMenu.classList.remove("none");
    })


});