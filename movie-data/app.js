const movieTable = document.querySelector("#movies-display")
const sorter = document.getElementsByClassName("sorting-arrow")

let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

document.addEventListener("load",insertData())

function insertData() {
  const keys = Object.keys(movieData)
  keys.forEach((key, index) => {
    const castFormatting = (movieData[key].cast).map(x => " " + x)

    const table = movieTable.getElementsByTagName("tbody")[0]
    const newRow = table.insertRow(table.length)
    const cell1 = newRow.insertCell(0)
          cell1.innerHTML = key
    const cell2 = newRow.insertCell(1)
          cell2.innerHTML = movieData[key].year
    const cell3 = newRow.insertCell(2)
          cell3.innerHTML = movieData[key].runtime
    const cell4 = newRow.insertCell(3)
          cell4.innerHTML = movieData[key].rating
    const cell5 = newRow.insertCell(4)
          cell5.innerHTML = castFormatting
    const cell6 = newRow.insertCell(5)
          cell6.innerHTML = movieData[key].plot

    // console.log(`${key}`)
    // console.log(movieData[key].runtime)
    // console.log(movieData[key].plot)
    // console.log(movieData[key].rating)
    // console.log(movieData[key].year)
    // console.log(movieData[key].cast)

    // const map1 = (movieData[key].cast).map(x => x + " ")
    // console.log(map1)
    // for(let i = 0; i < (movieData[key].cast).length; i++) {
    //   console.log(movieData[key].cast[i])
    // }
  })
}

function sortTable(n) {
  // initializing global variable
  switchCount = 0
  switching = true
  direction = "asc"

  // while the rows need to switch do this:
  while (switching) {
    switching = false
    rows = movieTable.rows // define what a row is so that all the row moves when the sorted cell moves

    // iterating through the rows while excluding the thead
    for(i = 1; i < (rows.length - 1); i++) {
      // creating boolean variable to determine which row should switch
      shouldSwitch = false

      // targeting a cell 'n' inside a row 'x' and its downside sibling 'n' inside the row 'y' so we can compare them later
      let x = rows[i].getElementsByTagName("td")[n]
      let y = rows[i+1].getElementsByTagName("td")[n]

      // if we are sorting in an ascendent order (which we are: l85) do as follow
      if(direction == "asc") {
        // check if the text inside the cell 'x' in bigger (meaning alphabetically descendant) to the cell 'y' underneath it
        if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // if it is bigger, the cells (and their rows) should switch position in the table
          shouldSwitch = true
          // stop the if statement to go to the next if statement
          break;
        }
      } // if we are sorting in a descendent order do the opposite with 'x' content < 'y' content
        else if(direction == "desc") {
        if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true
          break;
        }
      }
    }
    // when shouldSwitch is true according to the previous if statement
    if(shouldSwitch) {
      // select the Node parent of the row of the 'x' cell (tbody), and insert the row of the 'y' cell before the row of the 'x'
      // parentElementOfX.insertBefore(newElement, oldElement)
      rows[i].parentNode.insertBefore(rows[i+1], rows[i])
      // change switching from false to true
      switching = true
      // increase the number of switchCount by 1
      switchCount++
    } else {
      // if after trying to switch the rows the switchCount is 0 and the direction is ascendent, change the direction to descendant and switch the rows the other way around
      if(switchCount == 0 && direction == "asc") {
        direction = "desc"
        switching = true
      }
    }
  }
}
