const hamburger = document.querySelector(".hamburger");
const hamburgerImg = document.querySelector(".hamburger img");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");

  if (navbar.classList.contains("show")) {
    hamburgerImg.src = "./images/icon-close.svg";
  } else {
    hamburgerImg.src = "./images/icon-hamburger.svg";
  }
});
