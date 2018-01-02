var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var space = parseInt(readline.question('How many letters would you like to shift? '));


var plaintext = input;
var ciphertext = ' ';
var shift = space;
for (var i = 0; i < plaintext.length; i++) {
    var c = plaintext.charCodeAt(i);
    var e = c + shift;
    ciphertext += String.fromCharCode(e);
}
console.log(plaintext + ' -> ' + ciphertext);