var removeDups = function(str) {
    var output = {
        noDups: "",
        dups: ""
    }
    //does the stuff

    //iterate through the string
    for(var i = 0; i < str.length; i++){
        if(output.noDups.indexOf(str[i]) < 0) {
            //push to no-dups
            output.noDups += str[i];
        } else {
            //put in the dups
            output.dups += str[i];
        }
    }
    //check if current character of original string is in the no-dups
    //if so, put in the dups array, otherwise, push to no-dups
    //turn each array into a sting
    // put strings into output

    return output;
}

console.log(removeDups("bookkeeper larry"));

function uniquereduce(instring){ 
    outstring = ''
    instringarray = instring.split('')
    used = {}
    for (var i = 0; i < instringarray.length; i++) {
        if(!used[instringarray[i]]){
            used[instringarray[i]] = true
            outstring += instringarray[i]
        }
    }
    return outstring
}

console.log(uniquereduce("anaconda"));

function unique(str) {
    var result = '';
    for(var i = 0; i < str.length; i++) {
      if(result.indexOf(str[i]) < 0) {
        result += str[i];
      }
    }
    return result;
  }
  
  console.log(
    unique('abcdab'),
    unique('aaabbc')
  );