function shareDigits(int1, int2) {
    if (Number(int1 % 10) === Number(int2 % 10)) {
        return true;
    } else {
        return false;
    }
}
console.log(shareDigits(4, 14));


function shareDigits(int1, int2) {
    return int1 % 10 === int2 % 10;
}

console.log(shareDigits(4, 13));

/* function isValidPwd(input) {
    return input.match(/[^\W\D]+/)
}

console.log(isValidPwd("4re3r3")); */