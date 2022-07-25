// // console.log("this is console")
// let title = document.getElementById("one")
// console.log("before", title.innerText)

// // let msg = 'expert in full stack all time high'

// // title.innerText = 'msg'
// // console.log(title.innerText)
// let msg = "Good bye india soon going to usa"

// title.innerHTML = `<h1>${msg}</h1>`
// console.log("after", title.innerText)


// //BOXES

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')
// // redDiv.onclick = () => console.log("Clicked red")
// // yellowDiv.onclick = () => { return console.log("Clicked Yellow") }
// // greenDiv.onclick = () => (console.log("Clicked Green"))

// //Clicking on square is process or function (like after clicking some code is going to run => that is function 
// // (means function will be excuted after onclick ) 
// // because of that we are using ES6 fucntion (we can use normal function this also))


// let timesClicked = { "red": 0, "yellow": 0, "green": 0 }

// squares.forEach(square => {
//     square.onclick = () => {
//         timesClicked[square.value] += 1
//         square.innerText = timesClicked[square.value]
//     }
// }
// )
const squares = document.querySelectorAll('.colorSquare')

const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})



// const squares = document.querySelectorAll('.colorSquare')

// forEach
// const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
// squares.forEach(square => {
//   square.onclick = () => {
//     timesClicked[square.value] += 1
//     square.innerText = timesClicked[square.value]
//   }
// })
// function clearScores() {
//   timesClicked.red = 0
//   timesClicked.yellow = 0
//   timesClicked.green = 0
//   squares.forEach(square => {
//     square.innerText = ''
//   })
// }

// const clearGameBtn = document.getElementById('clear-game')
// clearGameBtn.onclick = () => clearScores()

