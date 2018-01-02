// //TRY BLOCKS

// function InputError(){
//     Error.call(this);
//     this.type = "Input Error";
//     this.message = "Input must be a number";
// }

// function add(x, y){
//     console.log(z)
//     if(typeof x != "number" || typeof z != "number"){
//         throw new Error ("Input must be a number");
//     }
//     return x + y;
// }



// try{
//     console.log(add(2, "5"));
// }catch(err){
//     console.log(err);
// } finally{
//     console.log("Im going to run. I dong give ")
// }

// // console.log(add(2, "3"));

// // console.log(add(2, 4))

// var input = "";

// try {  
//   if(input == "") {
//     throw "Input can not be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }

var myName = "John Doe";
console.log(myName);

function movieCheck(age) {
  try {
    if (age < 0) {
      throw "Error cannot be less than 0";
    } else if (age <= 12) {
      throw "You can see PG movies";
    } else if (age >= 13 && age < 18) {
      throw "You can see PG-13 movies";
    } else if (age >= 18) {
      throw "You can see R rated movies";
    }
  }
  }
movieCheck(-1);