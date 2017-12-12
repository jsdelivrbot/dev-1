var rs = require("readline-sync");

var firstNum = rs.question("Please enter your first number?");
var secondNum = rs.question("Please enter your second number?");
var operation = rs.question("Please enter the operation to perform")

function add(num1, num2){
    return Number(num1) + Number(num2);
}

function sub(num1, num2){
    return Number(num1) - Number(num2);
}

function mult(num1, num2){
    return Number(num1) * Number(num2);
}
function div(num1, num2){
    return Number(num1) / Number(num2);
}

if (operation === "subtract") {
    console.log(sub(firstNum, secondNum));
} else if (operation === "add") {
    console.log(add(firstNum, secondNum));
} else if (operation === "multiply") {
    console.log(mult(firstNum, secondNum));
} else if (operation === "divide") {
    console.log(div(firstNum, secondNum));
}

