// declare a numerical variable for the counter
let counter = 0



// select all the buttons, and store them in each variable
let buttonIncrement = document.querySelector("#button-increment")
let buttonDecrement = document.querySelector("#button-decrement")
let buttonResetCounter = document.querySelector("#button-reset")

// Select the counter-value element
let counterValueElement = document.querySelector("#counter-value")

// print out the value of the counter-value element:
//console.log(counterValueElement.textContent)

// increment  the counter-value element value
counterValueElement.textContent = counterValueElement.textContent + 1

// print out the value of the counter-value element:
//console.log(counterValueElement.textContent)






// declare a function called greet
function greet() {
    // inside function body {...}
    // we can have some code

    console.log("Hi")
    console.log("How are you?")
}

// to run a function, write its name, followed by ()
greet()
greet()
greet()
greet()
greet()
greet()
greet()
greet()

// increment counter variable
// counter = counter + 1

// print counter variable
// console.log(counter)
