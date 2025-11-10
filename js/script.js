/* 
<h2 id="counter-value">0</h2>
<button id="button-increment">+</button>
<button id="button-decrement">-</button>
<button id="button-reset">Reset counter</button>
*/

// selecting elements with javascript

// #1 using the querySelector method

// declare a variable named "buttonElement", and store the value of querySelector query in it, in this case first element that is a button
let buttonElement = document.querySelector("button")

console.log(buttonElement)

// declare a variable and grab the element with id #button-decrement
let buttonDecrement = document.querySelector("#button-decrement")

console.log(buttonDecrement)


// to select elements by class name, use .classname (like in CSS)
let someDivs = document.querySelector(".somedivs") 

console.log(someDivs)