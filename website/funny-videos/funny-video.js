const caroussel = document.getElementById("caroussel")
const video = document.querySelector("#video")
const backward = document.querySelector(".fa-caret-left")
const forward = document.querySelector(".fa-caret-right")
let videoTitle = document.querySelector("#videoname")
const dots1 = document.querySelector(".dots-1")
const dots2 = document.querySelector(".dots-2")
const dots3 = document.querySelector(".dots-3")
const dots4 = document.querySelector(".dots-4")
const dots5 = document.querySelector(".dots-5")
const dots6 = document.querySelector(".dots-6")
const dots7 = document.querySelector(".dots-7")
const dots8 = document.querySelector(".dots-8")
const dotsArray = [dots1, dots2, dots3, dots4, dots5, dots6, dots7, dots8]
let currentItem = 0

const videos = [
  {
    id: 1,
    videoname: "Casually Explained: French",
    video: "https://www.youtube.com/embed/a69toGGjoO0"
  },
  {
    id: 2,
    videoname: "Casually Explained: The English Language",
    video: "https://www.youtube.com/embed/9_RxaeN0FGw"
  },
  {
    id: 3,
    videoname: "Parks & Recreation - Ron Swanson's Best Moments in S06",
    video: "https://www.youtube.com/embed/faFTMySa2cQ"
  },
  {
    id: 4,
    videoname: "The Perks Of Being Straightforward",
    video: "https://www.youtube.com/embed/1kUshnpxYnE"
  },
  {
    id: 5,
    videoname: "UNUSUAL MEMES COMPILATION V212",
    video: "https://www.youtube.com/embed/nSeYFmdUOk4"
  },
  {
    id: 6,
    videoname: "Funniest Moment On Community - S1E22",
    video: "https://www.youtube.com/embed/6XRLKhvIge8"
  },
  {
    id: 7,
    videoname: "Philomena Cunk finds out that nuclear weapons still exist",
    video: "https://www.youtube.com/embed/5zabCBnUHLA"
  },
  {
    id: 8,
    videoname: "My Wife and Kids - Jay the Artist | Junior's Poem",
    video: "https://www.youtube.com/embed/Lnmdu1dSx4U"
  }
]

function selectingDot() {
  dotsArray.forEach((dot, index) => {
    if(dot.classList.contains("selecteddot")) {
      dot.classList.remove("selecteddot")
      dot.classList.add("unselecteddot")
    }
    if(index === currentItem) {
      dot.classList.add("selecteddot")
    }
  })
}

function firstDot() {
  currentItem = 0
  item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video
  selectingDot()
}

function secondDot() {
  currentItem = 1
  item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video
  selectingDot()
}

function thirdDot() {
  currentItem = 2
  item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video
  selectingDot()
}

function fourthDot() {
  currentItem = 3
  item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video
  selectingDot()
}

function fifthDot() {
  currentItem = 4
  item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video
  selectingDot()
}

function sixthDot() {
  currentItem = 5
  item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video
  selectingDot()
}

function seventhDot() {
  currentItem = 6
  item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video
  selectingDot()
}

function eighthDot() {
  currentItem = 7
  item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video
  selectingDot()
}

window.addEventListener("load", function(e) {
  let item = videos[currentItem]
  videoTitle.innerHTML = item.videoname
  video.src = item.video

  forward.addEventListener("click", function(e) {
    if(currentItem < videos.length) {
      currentItem++
      item = videos[currentItem]
      videoTitle.innerHTML = item.videoname
      video.src = item.video
      selectingDot()
    } else {
      console.log("nothing")
    }
    e.preventDefault();
  })

  backward.addEventListener("click", function(e) {
    if(currentItem > 0) {
      currentItem--
      item = videos[currentItem]
      videoTitle.innerHTML = item.videoname
      video.src = item.video
      selectingDot()

    } else {
      console.log("negative")
    }
    e.preventDefault();
  })
})
