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

// decrements the counter by -1 and update the counter-value element with new value
function decrementCounter() {
    counter = counter - 1 // decrement the counter value
    counterValueElement.textContent = counter // update the counter-value text
}

// resets the counter back to 0, and updates the counter-value element
function resetCounter() {
    counter = 0
    counterValueElement.textContent = counter
}

// event handling

// addEventListener needs 2 arguments:
// 1. Type of event in quotes or doublequotes, f.eks: "click"
// 2. Event handler function, f.eks: incrementCounter (important, only write the name of the function without paranthesis at back, otherwise the function would fire immediately and the event handler would fail to run as intended)
buttonIncrement.addEventListener("click", incrementCounter )

// decrement event handler
buttonDecrement.addEventListener("click", decrementCounter )

// reset event handler
buttonResetCounter.addEventListener("click", resetCounter )