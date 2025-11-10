// declare a numerical variable for the counter
let counter = 0

// select all the buttons, and store them in each variable
let buttonIncrement = document.querySelector("#button-increment")
let buttonDecrement = document.querySelector("#button-decrement")
let buttonResetCounter = document.querySelector("#button-reset")

// Select the counter-value element
let counterValueElement = document.querySelector("#counter-value")

// Set the counter-value element value to whatever our counter variable is
counterValueElement.textContent = counter


// increments the counter by +1 and update the coutner-value element with new value
function incrementCounter() {
    counter = counter + 1 // increment the counter value
    counterValueElement.textContent = counter
}

incrementCounter()

// decrements the counter by -1 and update the counter-value element with new value
function decrementCounter() {
    counter = counter - 1 // decrement the counter value
    counterValueElement.textContent = counter // update the counter-value text
}

decrementCounter()
decrementCounter()

// resets the counter back to 0, and updates the counter-value element
function resetCounter() {
    counter = 0
    counterValueElement.textContent = counter
}

resetCounter()