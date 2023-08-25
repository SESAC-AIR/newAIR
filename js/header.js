// search 모달창

const modalSearch = document.querySelector(".modal-search");
const x = modalSearch.querySelector(".fa-xmark");
const search = modalSearch.querySelector(".search");
const field = search.querySelector(".field");
const inputSearch = field.querySelector("input[type='search']");
// console.log(inputSearch);
const hashtag = modalSearch.querySelector("p");
// const hashTag = field.querySelector(".hash-tag");
inputSearch.addEventListener("focus", function () {
  hashtag.style.display = "block";
  // console.log(this);
});

inputSearch.addEventListener("focusout", function () {
  hashtag.style.display = "none";
  // console.log(this);
});

const menu = document.querySelector(".menu-icon");
const menuIcon = menu.querySelectorAll("li");
const menuSearch = menuIcon[0];
// console.log(menuSearch);

menuSearch.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

x.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});

// mobile menu
const mobileMenu = document.querySelector(".mobile-menu-drop");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hide");
});
