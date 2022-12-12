const date = document.querySelector("#date")

const today = new Date()

date.innerHTML = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(today)
