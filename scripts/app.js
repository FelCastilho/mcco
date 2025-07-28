// SCROLL HEADER
function scrollHeader(){
    const nav = document.getElementById("header");

    if(this.scrollY >= 50) nav.classList.add("active-header");
    else nav.classList.remove("active-header");
}

window.addEventListener("scroll", scrollHeader);

//DROPDOWN MENU
const dropdownMenu = document.getElementById("dropdown-item");
const menuItem = document.getElementById("menu-item");

menuItem.addEventListener("mouseenter", () => {
    dropdownMenu.classList.add("active-dropdown-menu");
});

menuItem.addEventListener("mouseleave", () => {
    dropdownMenu.classList.remove("active-dropdown-menu");
});

// MENU MOBILE

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active-menu-mobile");
            toggle.classList.toggle("active-bx");
        });
    }
}

showMenu("bx", "menu-mobile");