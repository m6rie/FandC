const nameForm = document.querySelector("#name")
const emailForm = document.querySelector("#email")
const commentForm = document.querySelector("#comment")
const counter = document.querySelector("#counter")
const submit = document.querySelector("#submit")
const body = document.body
const commentList = document.querySelector("#comment-list")

counter.innerHTML = "0/140"
const maxCount = 140

comment.addEventListener("keyup", function(e){
  console.log(comment.innerHTML.length)

  counter.innerHTML = `${comment.value.length}/140`

  if((comment.value.length+1) > maxCount) {
    const rouge = document.createElement("span")
    comment.appendChild(rouge)
    rouge.classList.add("red")

    const dayyt = JSON.stringify(comment.value)
    console.log(dayyt)

    dayyt.classList.add("red")
  }
})
const str = comment.innerHTML

// for(let i = 0; i < str.length; i++) {
//   const dayyt = JSON.stringify(comment.value)
//   console.log(str)
//   console.log(str.charAt(i))
//   console.log(dayyt)

//   if(str.charAt(i) > 140) {
//     str.charAt(i).classList.add("red")
//   }
// }

submit.addEventListener("click", newComment())

function newComment() {
  console.log("bou")


  const commentItem = document.createElement("div")
  commentList.appendChild(commentItem)
  // commentItem.classList.add("comment-item")
  let commentName = document.createElement("p")
  let commentEmail = document.createElement("p")
  let commentContent = document.createElement("p")

  commentName = nameForm.innerHTML
  commentEmail = emailForm.innerHTML
  commentContent = commentForm.innerHTML
  commentItem.appendChild(commentName)
  commentItem.appendChild(commentEmail)
  commentItem.appendChild(commentContent)
  // commentItem.innerHTML = "go"

}


// nameForm.innerHTML =
// emailForm.innerHTML =
// commentForm.innerHTML =
