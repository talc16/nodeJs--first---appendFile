const jsonFileAppend = require("./jsonAppend")
const result = jsonFileAppend.appendToFile("./info.txt", "Append new line")
console.log(result)