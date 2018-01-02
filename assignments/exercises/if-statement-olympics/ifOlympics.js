var person = {
    name: "mrbee",
    age: 23,
}
if (person.age > 18) {
    console.log("mr bee can go to the movie");
} else {
    console.log("mr bee cannot go to movie");
}
if (person.name.startsWith("B")) {
    console.log("mr bee can go to the movie");
} else {
    console.log("mr bee cannot go to movie")
}

var x = 1
var y = 2
var z = 4


if (x <= y && !y == !z) {
    console.log("yes");
}
else {
    console.log("No");
}

var myVar = "dog"

if (typeof myVar === 'string' || myVar instanceof String)
console.log("its a string")
else {
    console.log("its not a string")
}

var booleanValue = true;

function someFunction(){
    if(booleanValue){
        return "true";
    }
}

console.log(someFunction())

if (typeof myVar !== 'undefined') {
    console.log("the variable is defined")
}

if ("s" > 4){
    console.log("dogs are cool")
} else {
    console.log("dogs are gay")
}

var myNum = 10 

myNum % 2 === 0 ? (console.log("even")) : console.log("false");