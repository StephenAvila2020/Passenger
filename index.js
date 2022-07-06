
//Store the count
//intialize as 0
//listen for clicks
//increment the count button when clicked
//change the count-el in html 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //pass in arguments
console.log(countEl) //passing in variable to log to console

let count = 0

function increment() {
    count += 1

    countEl.textContent = count

    console.log(count)
}


function save() {
    let countStr = count + " - "

    saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0

    console.log(countStr)
}

