const card = document.querySelectorAll(".card")
const det = document.querySelectorAll(".hidden")
const showMore = document.getElementsByClassName("more")
const closing = document.getElementsByClassName("close-details")

for (let i = 0; i < showMore.length; i++) {
  showMore[i].addEventListener("click", function(e) {
    hiddenDescription = showMore[i].nextElementSibling

    if(hiddenDescription.classList == "hidden"){
      hiddenDescription.classList.remove("hidden")
      showMore[i].innerHTML = ''
      hiddenDescription.classList.add("visible")
      closing[i].innerHTML = "Close description"
    // } else {
    //   hiddenDescription.classList.remove("visible")
    //   hiddenDescription.classList.add("hidden")
    //   showMore[i].innerHTML = 'show more'
    //   closing[i].innerHTML = ""
    }
  })

  closing[i].addEventListener("click", closeDetails)

  function closeDetails() {
    if(closing[i].innerHTML == "Close description") {
      hiddenDescription.classList.remove("visible")
      hiddenDescription.classList.add("hidden")
      showMore[i].innerHTML = 'show more'
      closing[i].innerHTML = ""
    }
  }
}
