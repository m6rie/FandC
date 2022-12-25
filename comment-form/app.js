// skfjhv@gmail.com

const nameForm = document.querySelector("#name");
const emailForm = document.querySelector("#email");
const commentForm = document.querySelector("#comment");
const counter = document.querySelector("#counter");
const commentList = document.querySelector("#comment-list");
const form = document.querySelector("#comment-form");

counter.innerHTML = "0/140";
const maxCount = 140;

commentForm.addEventListener("keyup", countChar)

// Function to count character
function countChar() {
  counter.innerHTML = `${commentForm.value.length}/140`;

  if((commentForm.value.length) > maxCount) {
    commentForm.classList.add("red");
  } else {
    commentForm.classList.remove("red");
  }
}

// when the page load, get the comments saved in localstorage and display them on the page
window.addEventListener("load", function(e) {
  allComment = JSON.parse(this.localStorage.getItem("allComment")) || []

  allComment.forEach(commentInput => {
    let commentItem = document.createElement("div");
    let commentName = document.createElement("p");
    let commentEmail = document.createElement("p");
    let commentContent = document.createElement("p");

    commentItem.classList.add("comment-item")
    commentName.classList.add("comment-name")
    commentEmail.classList.add("comment-email")
    commentContent.classList.add("comment-content")

    commentName.innerHTML = `${(commentInput.fullname).substring(0,1).toUpperCase()}` + `${(commentInput.fullname).substring(1).toLowerCase()}`
    commentEmail.innerHTML = (emailForm.value).toLowerCase();
    commentEmail.innerHTML = `${commentInput.email}`
    commentContent.innerHTML = `${commentInput.commentsection}`

    commentItem.append(commentName);
    commentItem.append(commentEmail);
    commentItem.append(commentContent);
    commentList.appendChild(commentItem);
  })
  e.preventDefault()
})


// CREATE
form.addEventListener("submit", function(e){
  if(commentForm.value.length > maxCount) {
    alert("You have too many character. Please stay under the 140 character limit.")
  } else if ((nameForm.value == "") || (emailForm.value == "")) {
    alert("Don't forget your name and email address")
  } else {
    newComment(e);
  }
  e.preventDefault()
})


function newComment(e) {
  let commentItem = document.createElement("div");
  let commentName = document.createElement("p");
  let commentEmail = document.createElement("p");
  let commentContent = document.createElement("p");

  commentItem.classList.add("comment-item")
  commentName.classList.add("comment-name")
  commentEmail.classList.add("comment-email")
  commentContent.classList.add("comment-content")

  commentInput = {
    fullname: e.target.elements.fullname.value,
    email: e.target.elements.email.value,
    commentsection: e.target.elements.commentsection.value,
    returnName : function() {
      return this.fullname
    },
    returnEmail : function() {
      return this.email
    },
    returnComment : function() {
      return this.commentsection
    }
  }

  allComment.push(commentInput)

  localStorage.setItem("allComment", JSON.stringify(allComment))

  // commentName.innerHTML = nameForm.value;
  // commentEmail.innerHTML = emailForm.value;
  // commentContent.innerHTML = commentForm.value;
  commentName.innerHTML = `${(commentInput.fullname).substring(0,1).toUpperCase()}` + `${(commentInput.fullname).substring(1).toLowerCase()}`
  commentEmail.innerHTML = (emailForm.value).toLowerCase();
  commentContent.innerHTML = commentInput.returnComment()

  // commentEmail.innerHTML = `${commentInput.email}`
  // commentContent.innerHTML = `${commentInput.commentsection}`
  commentItem.append(commentName);
  commentItem.append(commentEmail);
  commentItem.append(commentContent);
  commentList.appendChild(commentItem);

  nameForm.value = "";
  emailForm.value = "";
  commentForm.value = "";
  counter.innerHTML = "0/140";
}
