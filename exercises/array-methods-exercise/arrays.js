var fruit = ["banana", "apple", "orange", "watermelon", 1];
var vegetables = ["carrot", "tomato", "pepper", "lettuce", ];
vegetables.pop();
fruit.shift();
console.log(vegetables.length);
//console.log(vegetables);
//console.log(fruit);
var food = fruit.concat(vegetables);
food.splice(4,2);
food.reverse();
var string = food.join();
console.log(string);


