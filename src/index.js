import exportTest from "./exportTest"

console.log("I am from index.js")
console.log(exportTest)

console.log("I am from index also")
console.log(process.env.PRINT_ME)

let element = document.querySelector("#container")
element.innerHTML = "hello from index.js. hooray! something"