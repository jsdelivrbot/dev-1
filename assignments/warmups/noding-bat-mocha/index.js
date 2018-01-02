let or35 = function (int) {
    var output = [];
    for (let i = 1; i <= int; i++)
        if (i % 3 === 0) {
            return "true";
        }
        else if (i % 5 === 0) {
            return "true";
        }
        else {
            return "false";
        }
}

module.exports = or35;