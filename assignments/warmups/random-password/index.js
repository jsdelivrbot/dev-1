/*var randomstring = Math.random().toString(36).slice(-8);
console.log(randomstring);*/

function genPassword(int){
    //let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMBI!@#$%^&*("
    var output = "";
    for(var i = 0; i < int; i++){
        output += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
    }
    return output
}

console.log(genPassword(7));

//console.log(String.fromCharCode());

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
console.log(generatePassword())