
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");


const swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});


function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") {
    rootHtml.setAttribute("data-theme", "light");
  } else {
    rootHtml.setAttribute("data-theme", "dark");
  }
  
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}


toggleTheme.addEventListener("click", changeTheme);


accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    if (accordionActive) {
      accordionItem.classList.remove("active");
    } else {
      accordionItem.classList.add("active");
    }
  });
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});