import exportTest from "./app/exportTest.js"
require('dotenv').config()

console.log("I am from index.js")
console.log(exportTest)

console.log("I am from index also")
console.log(process.env.PRINT_ME)

console.log("should be token")
console.log(process.env.DROPBOX_ACCOUNT_ACCESS_TOKEN)

// let element = document.querySelector("#container")
// element.innerHTML = "hello from index.js. hooray! something"

const res = await 