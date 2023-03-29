const d = document,
  $btnmenu = d.querySelector(".menu-btn"),
  $menu = d.querySelector(".menu");

$btnmenu.addEventListener("click", (e) => {
  $menu.classList.toggle("none");
});

d.addEventListener("click", (e) => {
  if (!e.target.matches(".menu a")) return false;
  $menu.classList.toggle("none");
});
