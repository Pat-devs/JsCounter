/* 
<h2 id="counter-value">0</h2>
<button id="button-increment">+</button>
<button id="button-decrement">-</button>
<button id="button-reset">Reset counter</button>
*/

// selecting elements with javascript

// #1 using the querySelector method

let buttonElement = document.querySelector("button")

console.log(buttonElement)


// #1b to select all elements that match a query:

let allButtons = document.querySelectorAll("button")

console.log(allButtons)