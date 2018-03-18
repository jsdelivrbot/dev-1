function fizzBuzz(){
    for (var i=1; i <= 15; i++)
    {
        if (i % 15 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }

}

fizzBuzz() 

function fizzBuzz(n){
    var output = [];
    for(let i = 1; i <= n; i++){
        if (i % 15 === 0){
            output.push("fizzbuzz")
        } else if(i % 3 === 0){
            output.push("fizz")
        } else if (i % 5 === 0){
            output.push("buzz")
        }  else {
            output.push(String(i));
        }
            
    }


    return output;
}   

console.log(fizzBuzz(20))