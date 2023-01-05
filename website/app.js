const indexAnimation = document.querySelector("#index-animation")
const body = document.body
const indexSingleDivs = document.querySelectorAll(".index-div")
const enterDiv = document.querySelector("#enter-div")

// ENTER BUTTON
enterbtn = document.createElement("button")
enterbtn.innerHTML = "Enter"
enterbtn.classList.add('enterbtn')
enterDiv.append(enterbtn)
// redirect to new page when Enter button is clicked
enterbtn.addEventListener("click", function(e) {
  window.location.href = "./about-me/about-me.html";
})

// EMOJIS
// Event listener for them to appear
window.addEventListener("load", poppingEmoji)
// Setting the interval of 1 seconde between each new emoji's appearance
setInterval(poppingEmoji, 100)

function poppingEmoji() {
  emojiArray = ['😊','💃🏾','🎉','😽','👩🏾‍🍳','👩🏾‍💻','✨','🧶','🔥','🌝','🤌🏾','🥳','🥸']

  for(let i = 0; i < indexSingleDivs.length; i++) {
    indexSingleDivs[Math.floor(Math.random() * indexSingleDivs.length + 1)].innerHTML = emojiArray[Math.floor(Math.random() * emojiArray.length)]
    break;
  }
}
