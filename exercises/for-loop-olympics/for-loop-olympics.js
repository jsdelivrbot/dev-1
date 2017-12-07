var fruit = ["banana", "orange", "apple", "kiwi"];

var grid = [];
var nine = [];
var x = "x";




//push things to an array
//for loops where we can repeat actions multiple times
//i = rows j = columns
for(var i = 0; i < 7; i++){
    grid.push([]);
    for(var j = 0; j < 5; j++){
        grid[i].push(j);
    }
}

console.log(grid);

var num = [];
for(var i = 0; i < 10; i++) {
    num.push(i);
}
console.log(num);

var onlyEven = [];
for(var i = 2; i < 100; i+=2) {
    onlyEven.push(i)
}
console.log(onlyEven);

var newArray = [];
var fruit = ["bananah", "orange", "apple", "kiwi", "pear", "peach"];
for(var i = 0; i < fruit.length; i+=2) {
    newArray.push(fruit[i]);
}
console.log(newArray);


