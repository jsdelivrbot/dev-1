function add (num1, num2){
    return num1 + num2
};

console.log(add(4, 3));

function threeNum (num1, num2, num3) {
    var max = Math.max(num1, num2, num3);
    return max;
}
console.log(threeNum(3, 4, 6));

function evenOdd (num) {
    if(num % 2 === 0){
        return "even";
    }
    else{
        return "false";
    }
};

console.log(evenOdd(8));

function whore (string) {
    if(string.length <= 20) {
        return string + string;
    }
    else{
        return string.slice(0, string.length / 2);
    }
}
console.log(whore("hoe"));