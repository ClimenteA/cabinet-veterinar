

document.addEventListener("DOMContentLoaded", () => {

    // MENU
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

    // VEZI DETALII MODALS
    let consultatii = document.getElementById("consultatii");
    let consultatiiModal = document.getElementById("consultatii-modal");
    let esteticaDeparazitare = document.getElementById("estetica-deparazitare");
    let esteticaDeparazitareModal = document.getElementById("estetica-deparazitare-modal");
    let sterilizareChirurgie = document.getElementById("sterilizare-chirurgie");
    let sterilizareChirurgieModal = document.getElementById("sterilizare-chirurgie-modal");
    let overlayDark = document.getElementById("overlay-dark");
    let closeModalItems = document.getElementsByClassName("close-modal");

    function closeModal() {
        window.scrollTo(0, 0);
        document.body.classList.remove("overflow-hidden");
        overlayDark.classList.add("none");
        consultatiiModal.classList.add("none");
        esteticaDeparazitareModal.classList.add("none");
        sterilizareChirurgieModal.classList.add("none");
    }

    Array.from(closeModalItems).forEach(element => {
        element.addEventListener("click", closeModal);
    });

    overlayDark.addEventListener("click", closeModal);

    consultatii.addEventListener("click", () => {
        window.scrollTo(0, 0);
        document.body.classList.add("overflow-hidden");
        overlayDark.classList.remove("none");
        consultatiiModal.classList.remove("none");
    });

    esteticaDeparazitare.addEventListener("click", () => {

    });

    sterilizareChirurgie.addEventListener("click", () => {

    });

});