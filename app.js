const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
let isOpen = false;

menu.addEventListener("click", (e) => {
    e.preventDefault();
    isOpen = !isOpen;
    // console.log(isOpen);

    if(isOpen === false) {
        if(nav.classList.contains("active"));
        nav.classList.remove("active");
    } else {
        nav.classList.add("active");
    }
});

// scroll
window.addEventListener("scroll", () => {
    const goUp = document.getElementById("goUp");
    const point = window.innerHeight * 1.2;
    if(window.scrollY > point) {
        goUp.classList.add("show");
    } else if (window.scrollY < point) {
        if(goUp.classList.contains("show")) {
            goUp.classList.remove("show");
        }
    }
});