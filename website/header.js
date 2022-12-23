const menu = document.querySelector("#header--menu")
const icon = document.querySelector("#header--icon")

icon.addEventListener("click", function(e) {
  menu.classList.remove("hidden")
  menu.classList.add("visible")
})

menu.addEventListener("mouseleave", function(e) {
  menu.classList.remove("visible")
  menu.classList.add("hidden")
})
