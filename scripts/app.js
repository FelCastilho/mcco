//MOUSE FOLLOWER

const ball = document.querySelector('.cursor-ball');

document.addEventListener('mousemove', (e) => {
  ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// SCROLL HEADER
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 50) nav.classList.add("active-header");
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

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active-menu-mobile");
      toggle.classList.toggle("active-bx");
    });
  }
};

showMenu("bx", "menu-mobile");

// SLIDE

const bullet = document.querySelectorAll(".bullet");
const images = document.querySelectorAll(".img-slider");

bullet.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Zera opacidade e z-index de todas as imagens
    images[0].style.opacity = "0";
    images[1].style.opacity = "0";
    images[2].style.opacity = "0";

    images[0].classList.remove("active-img");
    images[1].classList.remove("active-img");
    images[2].classList.remove("active-img");

    // Ativa imagem certa
    images[index].style.opacity = "1";
    images[index].classList.add("active-img");

    // Atualiza bullets
    bullet[0].classList.remove("active-bullet");
    bullet[1].classList.remove("active-bullet");
    bullet[2].classList.remove("active-bullet");

    bullet[index].classList.add("active-bullet");
  });
});

// SCROLL TO TOP
const returnTop = document.querySelector(".return-top");

const returnTopBtn = document.querySelector(".return-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    returnTopBtn.classList.add("show");
  } else {
    returnTopBtn.classList.remove("show");
  }
});

returnTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ROTATE ARROW HOVER

const serviceItems = document.querySelectorAll(".service-img");

serviceItems.forEach((item) => {
  const arrow = item.querySelector(".arrow-services");

  item.addEventListener("mouseenter", () => {
    arrow.style.transition = "transform 0.3s ease";
    arrow.style.transform = "rotate(-45deg)";
  });

  item.addEventListener("mouseleave", () => {
    arrow.style.transition = "transform 0.3s ease";
    arrow.style.transform = "rotate(0deg)";
  });
});

