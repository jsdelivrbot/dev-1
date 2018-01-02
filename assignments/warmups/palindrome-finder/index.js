let isPalindrome = (str) => {
    str = str.replace(/[^A-z]/g, "");
    for (let i = 0; i < str.length / 2; i++) {
        let first = str[i].toLowerCase();
        let last = str[str.length - 1 - i].toLowerCase();
        if (first !== last) {
            return false;
        }
    }
    return true;
}

isPalindrome("3@_!GDE()");

module.exports = isPalindrome;