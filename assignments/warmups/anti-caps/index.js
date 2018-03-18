function isCaps(letter) {
  return letter === letter.toUpperCase();
}
function antiCaps(str) {
  var output = "";
  for (var i = 0; i < str.length; i++) {
    if (isCaps(str[i])) {
      output += str[i].toLowerCase();
    } else {
      output += str[i].toUpperCase();
    }
  }
  return output;
}

console.log(antiCaps("stRing"));

/* if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <+ 90) */

function DivisionStringified(num1, num2) {
  //divide and round
  var div = Math.round(num1 / num2);

  // convert answer to string and then to an array separating each number
  div = div.toString().split("");

  // keep counter for inserting comma logic
  var insert = 0;

  //logic for inserting a comma every 3 elements in the array starting from the end
  //e.g. ["4", "5", "3", "2"] becomes ["4", ",5", "3", "2"]
  //and then we would join all the numbers into a string
  if (div.length > 3) {
    for (var i = div.length - 1; i >= 0; i--) {
      insert++;
      if (insert === 3) {
        div[i] = "," + div[i];
        insert = 0;
      }
    }
  }

  return div.join('');
}

console.log(DivisionStringified(10000, 2));

function Division(num1,num2) { 

    var res = Math.round(num1/num2);
    var string = res.toString();
    var numleng = string.length;
    var newstring = string;
    
   if (numleng > 3) {
      var arr = string.split("");
     for (var i= numleng - 3; i > 0; i = i - 3) {
          arr.splice(i, 0, ",");
     }
      var newstring = arr.join("");
   }  
   
    return newstring; 
           
  }

  console.log(Division(10000000000, 1));