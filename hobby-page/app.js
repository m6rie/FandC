const date = document.querySelector("#date")
const quizz = document.getElementById("quizz")
const answerQuizz = document.getElementsByClassName("answerQuizz")

const today = new Date()

date.innerHTML = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(today)

quizz.addEventListener("click", displayQuestion)

function displayQuestion() {
  quizz.innerHTML = ''
  const questionContainer = document.createElement("span")
  const answer1 = document.createElement("button")
  const answer2 = document.createElement("button")
  const answer3 = document.createElement("button")

  answer1.classList.add("button-quizz")
  answer2.classList.add("button-quizz")
  answer3.classList.add("button-quizz")

  questionContainer.innerHTML = `Starting what temperature can it start snowing?<br>`
  answer1.textContent = "-1 degree Celsius"
  answer2.textContent = "0 degree Celsius"
  answer3.textContent = "2 degree Celsius"

  quizz.append(questionContainer)
  quizz.append(answer1)
  quizz.append(answer2)
  quizz.append(answer3)

  answerList = [answer1, answer2, answer3]

  for(let i = 0; i < answerList.length; i++) {
      answerList[i].addEventListener("click", function(e) {
        let rightAnswer = false
        while (rightAnswer == false) {
          if(answerList[i]==answer1) {
            answerList[i].parentElement.classList.add("red")
            break;
          } else if (answerList[i]==answer2) {
            answerList[1].parentElement.classList.add("red")
            break;
          } else if (answerList[i]==answer3) {
            answerList[2].parentElement.classList.add("green")
            rightAnswer = true
            break;
          }
        }
      })
  }
}
