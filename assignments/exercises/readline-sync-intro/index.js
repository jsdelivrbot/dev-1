var rs = require("readline-sync");

var firstNum = rs.question("what is your fist number?");
var secondNum = rs.question("what is your second nubmer?");

function sum(num1, num2){
    return Number(num1) + Number(num2);
}

//var response = rs.question("What is your name?");

//console.log(response.toUpperCase());

console.log(sum(firstNum, secondNum));