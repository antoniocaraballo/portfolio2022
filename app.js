const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");


function openMenu() {
  open.style.display = "none";
  close.style.display = "flex";
  nav.style.top = "100px";
  document.querySelector("body").style.overflowY = "hidden";
}

function closeMenu() {
  open.style.display = "flex";
  close.style.display = "none";
  nav.style.top = "-100vh";
  document.querySelector("body").style.overflowY = "scroll";
}