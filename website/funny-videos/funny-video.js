const caroussel = document.getElementById("caroussel")
const video = document.querySelector("#video")
// const videos = document.getElementsByClassName("div-video")
const backward = document.querySelector(".fa-chevron-left")
const forward = document.querySelector(".fa-chevron-right")
let videoTitle = document.querySelector("#videoname")

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

let currentItem = 0

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
    } else {
      console.log("neg")
    }
    e.preventDefault();
  })
})
