var rs = require("readline-sync");

/*console.log('Hello! My name is Betty. Help me get to know you!\n');  
var firstName = rs.question('What is your first name? ');

console.log(firstName.toUpperCase());

console.log('you are cool');
var bio = rs.question("tell me what you like to do and ill try to remeber the last half");

var x = "nuno"
console.log(x.length)

var a = "hello";
a += " world"

console.log(a); */

var name = rs.question("What is your name?");
var age = rs.question("how old are you");
var lifeStory = rs.question("tell me your life story in excrutioating detail");

var person = {
    name: name.toUpperCase(),
    age: age,
    lifeStory: lifeStory
}
function checkLength(str){
    if(str.length > 20){
        return str.slice(Math.floor(lifeStory.length / 2));
    } else {
        return str;
    }
}

console.log("\n" + checkLength(person.lifeStory) + "\n");

//console.log(person.name.length)
console.log(person.lifeStory.slice(Math.floor(lifeStory.length / 2)));
//console.log(name + age)

//console.log(lifeStory.slice(Number(userChoice)))
